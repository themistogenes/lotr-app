import styles from "./options.module.css"

export default function Options({ selection, setSelection }) {
  const questions = [
    'character',
    'movie',
    'book'
  ]

  console.log('SELECTION: ', selection);

  return (
    <>
      {
        questions.map((question, index) => {
          return (
            <button
              className={`${styles.button} ${question === selection ? styles.selectedButton : styles.nonSelectedButton}`} 
              key={index}
              onClick={setSelection(question)}
            >
              {question}
            </button>
          )
        })
      }
    </>
  )
}