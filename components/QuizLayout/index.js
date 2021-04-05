import Button from 'components/Button'
import Header from 'components/Header'
import Modal from 'components/Modal'
import Progress from 'components/Progress'
import Question from 'components/Question'
import Score from 'components/Score'
import Link from 'next/link'
import { useTest } from 'hooks/useTest'
import { useRouter } from 'next/router'
import { useRecoilState, useResetRecoilState } from 'recoil'
import {
  currentQuestionIndexState,
  scoreState,
  showScoreModalState,
  showCorrectModalState,
  showIncorrectModalState
} from 'atoms'

export default function QuizLayout() {
  const router = useRouter()
  const { query } = router

  const { data } = useTest(query.id)
  const [showIncorrectModal, setShowIncorrectModal] = useRecoilState(
    showIncorrectModalState
  )
  const [showCorrectModal, setShowCorrectModal] = useRecoilState(
    showCorrectModalState
  )
  const [showScoreModal, setShowScoreModal] = useRecoilState(
    showScoreModalState
  )
  const [currentQuestionIndex, setCurrentQuestionIndex] = useRecoilState(
    currentQuestionIndexState
  )
  const [score, setScore] = useRecoilState(scoreState)
  const resetCurrentQuestionState = useResetRecoilState(
    currentQuestionIndexState
  )
  const resetScoreState = useResetRecoilState(scoreState)
  const resetShowCorrectModalState = useResetRecoilState(showCorrectModalState)
  const resetShowIncorrectModalState = useResetRecoilState(
    showIncorrectModalState
  )

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
    resetCurrentQuestionState()
    resetScoreState()
    handleCloseScoreModal()
  }

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1
    if (nextQuestion < data.length) {
      setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1)
    } else {
      setShowScoreModal(true)
    }
    resetShowCorrectModalState()
    resetShowIncorrectModalState()
  }

  return (
    <>
      {data && (
        <div className='w-full'>
          <Header />
          <Progress />
          <Question
            setScore={setScore}
            setShowCorrectModal={setShowCorrectModal}
            setShowIncorrectModal={setShowIncorrectModal}
          />
        </div>
      )}

      {showScoreModal && (
        <Modal onClose={handleCloseScoreModal}>
          <div className='flex flex-col justify-center'>
            <Score score={score} />
            <div className='flex justify-around'>
              <Button className='bg-primary' onClick={handleRetryQuiz}>
                Reintentar
              </Button>
              <Button className='bg-secondary'>
                <Link href='/dashboard'>
                  <a>Volver al listado</a>
                </Link>
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {showCorrectModal && (
        <Modal onClose={handleCloseCorrectModal}>
          <div className='flex flex-col justify-center p-6 bg-white'>
            <h3 className='text-secondary'>Respuesta correcta</h3>
            <div className='flex justify-center items-center mt-5'>
              <Button onClick={handleNextQuestion}>Siguiente</Button>
            </div>
          </div>
        </Modal>
      )}

      {showIncorrectModal && (
        <Modal onClose={handleCloseIncorrectModal}>
          <div className='flex flex-col justify-center p-6 bg-white'>
            <div className='flex justify-center'></div>
            <h2 className='text-primary text-center'>Respuesta incorrecta</h2>
            <div className='flex justify-center items-center mt-5'>
              <Button onClick={handleNextQuestion}>Siguiente</Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
