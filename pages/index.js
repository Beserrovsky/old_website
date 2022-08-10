import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from '../comps/Footer'
import DefaultNavbar from '../comps/DefaultNavbar'

import styles from '../styles/Home.module.css'

const indexContent = {
  "en-US": {
    head: {
      title: "Beserrovsky",
      description: "Brazilian developer and engineer, take a look at my stuff!"
    },
    content: {
      title: "⚠️ On Maintenance ⚠️",
    },
  },
  "pt-BR": {
    head: {
      title: "Beserrovsky",
      description: "Brasileiro, desenvolvedor e engenheiro, vem me conhecer!"
    },
    content: {
      title: "⚠️ Em Manutenção ⚠️",
    },
  },
}

export default function Index() {
  const { locale, locales, defaultLocale, asPath } = useRouter()
  const { head, content } = indexContent[locale]
  return (
    <div className={styles.container}>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen">
        <DefaultNavbar/>
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center -z-10">
          <h1 className="h-fit font-bold text-3xl">{content.title}</h1>
        </div>
      </main>

      <Footer/>

    </div>
  )
}
