import {
  currentQuestionIndexState,
  scoreState,
  showScoreModalState,
  showCorrectModalState,
  showIncorrectModalState,
} from "atoms"
import { selector } from "recoil"

export const currentQuestionSelector = selector({
  key: "currentQuestionSelector",
  get: ({ get }) => {
    const currentQuestion = get(currentQuestionIndexState)
    return currentQuestion + 1
  },
})

export const scoreSelector = selector({
  key: "scoreSelector",
  get: ({ get }) => get(scoreState),
})

export const showScoreModalSelector = selector({
  key: "showScoreModalSelector",
  get: ({ get }) => get(showScoreModalState),
})

export const showCorrectModalSelector = selector({
  key: "showCorrectModalSelector",
  get: ({ get }) => get(showCorrectModalState),
})

export const showIncorrectModalSelector = selector({
  key: "showIncorrectModalSelector",
  get: ({ get }) => get(showIncorrectModalState),
})
