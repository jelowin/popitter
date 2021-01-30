import { useTest } from "hooks/useTest"
import { useRouter } from "next/router"

export default function Progress({ currentQuestion }) {
  const router = useRouter()
  const { query } = router

  const { data } = useTest(query.id)

  return (
    <>
      {data && (
        <div className="flex justify-center mb-2">
          <h5>
            Pregunta {currentQuestion + 1} de {data.length}
          </h5>
        </div>
      )}
    </>
  )
}
