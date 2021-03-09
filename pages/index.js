import AppLayout from 'components/AppLayout'
import Head from 'next/head'
import LoginForm from 'components/Form/LoginForm'
import Section from 'components/Section'

export default function Home() {
  return (
    <div className='h-screen w-screen'>
      <Head>
        <title>Popitter 🐙</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>
        <Section>
          <div className='col-start-6 col-end-8'>
            <h1 className='mb-5'>Popitter</h1>
          </div>
          <h2 className='col-start-2 col-end-6 mb-9'>
            Prepare your exam and pass it!
          </h2>
          <div className='col-start-2 col-end-6'>
            <LoginForm />
          </div>
        </Section>
      </AppLayout>
    </div>
  )
}
