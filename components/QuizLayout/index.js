import Button from "components/Button"
import HappyIcon from "components/Icons/HappyIcon"
import SadIcon from "components/Icons/SadIcon"
import ModalPortal from "components/Modal"
import Progress from "components/Progress"
import Question from "components/Question"
import Score from "components/Score"
import Link from "next/link"
import { useState } from "react"

export default function QuizLayout({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScoreModal, setShowScoreModal] = useState(false)
  const [showCorrectModal, setShowCorrectModal] = useState(false)
  const [showIncorrectModal, setShowIncorrectModal] = useState(false)

  const handleShowScoreModal = () => {
    setShowScoreModal(true)
  }

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
    setShowScoreModal(false)
  }

  const handleNextQuestion = () => {
    handleCloseCorrectModal()
    handleCloseIncorrectModal()

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      handleShowScoreModal()
    }
  }

  return (
    <div className="w-full">
      <Progress currentQuestion={currentQuestion} questions={questions} />
      <>
        <Question
          questions={questions}
          currentQuestion={currentQuestion}
          setScore={setScore}
          setShowCorrectModal={setShowCorrectModal}
          setShowIncorrectModal={setShowIncorrectModal}
        />
      </>

      {showScoreModal && (
        <ModalPortal onClose={handleCloseScoreModal}>
          <div className="flex flex-col justify-center">
            <Score score={score} questions={questions} />
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
      {showCorrectModal && (
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
      {showIncorrectModal && (
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
