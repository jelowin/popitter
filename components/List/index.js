import Link from "next/link"

export default function List({ items }) {
  return (
    <ul>
      {items &&
        items.map((item, idx) => (
          <Link key={idx} href={`/test/${item.slug}`}>
            <a>{item.name}</a>
          </Link>
        ))}
    </ul>
  )
}
