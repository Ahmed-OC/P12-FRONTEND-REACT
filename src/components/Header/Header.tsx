import { useMemo } from "react";
import style from "./Header.module.scss";
import logo from "../../assets/images/logo-sportsee.svg";

/**
 * 
 * @description Component Header is the header of the website
 */

function Header() {
  const nav = useMemo(() => [
    { name: "Accueil", link: "/" },
    { name: "Profil", link: "/profil" },
    { name: "Réglage", link: "/settings" },
    { name: "Communauté", link: "/community" },
  ], []);
  return (
    <header className={style.Header}>
      <img src={logo} alt="logo sportsee" />
      <nav>
        {nav.map((item, index) => (
          <a key={index} href={item.link}>
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;