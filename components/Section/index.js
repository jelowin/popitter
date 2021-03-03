export default function Section({ children, className }) {
  // TODO Fix default undefined classname
  return (
    <section className={`grid h-full place-items-center place-content-center py-5 ${className ?? ""}`}>
      {children}
    </section>
  )
}
