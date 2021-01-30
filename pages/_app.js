// import App from 'next/app'
import React, { useEffect } from "react"
import Router from "next/router"
import { SWRConfig } from "swr"
import fetcher from "utils/fetcher"
import Spinner from "../components/Spinner/Spinner"

import "styles/global.css"

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return (
    <>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        {loading ? (
          <div className="grid place-items-center place-content-center absolute inset-0">
            <Spinner />
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </SWRConfig>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
