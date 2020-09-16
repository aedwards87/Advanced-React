import App, { Container } from 'next/app'
import Page from '../components/Pages'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'

class MyApp extends App {
  // getInitialProps is a special lifecycle method from Next, which will run before the first render
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user
    pageProps.query = ctx.query
    // the return will expose the prop so it's available below on first render
    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <Container>
        <ApolloProvider client={apollo} >
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(MyApp)
