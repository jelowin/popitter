import styles from "./Progress.module.css"

export default function Progress({ currentQuestion, questions }) {
  return (
    <div className={styles.progress}>
      <h2>
        Pregunta {currentQuestion + 1} de {questions.length}
      </h2>
    </div>
  )
}
