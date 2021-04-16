import React, { Component, Fragment } from "react";
import Header from "./Header";

export default class Gestion extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section id="main-content">
          <article>
            <header>
              <h1 className="marginTop">
                Amplia experiencia en el sector sanitario
              </h1>
            </header>

            <img
              src="https://res.cloudinary.com/dfb6ivozp/image/upload/v1617963644/SoftwareCd_e3yocm.jpg"
              alt="imagenGestion"
            />

            <div className="content">
              {/* <h2>Trayectoria</h2> */}
              <p>
                Todas las empresas del Grupo Tanaki Visión están dedicadas al
                desarrollo de la gestión, explotación y comercialización de los
                servicios de televisión, telefonía e internet mediante la
                integración de las últimas tecnologías informáticas, de imagen y
                de comunicaciones. El Grupo Tanaki Visión cuenta con una amplia
                experiencia en el sector sanitario de más de 28 años y con los
                conocimientos necesarios y de desarrollo de las nuevas
                tecnologías, y siempre basándose en soluciones tecnológicas
                innovadoras de fácil utilización por parte de los usuarios, que
                ayudan a los centros sanitarios a mejorar la satisfacción de sus
                pacientes y a incrementar la calidad de sus servicios.
              </p>
              <br></br>
              <br></br>
              <h2>Tecnología e Innovación</h2>
              <p>
                El mundo actual cambia vertiginosamente debido a la aplicación
                de las nuevas tecnologías en todos los segmentos de mercado y,
                evidentemente, nuestro sector no es ajeno a estos cambios. Es
                por ello que el departamento de I+D de TANAKI aúna esfuerzos
                para mejorar constantemente sus equipos, trabajando siempre con
                las últimas tecnologías y los mejores materiales. Todos los
                equipos se diseñan de forma minuciosa y analizando siempre el
                lugar donde serán instalados. De ahí que se realizen estudios
                sobre la ergonomía de los distintos equipos, sus formas y color
                y, ante todo, su facilidad de uso, de manera que resulte
                sencillo su manejo, sobre todo para ese grupo de usuarios cada
                vez mayor, la 3ª edad.
              </p>
              <br></br>
              <img
                className="imgSize rounded mx-auto d-block"
                src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/01/13/15473348073523.jpg"
                alt="imagenInicio"
              />
              <br></br>
              <br></br>
              <h2>Tecnología y Diseño</h2>
              <p>
                El Grupo Tanaki Visión apuesta por la imagen y modernización del
                Centro Sanitario ofreciendo las últimas novedades tecnológicas,
                como la instalación de televisores preparados para la alta
                definición HD ready para disfrutar de la mejor calidad de imagen
                y sonido y que incluyen las últimas tecnologías que permiten
                disfrutar de imágenes de gran nitidez y de enorme realismo, de
                unos colores más intensos y reales y de un contraste y claridad
                superior. El equipo de I+D de Tanaki crea la totalidad de sus
                propios sistemas de comunicación hospitalaria y ofrece una
                amplia gama de equipos que cubren todas las preferencias y
                prestaciones que los Centros Sanitarios necesitan.
              </p>
              <br></br>
              <img
                className="imgSize rounded mx-auto d-block"
                src="https://i1.wp.com/www.seisamed.com/wp-content/uploads/Hospitales-Integran-Entretenimiento-Educativo-En-TV-Tabletas-y-celulares.jpg?resize=600%2C315"
                alt="imagenInicio"
              />
              <br></br>
              <br></br>

              <h2>Centro de Control</h2>
              <p>
                Gestelnet es un sistema autónomo de gestión de todas las
                comunicaciones de los pacientes del sector sanitario y mejora la
                calidad de la estancia mediante el control de la utilización de
                cada servicio en cada habitación. Todos los puntos de venta
                están conectados on-line con el centro de control, de forma que
                en cualquier momento se puede acceder remotamente para atender
                cualquier eventualidad, como por ejemplo, activar el servicio de
                televisión de un paciente que no puede levantarse de la cama y/o
                conectar un televisor de forma gratuita a petición del Centro
                Sanitario. Gestelnet recibe los datos de toda la actividad de
                los terminales desde cada punto de venta y permite activar o
                desactivar funciones remotamente o mediante decisiones propias
                del sistema.
              </p>
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}
