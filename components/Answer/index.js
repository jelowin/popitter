export default function Answer({ answer }) {
  // const handleCheckAnswer = (isCorrect) => {
  //   if (isCorrect) {
  //     setContextState((prevState) => {
  //       return {
  //         ...prevState,
  //         score: prevState.score + 1,
  //         showCorrectModal: true,
  //       }
  //     })
  //   } else {
  //     setContextState((prevState) => {
  //       return {
  //         ...prevState,
  //         showIncorrectModal: true,
  //       }
  //     })
  //   }
  // }

  return (
    <span
      className="flex justify-center items-center text-justify p-2.5 cursor-pointer	border-2 rounded-lg hover:border-secondary"
      key={answer.id}
    >
      {answer.name}
    </span>
  )
}
