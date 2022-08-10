import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, Dropdown } from "flowbite-react";

const navbarContent = {
  "en-US": {
    navbar: {
    },
  },
  "pt-BR": {
    navbar: {
    },
  },
}

const langInfo = {
  "en-US": {
    name: "English",
    flag: "🇬🇧",
  },
  "pt-BR": {
    name: "Português",
    flag: "🇧🇷",
  },
}

const DefaultNavbar = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter()
  const { navbar } = navbarContent[locale]

  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand>
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Felipe Beserra
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<h1>{langInfo[locale].flag}</h1>}
        >
          <Link href={asPath} locale={"en-US"} activeClassName={locale === "en-US"}>
            <Dropdown.Item>
              {`${langInfo["en-US"].flag} ${langInfo["en-US"].name}`}
            </Dropdown.Item>
          </Link>
          <Link href={asPath} locale={"pt-BR"} activeClassName={locale === "pt-BR"}>
            <Dropdown.Item>
              {`${langInfo["pt-BR"].flag} ${langInfo["pt-BR"].name}`}
            </Dropdown.Item>
          </Link>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
    );
}
 
export default DefaultNavbar;
