export default function Section({ children }) {
  return (
    <section className='sm:col-span-full md:col-start-4 md:col-end-10 flex flex-col justify-center items-center w-full h-screen md:h-5/6 md:rounded-2xl md:shadow-sm'>
      {children}
    </section>
  )
}
