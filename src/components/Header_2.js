import "../style/Header.css";
import React, { Component, Fragment } from "react";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header id="main-header">
          <a id="logo-header" href="/">
            <img
              className="imgLogo"
              src="https://res.cloudinary.com/dfb6ivozp/image/upload/v1617948985/logo_fondo_bosenc.png"
              alt=""
            />
          </a>
          <nav>
            <ul>
              <li>
                <a href={("/", "/react_web")}>Inicio</a>
                {/* <a
                  href={
                    ("/",
                    "/react_web",
                    "https://franbcn93.github.io/react_web/")
                  }
                >
                  Inicio
                </a> */}
              </li>
              <li>
                <a href="/gestion">Tecnología e innovación</a>
                {/* <a
                  href={
                    ("/gestion",
                    "https://franbcn93.github.io/react_web_gestion/")
                  }
                >
                  Tecnología e innovación
                </a> */}
              </li>
              <li>
                {/* <a
                  href={
                    ("/hospitales",
                    "https://franbcn93.github.io/react_web_hospitales/")
                  }
                >
                  Hospitales
                </a> */}
                <a href="/hospitales">Hospitales</a>
              </li>
              <li>
                {/* <a href="https://franbcn93.github.io/react_web_contacto/">
                  Contacto
                </a> */}
                <a href={"/contacto"}>Contacto</a>
              </li>
              {/* <li>
                <a href="https://franbcn93.github.io/react_web/">Inicio</a>
              </li>
              <li>
                <a href="https://franbcn93.github.io/react_web_gestion/">
                  Tecnología e innovación
                </a>
              </li>
              <li>
                <a href="https://franbcn93.github.io/react_web_hospitales/">
                  Hospitales
                </a>
              </li>
              <li>
                <a href="https://franbcn93.github.io/react_web_contacto/">
                  Contacto
                </a>
              </li> */}
            </ul>
          </nav>
        </header>
      </Fragment>
    );
  }
}
