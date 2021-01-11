import styles from "./Progress.module.css"

export default function Progress({ currentQuestion, questions }) {
  return (
    <div className={styles.progress}>
      <h4>
        Pregunta {currentQuestion + 1} de {questions.length}
      </h4>
    </div>
  )
}
