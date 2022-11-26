import { Html, Head, Main, NextScript } from 'next/document'
import { siteTitle, siteDesc } from '@/wording'

const Document = (props) => {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']" lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="description" content={siteDesc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
      </Head>

      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
