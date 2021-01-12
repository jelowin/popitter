import Button from "components/Button"
import Header from "components/Header"
import HappyIcon from "components/Icons/HappyIcon"
import SadIcon from "components/Icons/SadIcon"
import Modal from "components/Modal"
import Progress from "components/Progress"
import Question from "components/Question"
import Score from "components/Score"
import Spinner from "components/Spinner/Spinner"
import { useQuizState } from "context/QuizContext"
import Link from "next/link"

export default function QuizLayout() {
  const { contextState, setContextState } = useQuizState()

  const handleCloseScoreModal = () => {
    setContextState((prevState) => {
      return {
        ...prevState,
        showScoreModal: false,
      }
    })
  }

  const handleCloseCorrectModal = () => {
    setContextState((prevState) => {
      return {
        ...prevState,
        showCorrectModal: false,
      }
    })
  }

  const handleCloseIncorrectModal = () => {
    setContextState((prevState) => {
      return {
        ...prevState,
        showIncorrectModal: false,
      }
    })
  }

  const handleRetryQuiz = () => {
    setContextState((prevState) => {
      return {
        ...prevState,
        currentQuestion: 0,
        score: 0,
      }
    })
    handleCloseScoreModal()
  }

  const handleNextQuestion = () => {
    const nextQuestion = contextState.currentQuestion + 1

    setContextState((prevState) => {
      return {
        ...prevState,
        showCorrectModal: false,
        showIncorrectModal: false,
      }
    })

    if (nextQuestion < contextState.questions.length) {
      setContextState((prevState) => {
        return {
          ...prevState,
          currentQuestion: nextQuestion,
        }
      })
    } else {
      setContextState((prevState) => {
        return {
          ...prevState,
          showScoreModal: true,
        }
      })
    }
  }

  return (
    <>
      {contextState.questions ? (
        <div className="w-full">
          <Header />
          <Progress />
          <Question />
          <div className="flex justify-center mt-5">
            <Button className="bg-primary" onClick={handleNextQuestion}>
              Siguiente
            </Button>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      {contextState.showScoreModal && (
        <Modal onClose={handleCloseScoreModal}>
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
        </Modal>
      )}

      {contextState.showCorrectModal && (
        <Modal onClose={handleCloseCorrectModal}>
          <div className="flex flex-col justify-center bg-secondary p-6">
            <div className="flex justify-center">
              <HappyIcon />
            </div>
            <h3 className="text-white text-center">Respuesta correcta</h3>
          </div>
        </Modal>
      )}

      {contextState.showIncorrectModal && (
        <Modal onClose={handleCloseIncorrectModal}>
          <div className="flex flex-col justify-center bg-primary p-6">
            <div className="flex justify-center">
              <SadIcon />
            </div>
            <h2 className="text-white text-center">Respuesta incorrecta</h2>
          </div>
        </Modal>
      )}
    </>
  )
}
