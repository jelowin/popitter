import Link from "next/link"

export default function Score(props) {
  const { score, questions } = props
  return (
    <>
      <h1>Tu puntuación es: </h1>
      <h3>
        {score} de {questions.length}
      </h3>
      <div>
        <Link href="/dashboard">
          <a>Volver al listado</a>
        </Link>
      </div>
    </>
  )
}
