import { useState, useEffect } from "react"
import useFetchData from '../hooks/useFetchData'
import Options from "./Options"
import Characters from "./Characters"
import Books from "./Books"
import Movies from "./Movies"
import Loader from "./Loader"
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
    'character': <Characters data={data} />,
    'book': <Books data={data} />,
    'movie': <Movies data={data} />
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <h1 style={{margin: "0 auto"}}>LOTR INFO</h1>
        <Options selection={selection} setSelection={onClickHandler} />
        {
          loading && <Loader />
        }
        { 
          (data && !loading) && dataRender[selection]
        }
      </div>
    </div>
  )
}