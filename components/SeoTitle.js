import NextHead from 'next/head'
import { Component } from 'react'

export default class SeoTitle extends Component {
  render() {
    const {
      title: defaultTitle = 'GraphQL Europe 2018',
      prependTitle,
    } = this.props

    const title = prependTitle ?
      `${prependTitle} - ${defaultTitle}` :
      defaultTitle

    return (
      <NextHead>
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
      </NextHead>
    )
  }
}
