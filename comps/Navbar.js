import Link from 'next/link'
import { useRouter } from 'next/router'

const navbarContent = {
  "en-US": {
    navbar: {
      current_lang: "Língua atual",
    },
  },
  "pt-BR": {
    navbar: {
      current_lang: "Idioma atual:",
    },
  },
}

const Navbar = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter()
  const { navbar } = navbarContent[locale]

  return ( 
    <nav>
      <div
        style={{
        padding: "4px",
        marginRight: "4px",
        }}
      >
        <span>{navbar.current_lang}</span>
        <span
        style={{
          borderRadius: "3px",
          backgroundColor: "blue",
          color: "white",
          padding: "2px",
        }}
        >
        {locale}
        </span>
      </div>
      <Link
        activeClassName={locale === "pt-BR"}
        href={asPath}
        locale="pt-BR"
      >
        pt-BR
      </Link>

      <Link
        activeClassName={locale === "en-US"}
        href={asPath}
        locale="en-US"
      >
        en-US
      </Link>
    </nav> 
    );
}
 
export default Navbar;
