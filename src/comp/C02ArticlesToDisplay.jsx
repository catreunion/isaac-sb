import Link from 'next/link'
import DateFormatter from '@/comp/DateFormatter'

const ArticlesToDisplay = ({ articles }) => {
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-9 lg:grid-cols-3"
    >
      {articles.map((item) => (
        <li key={item.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white px-2 shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-3">
            <div className="flex-1 truncate">
              <Link href={`/articles/${item.id}`}>
                <h3 className="truncate py-3 text-lg font-medium text-gray-900">{item.title}</h3>
                <DateFormatter dateString={item.date} />
                <div className="flex">
                  <div className="mt-3 mb-2 grow-0 rounded-full bg-green-100 px-3 text-base font-medium text-green-800">
                    {`${item.tag1}, ${item.tag2}`}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ArticlesToDisplay
