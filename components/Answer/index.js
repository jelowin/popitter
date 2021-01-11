import styles from "./Answer.module.css"

export default function Answer({
  answer,
  setScore,
  setShowCorrectModal,
  setShowIncorrectModal,
}) {
  const handleCheckAnswer = (e, isCorrect) => {
    if (isCorrect) {
      // alert("Correct")
      setScore((prevScore) => prevScore + 1)
      setShowCorrectModal(true)
    } else {
      setShowIncorrectModal(true)
    }
  }

  return (
    <span
      className={styles.card}
      key={answer.id}
      onClick={(e) => handleCheckAnswer(e, answer.correct)}
    >
      {answer.name}
    </span>
  )
}
