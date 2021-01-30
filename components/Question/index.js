import { useTest } from "hooks/useTest"
import { useRouter } from "next/router"

export default function Question({
  currentQuestion,
  setScore,
  setShowIncorrectModal,
  setShowCorrectModal,
}) {
  const router = useRouter()
  const { query } = router

  const { data } = useTest(query.id)
  const handleCheckAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1)
      setShowCorrectModal(true)
    } else {
      setShowIncorrectModal(true)
    }
  }

  return (
    <>
      {data && (
        <div key={data[currentQuestion].id} data-id={data[currentQuestion].id}>
          <div className="flex flex-col justify-center text-center mb-5 p-2.5">
            <h4 className="text-justify">{data[currentQuestion].question}</h4>
          </div>

          <div className="grid grid-columns-1 grid-rows-4 gap-y-4">
            {data[currentQuestion].answers.map((answer) => {
              return (
                <span
                  className="flex justify-center items-center text-justify p-2.5 cursor-pointer	border-2 rounded-lg hover:border-secondary"
                  key={answer.id}
                  onClick={() => handleCheckAnswer(answer.correct)}
                >
                  {answer.name}
                </span>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
