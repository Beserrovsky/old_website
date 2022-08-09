import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'

import styles from '../styles/Home.module.css'

const indexContent = {
  "en-US": {
    head: {
      title: "Felipe Beserra ;)",
      description: "Brazilian developer and engineer, take a look at my stuff!"
    },
    content: {
      title: "Welcome to my personal website!",
    },
  },
  "pt-BR": {
    head: {
      title: "Felipe Beserra ;)",
      description: "Brasileiro, desenvolvedor e engenheiro, vem me conhecer!"
    },
    content: {
      title: "Bem-Vindo ao meu site pessoal!",
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

      <Navbar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {content.title}
        </h1>
      </main>

      <Footer/>

    </div>
  )
}
