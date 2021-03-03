import AppLayout from "components/AppLayout"
import fetcher from "utils/fetcher"
import QuizLayout from "components/QuizLayout"
import Section from "components/Section"
import Spinner from "components/Spinner/Spinner"
import useSWR from "swr"
import { useRouter } from "next/router"

export default function TestDetail({ questions }) {
  const router = useRouter()
  const { query } = router
  const { data } = useSWR(`api/test/${query.id}`, { initialData: questions })

  return (
    <AppLayout>
      <Section>{data ? <QuizLayout /> : <Spinner />}</Section>
    </AppLayout>
  )
}

export async function getServerSideProps({ params }) {
  const questions = await fetcher(`api/test/${params.id}`)

  if (!questions) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      questions,
    },
  }
}
