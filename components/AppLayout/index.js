import { breakpoints, colors, fonts } from "../../styles/theme"
import { addOpacityToColor } from "../../styles/utils"

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{`
        div {
          display: grid;
          height: 100vh;
          place-items: center;
        }

        main {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          height: 100%;
          width: 100%;
          overflow-y: auto;
        }

        @media (min-width: ${breakpoints.mobile}) {
          main {
            heigth: 90vh;
            width: ${breakpoints.mobile};
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          background-image: radial-gradient(
              ${backgroundColor} 1px,
              transparent 1px
            ),
            radial-gradient(${backgroundColor} 1px, transparent 1px);
          background-position: 0, 0, 25px, 25px;
          background-size: 50px 50px;
          padding: 0;
          margin: 0;
          font-family: ${fonts.base};
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        ol,
        ul {
          list-style: none;
        }
      `}</style>
    </>
  )
}
