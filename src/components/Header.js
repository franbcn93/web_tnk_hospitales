/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "../style/Header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img
        src={require("../assets/logo_copy.png")}
        className="Logo"
        alt="logo"
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          {/* <a href={("/", "/web_tnk")}>Inicio</a> */}
          <a href={("/", "/web_tnk", "https://franbcn93.github.io/web_tnk/")}>
            Inicio
          </a>
          <a
            href={("/gestion", "https://franbcn93.github.io/web_tnk_gestion/")}
          >
            Tecnología e innovación
          </a>
          <a
            href={
              ("/hospitales", "https://franbcn93.github.io/web_tnk_hospitales/")
            }
          >
            Hospitales
          </a>
          <a
            href={
              ("/contacto", "https://franbcn93.github.io/web_tnk_contacto/")
            }
          >
            Contacto
          </a>
          {/* <button>Logout</button> */}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <img
          src="https://res.cloudinary.com/dfb6ivozp/image/upload/v1618491735/menu_zfpcfn.png"
          alt="Girl in a jacket"
          width="500"
          height="600"
          className="menuOpen"
        ></img>
      </button>
    </header>
  );
}
