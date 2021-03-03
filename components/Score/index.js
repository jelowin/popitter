import { useTest } from "hooks/useTest"
import { useRouter } from "next/router"

export default function Score({ score }) {
  const router = useRouter()
  const { query } = router

  const { data } = useTest(query.id)

  const calculatePercentage = () => {
    return `${(score / data.length) * 100} %`
  }
  return (
    <div className="text-center">
      <h3 className="mb-4">
        Has acertado {score} de {data.length}
      </h3>
      <h2 className="mb-5">Tu puntuación final es: {calculatePercentage()}</h2>
    </div>
  )
}
