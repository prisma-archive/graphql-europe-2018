import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, css, injectGlobal } from 'styled-components'
import lighten from 'polished/lib/color/lighten'
import darken from 'polished/lib/color/darken'

import { specialRed } from 'utils/colors'

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'proxima-nova';
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

const typeKitScript = `
  try{Typekit.load({ async: true });}catch(e){}
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>GraphQL Europe 2018</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://use.typekit.net/fkv8pfd.js" />
          <script dangerouslySetInnerHtml={{ __html: typeKitScript }} />
        </body>
      </html>
    )
  }
}
