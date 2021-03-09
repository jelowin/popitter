export default function AppLayout({ children }) {
  return (
    <div className='md:h-screen grid sm:grid-cols-1 md:grid-cols-12 gap-5 place-items-center'>
      {children}
    </div>
  )
}
