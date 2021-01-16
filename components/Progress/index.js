export default function Progress({ data, currentQuestion }) {
  return (
    <>
      {data.data && (
        <div className="flex justify-center mb-2">
          <h5>
            Pregunta {currentQuestion + 1} de {data.data.data.length}
          </h5>
        </div>
      )}
    </>
  )
}
