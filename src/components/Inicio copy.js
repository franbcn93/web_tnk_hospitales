import React, { Component, Fragment } from "react";
import Accordion from "./Accordion";
import "../style/Inicio.css";
import Header from "./Header";

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    return (
      <Fragment>
        <Header />
        <section id="main-content">
          <article>
            <header>
              <h1 className="marginTop">
                Comunicación Integral para Centros Hospitalarioss
              </h1>
            </header>

            <img
              src="https://res.cloudinary.com/dfb6ivozp/image/upload/v1617961117/Red_ytls3i.jpg"
              alt="imagenInicio"
            />
            <Accordion
              className="accordion"
              selectedIndex={this.state.selectedIndex}
              onChange={(index, expanded, selectedIndex) =>
                console.log(
                  `#${index} ${
                    expanded ? "expanded" : "collapsed"
                  } (selectedIndex: ${selectedIndex})`
                )
              }
            >
              <div data-header="Trayectoria" className="accordion-item">
                <p>
                  Han pasado más de trenta años desde que Tanaki inició su
                  actividad en el ámbito de la comunicación sanitaria. Más de
                  dos décadas en las que nuestra empresa ha ido configurándose
                  hasta llegar a crear el Grupo Tanaki Visión. Actualmente, la
                  aplicación de la más avanzada tecnología y la continua
                  investigación del sector hospitalario nos han permitido cubrir
                  ampliamente las diversas necesidades en lo referente a la
                  comunicación en centros sanitarios. Todo ello, unido al
                  esfuerzo e iniciativa de un gran equipo de profesionales, han
                  convertido al Grupo Tanaki Visión en la empresa líder de su
                  sector. Y no sólo las cifras de cuota de mercado lo
                  demuestran: hospitales y centros sanitarios han puesto en
                  nosotros su confianza, alcanzando un alto nivel de integración
                  en la comunicación entre sus dependencias, al mismo tiempo que
                  ofrecen un mejor y más cómodo servicio a sus pacientes.
                </p>
              </div>
              <div
                data-header="Canal de Información Corporativo"
                className="accordion-item"
              >
                <p>
                  De entre las innovaciones introducidas por el Grupo Tanaki
                  Visión en el ámbito de la comunicación sanitaria, cabe
                  destacar los canales de información internos gratuitos;
                  canales de visión libre en los que el Centro Sanitario puede
                  emitir sus propios canales de información. Los canales
                  culturales no sólo son un medio de distracción, sino que a la
                  vez informan al paciente sobre temas que son de su interés. Un
                  ejemplo son los documentales didácticos que pueden emitirse en
                  las áreas de Pediatría o Maternidad. En definitiva, los
                  canales culturales suponen una gran aportación a la
                  comunicación sanitaria, ya que contribuyen a mejorar el
                  servicio al paciente proporcionándole información de su
                  interés, además de una estancia más amena en el hospital.
                </p>
                <br></br>
                <img
                  className="imgSize rounded mx-auto d-block"
                  src="http://blog.general-valencia.san.gva.es/wp-content/uploads/2014/01/2013_12_18_TV_interactivas_Hospital_General_de_Valencia-e1390837311320.jpg"
                  alt="imagenInicio"
                />
              </div>
              <div data-header="Software de Gestión" className="accordion-item">
                <p>
                  El control de cada uno de los servicios contratados se
                  encuentra centralizado en un servidor y se obtiene a través de
                  todos los puntos de venta ubicados en los lugares indicados
                  por la gerencia del Centro Sanitario. En cada uno de estos
                  puntos de venta, el paciente podrá contratar el servicio
                  deseado a través de la pantalla táctil, como por ejemplo, el
                  servicio de televisión, con sólo seleccionarlo e introducir su
                  número de habitación. Una vez realizado el pago del servicio,
                  se le activará el TV de la habitación de forma totalmente
                  automática. Además, el Centro Sanitario dispone de un Control
                  absoluto de cada servicio mediante la información facilitada
                  de estadísticas diarias, mensuales, trimestrales y anuales de
                  cada habitación.
                </p>
                <br></br>
                <img
                  className="imgSize rounded mx-auto d-block"
                  src="https://st2.depositphotos.com/1037987/10279/i/950/depositphotos_102790948-stock-photo-senior-patient-watching-tv-in.jpg"
                  alt="imagenInicio"
                />
              </div>
              <div data-header="Centro de Control" className="accordion-item">
                <p>
                  Gestelnet es un sistema autónomo de gestión de todas las
                  comunicaciones de los pacientes del sector sanitario y mejora
                  la calidad de la estancia mediante el control de la
                  utilización de cada servicio en cada habitación. Todos los
                  puntos de venta están conectados on-line con el centro de
                  control, de forma que en cualquier momento se puede acceder
                  remotamente para atender cualquier eventualidad, como por
                  ejemplo, activar el servicio de televisión de un paciente que
                  no puede levantarse de la cama y/o conectar un televisor de
                  forma gratuita a petición del Centro Sanitario. Gestelnet
                  recibe los datos de toda la actividad de los terminales desde
                  cada punto de venta y permite activar o desactivar funciones
                  remotamente o mediante decisiones propias del sistema.
                </p>
              </div>
            </Accordion>
            {/* <div class="content">
              <h2>Trayectoria</h2>
              <p>
                Han pasado más de trenta años desde que Tanaki inició su
                actividad en el ámbito de la comunicación sanitaria. Más de dos
                décadas en las que nuestra empresa ha ido configurándose hasta
                llegar a crear el Grupo Tanaki Visión. Actualmente, la
                aplicación de la más avanzada tecnología y la continua
                investigación del sector hospitalario nos han permitido cubrir
                ampliamente las diversas necesidades en lo referente a la
                comunicación en centros sanitarios. Todo ello, unido al esfuerzo
                e iniciativa de un gran equipo de profesionales, han convertido
                al Grupo Tanaki Visión en la empresa líder de su sector. Y no
                sólo las cifras de cuota de mercado lo demuestran: hospitales y
                centros sanitarios han puesto en nosotros su confianza,
                alcanzando un alto nivel de integración en la comunicación entre
                sus dependencias, al mismo tiempo que ofrecen un mejor y más
                cómodo servicio a sus pacientes.
              </p>
              <br></br>
              <br></br>
              <h2>Canal de Información Corporativo</h2>
              <p>
                De entre las innovaciones introducidas por el Grupo Tanaki
                Visión en el ámbito de la comunicación sanitaria, cabe destacar
                los canales de información internos gratuitos; canales de visión
                libre en los que el Centro Sanitario puede emitir sus propios
                canales de información. Los canales culturales no sólo son un
                medio de distracción, sino que a la vez informan al paciente
                sobre temas que son de su interés. Un ejemplo son los
                documentales didácticos que pueden emitirse en las áreas de
                Pediatría o Maternidad. En definitiva, los canales culturales
                suponen una gran aportación a la comunicación sanitaria, ya que
                contribuyen a mejorar el servicio al paciente proporcionándole
                información de su interés, además de una estancia más amena en
                el hospital.
              </p>
              <br></br>
              <img
                className="imgSize rounded mx-auto d-block"
                src="http://blog.general-valencia.san.gva.es/wp-content/uploads/2014/01/2013_12_18_TV_interactivas_Hospital_General_de_Valencia-e1390837311320.jpg"
                alt="imagenInicio"
              />
              <br></br>
              <br></br>
              <h2>Software de Gestión</h2>
              <p>
                El control de cada uno de los servicios contratados se encuentra
                centralizado en un servidor
                https://res.cloudinary.com/dfb6ivozp/image/upload/v1617961275/Habitacion2_liiegq.jpgormación
                facilitada de estadísticas diarias, mensuales, trimestrales y
                anuales de cada habitación.
              </p>
              <br></br>
              <img
                className="imgSize rounded mx-auto d-block"
                src="https://st2.depositphotos.com/1037987/10279/i/950/depositphotos_102790948-stock-photo-senior-patient-watching-tv-in.jpg"
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
            </div> */}
          </article>
        </section>
      </Fragment>
    );
  }
}
