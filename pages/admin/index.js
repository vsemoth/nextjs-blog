import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Home({ allPostsData }) {
    return (
      <Layout>
        <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content Manager</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
      </section>
    </Layout>
    )}