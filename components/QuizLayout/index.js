import { useState } from "react"
import Button from "components/Button"
import Header from "components/Header"
import HappyIcon from "components/Icons/HappyIcon"
import SadIcon from "components/Icons/SadIcon"
import Modal from "components/Modal"
import Progress from "components/Progress"
import Question from "components/Question"
import Score from "components/Score"
import Link from "next/link"

export default function QuizLayout({ data }) {
  const [questions] = useState({ data })
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

    if (nextQuestion < data.data.length) {
      setCurrentQuestion((prevCurrentQuestion) => {
        return prevCurrentQuestion + 1
      })
    } else {
      setShowScoreModal(true)
    }
  }

  return (
    <>
      {questions && (
        <div className="w-full">
          <Header />
          <Progress data={questions} currentQuestion={currentQuestion} />
          <Question
            data={questions}
            currentQuestion={currentQuestion}
            setScore={setScore}
            setShowCorrectModal={setShowCorrectModal}
            setShowIncorrectModal={setShowIncorrectModal}
          />
          <div className="flex justify-center mt-5">
            <Button className="bg-primary" onClick={handleNextQuestion}>
              Siguiente
            </Button>
          </div>
        </div>
      )}

      {showScoreModal && (
        <Modal onClose={handleCloseScoreModal}>
          <div className="flex flex-col justify-center">
            <Score score={score} data={data} />
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
          <div className="flex flex-col justify-center bg-secondary p-6">
            <div className="flex justify-center">
              <HappyIcon />
            </div>
            <h3 className="text-white text-center">Respuesta correcta</h3>
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
          </div>
        </Modal>
      )}
    </>
  )
}
