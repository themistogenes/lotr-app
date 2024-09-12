import styles from "./movies.module.css"

export default function Movies({ data }) {
  return (
    <div className={styles.movieDashboard}>
      {
        data.docs.map((movie, index) => {
          return (
            <div key={index}>
              {movie.name}
            </div>
          )
        })
      }
    </div>
  )
}