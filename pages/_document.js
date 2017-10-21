import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, css } from 'styled-components'

const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Proxima Nova';
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
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
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
