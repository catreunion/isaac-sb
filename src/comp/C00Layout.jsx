import Link from 'next/link'
import HomePageHeader from '@/comp/C01HomePageHeader'
import ArticlePageHeader from '@/comp/C03ArticlePageHeader'
import Footer from '@/comp/C04Footer'

const Layout = ({ children, home }) => {
  return (
    <>
      <header>
        {home ? (
          <>
            <HomePageHeader />
          </>
        ) : (
          <Link href="/">
            <ArticlePageHeader />
          </Link>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <Link href="/">
          <p className="py-6 text-center text-gray-500">← Back to home</p>
        </Link>
      )}
      <Footer />
    </>
  )
}

export default Layout
