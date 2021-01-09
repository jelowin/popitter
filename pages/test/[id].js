import AppLayout from "components/AppLayout"
import QuizLayout from "components/QuizLayout"
import Spinner from "components/Spinner/Spinner"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function TestDetail() {
  const [questions, setQuestions] = useState(null)
  const {
    query: { id },
  } = useRouter()

  const fetchQuestions = () => {
    fetch(`/api/test/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res)
      })
      .catch(console.error)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  return (
    <>
      <AppLayout>
        <section>
          {questions ? <QuizLayout questions={questions} /> : <Spinner />}
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }
      `}</style>
    </>
  )
}
