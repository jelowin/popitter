import { useTest } from "hooks/useTest"
import { useRouter } from "next/router"
import { currentQuestionIndexState } from "atoms"
import { useRecoilValue } from "recoil"

export default function Question({ setScore, setShowIncorrectModal, setShowCorrectModal }) {
  const router = useRouter()
  const { query } = router
  const { data } = useTest(query.id)
  const currentQuestionIndex = useRecoilValue(currentQuestionIndexState)

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
        <div key={data[currentQuestionIndex].id} data-id={data[currentQuestionIndex].id}>
          <div className="flex flex-col justify-center text-center mb-5 p-2.5">
            <h4 className="text-justify">{data[currentQuestionIndex].question}</h4>
          </div>

          <div className="grid grid-columns-1 grid-rows-4 gap-y-4">
            {data[currentQuestionIndex].answers.map((answer) => {
              return (
                <p
                  className="flex justify-center items-center text-justify p-2.5 cursor-pointer	border-2 rounded-lg hover:border-secondary"
                  key={answer.id}
                  onClick={() => handleCheckAnswer(answer.correct)}
                >
                  {answer.name}
                </p>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
