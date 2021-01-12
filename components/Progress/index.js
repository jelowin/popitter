import { useQuizState } from "context/QuizContext"
import styles from "./Progress.module.css"

export default function Progress() {
  const [contextState] = useQuizState()

  return (
    <>
      {contextState.questions ? (
        <div className={styles.progress}>
          <h4>
            Pregunta {contextState.currentQuestion + 1} de{" "}
            {contextState.questions.length}
          </h4>
        </div>
      ) : null}
    </>
  )
}
