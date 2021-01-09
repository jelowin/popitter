import List from "components/List"
import { useEffect, useState } from "react"
import AppLayout from "components/AppLayout"

export default function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("api/test")
      .then((response) => response.json())
      .then((data) => {
        setItems(data)
        setIsLoading(false)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <AppLayout>
        <section>
          <h1>Listado de tests</h1>
          <div>
            <List items={items} isLoading={isLoading}></List>
          </div>
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }

        ul {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  )
}
