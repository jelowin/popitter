import { atom } from "recoil"

export const questionsState = atom({
  key: "questions",
  default: null,
})

export const currentQuestionIndexState = atom({
  key: "currentQuestionIndex",
  default: 0,
})

export const scoreState = atom({
  key: "score",
  default: 0,
})

export const showScoreModalState = atom({
  key: "showScoreModal",
  default: false,
})

export const showCorrectModalState = atom({
  key: "showCorrectModal",
  default: false,
})

export const showIncorrectModalState = atom({
  key: "showIncorrectModal",
  default: false,
})
