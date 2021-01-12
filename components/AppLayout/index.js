import { colors, fonts } from "../../styles/theme"
import { addOpacityToColor } from "../../styles/utils"

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export default function AppLayout({ children }) {
  return (
    <>
      <div className="grid place-items-center h-screen ">
        <main
          id="main"
          className="w-screen md:w-2/4 overflow-y-auto rounded-lg bg-white shadow-lg px-5"
        >
          {children}
        </main>
      </div>
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
