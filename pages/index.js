import { colors } from "styles/theme"
import AppLayout from "components/AppLayout"
import Head from "next/head"
import LoginForm from "components/Form/LoginForm"

export default function Home() {
  return (
    <>
      <Head>
        <title>Popitter 🐙</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <h1>Popitter</h1>
          <h2>Prepare your exam and approve!👍</h2>
          <div>
            <LoginForm />
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        div {
          margin: 8px 0;
        }
        section {
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 18px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
