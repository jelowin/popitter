import { useTest } from 'hooks/useTest'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { currentQuestionSelector } from 'selectors'

export default function Progress() {
  const currentQuestion = useRecoilValue(currentQuestionSelector)
  const router = useRouter()
  const { query } = router

  const { data } = useTest(query.id)

  return (
    <>
      {data && (
        <div className='flex flex-col justify-center items-center mb-10'>
          <h2 className='mb-5'>Test</h2>
          <h5>
            Pregunta {currentQuestion} de {data.length}
          </h5>
        </div>
      )}
    </>
  )
}
