import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/comp/C00Layout'
// import DateFormatter from '@/comp/DateFormatter'
import { getIDs, getOneArticle } from '@/engine'

export const getStaticPaths = async () => {
  const paths = await getIDs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const article = await getOneArticle(params.id)
  return {
    props: {
      article,
    },
  }
}

const ArticlePage = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={`${article.title} | Lyrics by Wyman Wong`} />
      </Head>

      <Layout>
        <div className="mx-auto max-w-3xl px-3 sm:px-6">
          <Link href="/">
            <h1 className="pb-16 pt-6 text-center text-lg font-bold tracking-normal sm:text-3xl lg:pb-28 lg:text-6xl">
              {article.title}
            </h1>
          </Link>

          <div className="prose prose-slate mx-3" dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
        </div>
      </Layout>
    </>
  )
}

export default ArticlePage
