import styles from "./options.module.css"

export default function Options() {
  const questions = [
    'character',
    'movie',
    'book'
  ]

  return (
    <div>
      <h1>LOTR INFO</h1>
      {
        questions.map((question, index) => {
          return (
            <button
              className={styles.button} 
              key={index}
            >
              {question}
            </button>
          )
        })
      }
    </div>
  )
}