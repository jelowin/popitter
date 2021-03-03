export default function AppLayout({ children }) {
  return (
    <div className="grid place-items-center h-screen ">
      <main id="main" className="w-screen md:w-2/4 overflow-y-auto rounded-lg bg-white shadow-lg px-5">
        {children}
      </main>
    </div>
  )
}
