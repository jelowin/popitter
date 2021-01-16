import AppLayout from "components/AppLayout"
import QuizLayout from "components/QuizLayout"
import Section from "components/Section"

export default function TestDetail(data) {
  return (
    <AppLayout>
      <Section>
        <QuizLayout data={data} />
      </Section>
    </AppLayout>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.API}/api/test/${params.id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}
