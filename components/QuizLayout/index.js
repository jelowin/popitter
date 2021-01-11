import Button from "components/Button"
import Progress from "components/Progress"
import { useState } from "react"
import styles from "./QuizLayout.module.css"

export default function QuizLayout(props) {
  const { questions } = props
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [setScore] = useState(0)

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      // alert("Correct")
      setScore((prevScore) => prevScore + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
  }
  return (
    <div className={styles.layout}>
      <Progress currentQuestion={currentQuestion} questions={questions} />
      <>
        <div
          key={questions[currentQuestion].id}
          data-id={questions[currentQuestion].id}
          className
        >
          <div className={styles.title}>
            <h3 className="text-justify">
              {questions[currentQuestion].question}
            </h3>
          </div>
          <div className={styles.grid}>
            {questions[currentQuestion].answers.map(({ id, name, correct }) => {
              return (
                <span
                  className={styles.card}
                  key={id}
                  onClick={() => handleAnswerButtonClick(correct)}
                >
                  {name}
                </span>
              )
            })}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button onClick={handleAnswerButtonClick}>Siguiente</Button>
        </div>
      </>
    </div>
  )
}
