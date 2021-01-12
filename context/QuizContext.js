import React, { useEffect } from "react"

const QuizStateContext = React.createContext()

// function quizReducer(state, action) {
//   switch (action.type) {
//     case "SET_QUESTIONS": {
//       return { ...state, questions: action.payload }
//     }

//     case "NEXT_QUESTION": {
//       const nextQuestion = state.currentQuestion + 1
//       if (state.questions && nextQuestion < state.questions.length) {
//         return { ...state, currentQuestion: state.currentQuestion + 1 }
//       } else {
//         return { ...state, showScoreModal: true }
//       }
//     }

//     case "RESET_CURRENT_QUESTION": {
//       return { ...state, currentQuestion: 0 }
//     }

//     case "SET_SCORE": {
//       return { ...state, score: state.score + 1 }
//     }

//     case "RESET_SCORE": {
//       return { ...state, score: 0 }
//     }

//     case "HANDLE_SCORE_MODAL": {
//       return { ...state, showScoreModal: action.payload }
//     }

//     case "HANDLE_CORRECT_MODAL": {
//       return { ...state, showCorrectModal: action.payload }
//     }

//     case "HANDLE_INCORRECT_MODAL": {
//       return { ...state, showIncorrectModal: action.payload }
//     }

//     case "SET_LOADING": {
//       return { ...state, isLoading: action.payload }
//     }

//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`)
//     }
//   }
// }

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
