import { useQuizState } from "context/QuizContext"

export default function Score() {
  const [contextState] = useQuizState()

  const calculatePercentage = () => {
    return `${(contextState.score / contextState.questions.length) * 100} %`
  }
  return (
    <div className="text-center">
      <h3 className="mb-4">
        Has acertado {contextState.score} de {contextState.questions.length}
      </h3>
      <h2 className="mb-5">Tu puntuación final es: {calculatePercentage()}</h2>
    </div>
  )
}
