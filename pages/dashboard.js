import List from "components/List"
import AppLayout from "components/AppLayout"
import Section from "components/Section"
import fetcher from "utils/fetcher"
import useSWR from "swr"
import Spinner from "components/Spinner/Spinner"

export default function Home({ list }) {
  const { data } = useSWR("api/list", {
    initialData: list,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.status === 404) return
      // Never retry for a specific key.
      if (key === "api/list") return
      // Only retry up to 10 times.
      if (retryCount >= 10) return
      // Retry after 5 seconds.
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000)
    },
  })

  return (
    <>
      <AppLayout>
        <Section>
          {data ? (
            <>
              <h2>Listado de tests</h2>
              <div>
                <List></List>
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </Section>
      </AppLayout>
    </>
  )
}

// Note that getStaticProps runs only on the server-side.
// It will NEVER be run on the client-side
export async function getStaticProps() {
  const data = await fetcher(`api/list`)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      list: data,
    }, // will be passed to the page component as props
  }
}
