import Link from 'next/link'
import { myName, myTitle } from '@/wording'

const Layout = ({ children, home }) => {
  return (
    <>
      <header>
        {home ? (
          <>
            <img src="/img/profile.jpg" />
            <h1>{myName}</h1>
            <h2>{myTitle}</h2>
          </>
        ) : (
          <>
            <Link href="/">
              <img src="/img/profile.jpg" />
            </Link>
            <h2>{`${myName} (Author)`}</h2>
          </>
        )}
      </header>

      <main>{children}</main>

      <footer>{!home && <Link href="/">← Back to home</Link>}</footer>
    </>
  )
}

export default Layout
