import React, { useEffect } from "react"

const QuizStateContext = React.createContext()

function QuizProvider({ children, testId }) {
  const [contextState, setContextState] = React.useState({
    currentQuestion: 0,
    isLoading: false,
    questions: null,
    score: 0,
    showScoreModal: false,
    showCorrectModal: false,
    showIncorrectModal: false,
  })

  useEffect(() => {
    fetch(`/api/test/${testId}`)
      .then((res) => res.json())
      .then((res) => {
        setContextState({
          ...contextState,
          questions: res,
        })
      })
      .catch(console.error)
  }, [])

  return (
    <QuizStateContext.Provider value={[contextState, setContextState]}>
      {children}
    </QuizStateContext.Provider>
  )
}

function useQuizState() {
  const context = React.useContext(QuizStateContext)
  if (context === undefined) {
    throw new Error("useQuizState must be used within a QuizProvider")
  }
  return context
}

export { QuizProvider, useQuizState }
