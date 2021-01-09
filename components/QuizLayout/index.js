import Score from "components/Score"
import { useState } from "react"
import styles from "./QuizLayout.module.css"

export default function QuizLayout(props) {
  const { questions } = props
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      // alert("Correct")
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }
  return (
    <div className={styles.layout}>
      {showScore ? (
        <Score score={score} questions={questions} />
      ) : (
        <>
          <div
            key={questions[currentQuestion].id}
            data-id={questions[currentQuestion].id}
            className
          >
            <div className={styles.title}>
              <h1 className>{questions[currentQuestion].question}</h1>
            </div>
            <div className={styles.grid}>
              {questions[currentQuestion].answers.map(
                ({ id, name, correct }) => {
                  return (
                    <span
                      className={styles.card}
                      key={id}
                      onClick={() => handleAnswerButtonClick(correct)}
                    >
                      {name}
                    </span>
                  )
                }
              )}
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => handleAnswerButtonClick}>Next</button>
          </div>
        </>
      )}
    </div>
  )
}
