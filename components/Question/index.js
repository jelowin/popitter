export default function Question({
  data,
  currentQuestion,
  setScore,
  setShowIncorrectModal,
  setShowCorrectModal,
}) {
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
      {data.data && (
        <div
          key={data.data.data[currentQuestion].id}
          data-id={data.data.data[currentQuestion].id}
        >
          <div className="flex flex-col justify-center text-center mb-5 p-2.5">
            <h4 className="text-justify">
              {data.data.data[currentQuestion].question}
            </h4>
          </div>

          <div className="grid grid-columns-1 grid-rows-4 gap-y-4">
            {data.data.data[currentQuestion].answers.map((answer) => {
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
