import Head from 'next/head'
import Layout from '@/comp/layout'
import Date from '@/comp/DateFormatter'
import { getIDs, getOnePost } from '@/engine'

export const getStaticPaths = async () => {
  const paths = await getIDs()
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const data = await getOnePost(params.id)
  return {
    props: {
      post: data,
    },
  }
}

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Layout>
        <h1>{post.title}</h1>
        <Date dateString={post.date} />
        <div dangerouslySetInnerHTML={{ __html: post.contentHTML }} />
      </Layout>
    </>
  )
}

export default Post
