import { useState } from "react"
import Button from "components/Button"
import Header from "components/Header"
import OkSvg from "components/Svg/OkSvg"
import SadIcon from "components/Icons/SadIcon"
import Modal from "components/Modal"
import Progress from "components/Progress"
import Question from "components/Question"
import Score from "components/Score"
import Link from "next/link"
import { useTest } from "hooks/useTest"
import { useRouter } from "next/router"

export default function QuizLayout() {
  const router = useRouter()
  const { query } = router

  const { data } = useTest(query.id)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showCorrectModal, setShowCorrectModal] = useState(false)
  const [showIncorrectModal, setShowIncorrectModal] = useState(false)
  const [showScoreModal, setShowScoreModal] = useState(false)
  const [score, setScore] = useState(0)

  const handleCloseScoreModal = () => {
    setShowScoreModal(false)
  }

  const handleCloseCorrectModal = () => {
    setShowCorrectModal(false)
  }

  const handleCloseIncorrectModal = () => {
    setShowIncorrectModal(false)
  }

  const handleRetryQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    handleCloseScoreModal()
  }

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1

    if (nextQuestion < data.length) {
      setCurrentQuestion((prevCurrentQuestion) => {
        return prevCurrentQuestion + 1
      })
    } else {
      setShowScoreModal(true)
    }
  }

  return (
    <>
      {data && (
        <div className="w-full">
          <Header />
          <Progress currentQuestion={currentQuestion} />
          <Question
            currentQuestion={currentQuestion}
            setScore={setScore}
            setShowCorrectModal={setShowCorrectModal}
            setShowIncorrectModal={setShowIncorrectModal}
          />
        </div>
      )}

      {showScoreModal && (
        <Modal onClose={handleCloseScoreModal}>
          <div className="flex flex-col justify-center">
            <Score score={score} />
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

      {showCorrectModal && (
        <Modal onClose={handleCloseCorrectModal}>
          <div className="flex flex-col justify-center p-6 bg-white">
            <OkSvg />
            <h3 className="text-secondary">Respuesta correcta</h3>
            <div className="flex justify-center items-center mt-5">
              <Button onClick={handleNextQuestion}>Siguiente</Button>
            </div>
          </div>
        </Modal>
      )}

      {showIncorrectModal && (
        <Modal onClose={handleCloseIncorrectModal}>
          <div className="flex flex-col justify-center bg-primary p-6">
            <div className="flex justify-center">
              <SadIcon />
            </div>
            <h2 className="text-white text-center">Respuesta incorrecta</h2>
            <div className="flex justify-center items-center mt-5">
              <Button onClick={handleNextQuestion}>Siguiente</Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
