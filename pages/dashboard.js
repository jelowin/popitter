import List from "components/List"
import AppLayout from "components/AppLayout"
import Section from "components/Section"

export default function Home({ data }) {
  return (
    <>
      <AppLayout>
        <Section>
          <h2 className="mb-2">Listado de tests</h2>
          <div>
            <List items={data}></List>
          </div>
        </Section>
      </AppLayout>
    </>
  )
}

// Note that getStaticProps runs only on the server-side.
// It will NEVER be run on the client-side
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/list")
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}
