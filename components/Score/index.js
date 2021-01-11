export default function Score({ score, questions }) {
  const calculatePercentage = () => {
    return `${(score / questions.length) * 100} %`
  }
  return (
    <div className="text-center">
      <h2>Tu puntuación final es: {calculatePercentage()}</h2>
    </div>
  )
}
