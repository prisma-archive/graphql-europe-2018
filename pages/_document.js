import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import lighten from 'polished/lib/color/lighten'

import { specialRed } from 'utils/colors'
import 'utils/offline'

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    font-family: "proxima-nova", sans-serif;
    font-size: 18px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: ${lighten(0.2, specialRed)};
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KSCC33H');`,
            }}
          />

          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/static/icons/graphql-eu-icon-180x180.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#DB3F74" />

          <meta
            name="keywords"
            content="GraphQL,conference,Europe,Berlin,2018"
          />
          <meta
            name="description"
            content="GraphQL Europe - Berlin, June 15th, 2018 - Join Europe’s biggest GraphQL-dedicated conference"
          />

          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://graphql-europe.org/" />
          <meta
            property="og:description"
            content="GraphQL Europe - Berlin, June 15th, 2018 - Join Europe’s biggest GraphQL-dedicated conference"
          />
          <meta
            property="og:image:url"
            content="https://graphql-europe.org/static/GrapQL-Europe-2018-banner.jpg"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@graphqleu" />
          <meta name="twitter:creator" content="@graphqleu" />
          <meta
            name="twitter:description"
            content="GraphQL Europe - Berlin, June 15th, 2018 - Join Europe’s biggest GraphQL-dedicated conference"
          />
          <meta
            name="twitter:image"
            content="https://graphql-europe.org/static/GrapQL-Europe-2018-banner.jpg"
          />

          <link rel="canonical" href="https://graphql-europe.org" />

          <script src="https://use.typekit.net/fkv8pfd.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: 'try{Typekit.load({ async: true });}catch(e){}',
            }}
          />

          {this.props.styleTags}
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KSCC33H"
              height="0"
              width="0"
              style={{display: 'none', visibility: 'hidden'}}
            />
          </noscript>

          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
