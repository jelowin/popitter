import styles from "./Section.module.css"

export default function Section({ children, className }) {
  // TODO Fix default undefined classname
  return (
    <section className={`${className} ${styles.section}`}>{children}</section>
  )
}
