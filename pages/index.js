import AppLayout from "components/AppLayout"
import Head from "next/head"
import LoginForm from "components/Form/LoginForm"
import Section from "components/Section"

export default function Home() {
  return (
    <>
      <Head>
        <title>Popitter 🐙</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <Section>
          <h1>Popitter</h1>
          <h2>Prepare your exam and approve!</h2>
          <div className="my-4">
            <LoginForm />
          </div>
        </Section>
      </AppLayout>
    </>
  )
}
