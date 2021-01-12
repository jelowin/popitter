import Answer from "components/Answer"
import { useQuizState } from "context/QuizContext"

export default function Question() {
  const { contextState } = useQuizState()

  return (
    <>
      {contextState.questions ? (
        <div
          key={contextState.questions[contextState.currentQuestion].id}
          data-id={contextState.questions[contextState.currentQuestion].id}
        >
          <div className="flex flex-col justify-center text-center mb-5 p-2.5">
            <h4 className="text-justify">
              {contextState.questions[contextState.currentQuestion].question}
            </h4>
          </div>

          <div className="grid grid-columns-1 grid-rows-4 gap-y-4">
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
