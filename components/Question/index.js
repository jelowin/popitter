import Answer from "components/Answer"
import styles from "./Question.module.css"

export default function Question({
  questions,
  currentQuestion,
  setScore,
  setShowCorrectModal,
  setShowIncorrectModal,
}) {
  return (
    <div
      key={questions[currentQuestion].id}
      data-id={questions[currentQuestion].id}
      className
    >
      <div className={styles.title}>
        <h3 className="text-justify">{questions[currentQuestion].question}</h3>
      </div>

      <div className={styles.grid}>
        {questions[currentQuestion].answers.map((answer) => {
          return (
            <Answer
              key={answer.id}
              answer={answer}
              setScore={setScore}
              setShowCorrectModal={setShowCorrectModal}
              setShowIncorrectModal={setShowIncorrectModal}
            ></Answer>
          )
        })}
      </div>
    </div>
  )
}
