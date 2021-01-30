export default function Button({ children, className, onClick, ...restProps }) {
  return (
    <>
      <button
        className="flex items-center text-base text-primary border-0 cursor-pointer transition-opacity focus:outline-none hover:opacity-70"
        onClick={onClick}
        {...restProps}
      >
        {children}
      </button>
      <style jsx>{`
        button > :global(svg) {
          margin-right: 8px;
        }
      `}</style>
    </>
  )
}
