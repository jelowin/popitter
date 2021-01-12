import AppLayout from "components/AppLayout"
import QuizLayout from "components/QuizLayout"
import Section from "components/Section"
import { QuizProvider } from "context/QuizContext"
import { useRouter } from "next/router"

export default function TestDetail() {
  const {
    query: { id },
  } = useRouter()

  return (
    <AppLayout>
      <Section>
        <QuizProvider testId={id}>
          <QuizLayout />
        </QuizProvider>
      </Section>
    </AppLayout>
  )
}
