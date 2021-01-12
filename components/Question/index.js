import Answer from "components/Answer"
import { useQuizState } from "context/QuizContext"
import styles from "./Question.module.css"

export default function Question() {
  const [contextState] = useQuizState()

  return (
    <>
      {contextState.questions ? (
        <div
          key={contextState.questions[contextState.currentQuestion].id}
          data-id={contextState.questions[contextState.currentQuestion].id}
          className
        >
          <div className={styles.title}>
            <h3 className="text-justify">
              {contextState.questions[contextState.currentQuestion].question}
            </h3>
          </div>

          <div className={styles.grid}>
            {contextState.questions[contextState.currentQuestion].answers.map(
              (answer) => {
                return <Answer key={answer.id} answer={answer}></Answer>
              }
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}
