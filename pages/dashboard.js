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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/list")
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
