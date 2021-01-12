import Button from "components/Button"
import HappyIcon from "components/Icons/HappyIcon"
import SadIcon from "components/Icons/SadIcon"
import ModalPortal from "components/Modal"
import Progress from "components/Progress"
import Question from "components/Question"
import Score from "components/Score"
import Spinner from "components/Spinner/Spinner"
import { useQuizState } from "context/QuizContext"
import Link from "next/link"

export default function QuizLayout() {
  const [contextState, setContextState] = useQuizState()

  const handleCloseScoreModal = () => {
    setContextState({ ...contextState, showScoreModal: false })
  }

  const handleCloseCorrectModal = () => {
    setContextState({ ...contextState, showCorrectModal: false })
  }

  const handleCloseIncorrectModal = () => {
    setContextState({ ...contextState, showIncorrectModal: false })
  }

  const handleRetryQuiz = () => {
    setContextState({ ...contextState, currentQuestion: 0, score: 0 })
    handleCloseScoreModal()
  }

  const handleNextQuestion = () => {
    const nextQuestion = contextState.currentQuestion + 1

    setContextState({
      ...contextState,
      showCorrectModal: false,
      showIncorrectModal: false,
    })

    if (nextQuestion < contextState.questions.length) {
      setContextState({
        ...contextState,
        currentQuestion: nextQuestion,
      })
    } else {
      setContextState({
        ...contextState,
        showScoreModal: true,
      })
    }
  }

  return (
    <div className="w-full">
      {contextState.questions ? (
        <>
          <Progress />
          <Question />
        </>
      ) : (
        <Spinner />
      )}

      {contextState.showScoreModal && (
        <ModalPortal onClose={handleCloseScoreModal}>
          <div className="flex flex-col justify-center">
            <Score />
            <div className="flex justify-around">
              <Button className="bg-primary" onClick={handleRetryQuiz}>
                Reintentar
              </Button>
              <Button className="bg-secondary">
                <Link href="/dashboard">
                  <a>Volver al listado</a>
                </Link>
              </Button>
            </div>
          </div>
        </ModalPortal>
      )}

      {contextState.showCorrectModal && (
        <ModalPortal onClose={handleCloseCorrectModal}>
          <div className="flex flex-col justify-center bg-secondary">
            <div className="flex justify-center">
              <HappyIcon />
            </div>
            <h2 className="text-white text-center">Respuesta correcta</h2>
            <div className="flex justify-center mt-5">
              <Button className="bg-primary" onClick={handleNextQuestion}>
                Siguiente
              </Button>
            </div>
          </div>
        </ModalPortal>
      )}

      {contextState.showIncorrectModal && (
        <ModalPortal onClose={handleCloseIncorrectModal}>
          <div className="flex flex-col justify-center bg-primary">
            <div className="flex justify-center">
              <SadIcon />
            </div>
            <h2 className="text-white text-center">Respuesta incorrecta</h2>
            <div className="flex justify-center mt-5">
              <Button className="bg-primary" onClick={handleNextQuestion}>
                Siguiente
              </Button>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  )
}
