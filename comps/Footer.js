import { useRouter } from 'next/router'

import styles from '../styles/Footer.module.css'

const footerContent = {
  "en-US": {
    footer: {

    },
  },
  "pt-BR": {
    footer: {

    },
  },
}

const Footer = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter()
  const { footer } = footerContent[locale]
  return ( 
    <footer className={styles.footer}>
    </footer> 
  );
}
 
export default Footer;