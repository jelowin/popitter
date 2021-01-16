export default function Score({ score, data }) {
  const calculatePercentage = () => {
    return `${(score / data.data.length) * 100} %`
  }
  return (
    <div className="text-center">
      <h3 className="mb-4">
        Has acertado {score} de {data.data.length}
      </h3>
      <h2 className="mb-5">Tu puntuación final es: {calculatePercentage()}</h2>
    </div>
  )
}
