import { useQuizState } from "context/QuizContext"

export default function Progress() {
  const { contextState } = useQuizState()

  return (
    <>
      {contextState.questions ? (
        <div className="flex justify-center mb-2">
          <h5>
            Pregunta {contextState.currentQuestion + 1} de{" "}
            {contextState.questions.length}
          </h5>
        </div>
      ) : null}
    </>
  )
}
