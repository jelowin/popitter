import { useQuizState } from "context/QuizContext"
import styles from "./Answer.module.css"

export default function Answer({ answer }) {
  const [contextState, setContextState] = useQuizState()

  const handleCheckAnswer = (isCorrect) => {
    if (isCorrect) {
      setContextState({ ...contextState, score: contextState.score + 1 })
      setContextState({ ...contextState, showCorrectModal: true })
    } else {
      setContextState({ ...contextState, showIncorrectModal: true })
    }
  }

  return (
    <span
      className={styles.card}
      key={answer.id}
      onClick={() => handleCheckAnswer(answer.correct)}
    >
      {answer.name}
    </span>
  )
}
