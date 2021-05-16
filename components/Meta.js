import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link rel="stylesheet" href="https://use.typekit.net/zoe8bro.css"></link>
      <title>{title}</title>

    </Head>
  )
}

Meta.defaultProps = {
  title: 'STARSIO',
  keywords: 'stars, nasa, astronomy, planets',
  description: 'Explore the vast universe'
}

export default Meta
