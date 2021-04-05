import Link from 'next/link'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export default function List(props) {
  console.log(props)
  const { data } = useSWR('api/list')

  return (
    <ul>
      {data &&
        data.map((item, idx) => (
          <li key={idx} className='mb-10'>
            <Link href={`/test/${item.slug}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  )
}

export async function getServerSideProps() {
  const items = await fetcher('api/list')

  if (!items) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      items
    }
  }
}
