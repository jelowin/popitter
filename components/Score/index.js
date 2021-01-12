import { useQuizState } from "context/QuizContext"

export default function Score() {
  const [contextState] = useQuizState()

  const calculatePercentage = () => {
    return `${(contextState.score / contextState.questions.length) * 100} %`
  }
  return (
    <div className="text-center">
      <h2>Tu puntuación final es: {calculatePercentage()}</h2>
    </div>
  )
}
