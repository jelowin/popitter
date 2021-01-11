import Link from "next/link"

export default function List({ items }) {
  return (
    <ul>
      {items &&
        items.map((item, idx) => (
          <li key={idx}>
            <Link href={`/test/${item.slug}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  )
}
