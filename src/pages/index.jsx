import Head from 'next/head'
import { getSortedArticles } from '@/engine'
import { homePageTitle, homePageDesc } from '@/items/wording'
import Layout from '@/comp/C00Layout'
import ArticlesToDisplay from '@/comp/C02ArticlesToDisplay'

export const getStaticProps = async () => {
  const articles = getSortedArticles()
  return {
    props: {
      articles,
    },
  }
}

const HomePage = ({ articles }) => {
  return (
    <>
      <Head>
        <title>{homePageTitle}</title>
        <meta name="description" content={homePageDesc} />
      </Head>

      <Layout home>
        <ArticlesToDisplay articles={articles} />
      </Layout>
    </>
  )
}

export default HomePage
