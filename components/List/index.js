import Link from "next/link"
import useSWR from "swr"

export default function List() {
  const { data } = useSWR("api/list")

  return (
    <ul>
      {data &&
        data.map((item, idx) => (
          <li key={idx}>
            <Link href={`/test/${item.slug}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  )
}
