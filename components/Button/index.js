export default function Button({ children, className, onClick, ...restProps }) {
  return (
    <>
      <button
        className="flex items-center text-base text-white font-medium bg-primary border-0 rounded-full py-2 px-6 cursor-pointer transition-opacity focus:outline-none hover:opacity-70"
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
