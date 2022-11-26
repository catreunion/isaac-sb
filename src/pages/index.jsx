import Head from 'next/head'
import Link from 'next/link'
import { getSortedPosts } from '@/engine'
import Layout from '@/comp/layout'
import DateFormatter from '@/comp/DateFormatter'
import { homeTitle, homeDesc } from '@/wording'

export const getStaticProps = async () => {
  const posts = getSortedPosts()

  return {
    props: {
      posts,
    },
  }
}

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{homeTitle}</title>
        <meta name="description" content={homeDesc} />
      </Head>

      <Layout home>
        <h2>Articles</h2>
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <DateFormatter dateString={date} />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export default Home
