import Head from 'next/head'


const Meta = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width"
      />
      <meta charSet="utf-8" />
      <link
        rel="shortcut icon"
        href="/static/favicon.png"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/static/nprogress.css"
      />
      <title>Sick Fits!</title>
    </Head>
  )
}

export default Meta
