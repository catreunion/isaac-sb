import Head from 'next/head'
import Layout from '@/comp/C00Layout'
import DateFormatter from '@/comp/DateFormatter'
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
        <meta name="description" content={`${article.title} | a simple blog`} />
      </Head>

      <Layout>
        <div className="mx-auto max-w-3xl px-3 sm:px-6">
          <div className="mb-3 text-right sm:mb-6 lg:mb-9">
            <DateFormatter dateString={article.date} />
          </div>
          <div className="prose prose-slate mx-3" dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
        </div>
      </Layout>
    </>
  )
}

export default ArticlePage
