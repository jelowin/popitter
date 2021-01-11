export default function Button({ children, className, onClick, type }) {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          align-items: center;
          border-radius: 99px;
          border: 0;
          color: #fff;
          cursor: pointer;
          display: flex;
          font-size: 16px;
          font-weight: 500;
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
