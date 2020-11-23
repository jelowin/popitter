import { colors } from "../../styles/theme"

export default function Button({ children, onClick, type }) {
  return (
    <>
      <button type={type} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          align-items: center;
          background-color: ${colors.primary};
          border-radius: 99px;
          border: 0;
          color: #fff;
          cursor: pointer;
          display: flex;
          font-size: 16px;
          font-weight: 800;
          outline: 0;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }

        button > :global(svg) {
          margin-right: 8px;
        }

        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}
