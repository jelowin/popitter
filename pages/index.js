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
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <AppLayout>
        <Section>
          <h1 className="font-logo">Popitter</h1>
          <h2>Prepare your exam and approve!👍</h2>
          <div className="my-4">
            <LoginForm />
          </div>
        </Section>
      </AppLayout>
    </>
  )
}
