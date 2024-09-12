import { useState, useEffect } from "react"
import useFetchData from '../hooks/useFetchData'
import Options from "./Options"
import Characters from "./Characters"
import Books from "./Books"
import Movies from "./Movies"
import styles from "./dashboard.module.css"

export default function Dashboard() {
  const [selection, setSelection] = useState(null);
  const { data, loading, error } = useFetchData(selection);

  function onClickHandler(clickedButton) {
    return (
      () => setSelection(clickedButton)
    )
  }

  const dataRender = {
    'character': <Characters />,
    'book': <Books />,
    'movie': <Movies />,
  }

  return (
    <div className={styles.dashboard}>
      <h1>LOTR INFO</h1>
      <Options selection={selection} setSelection={onClickHandler} />
      { 
        (data && loading) && (
          dataRender[selection]
        )
      }
    </div>
  )
}