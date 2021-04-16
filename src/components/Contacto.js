import React, { Component, Fragment } from "react";
import "../style/Contact.css";
import ContactUs from "./ContactUs";
import Header from "./Header";

export default class Contacto extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section id="main-content">
          <article>
            <header>
              <h1 className="marginTop">Contacta con nosotros</h1>
            </header>
            <img
              src="http://afinkados.es/attachments/Image/contacto-1-1024x336.jpg?template=generic"
              alt="imagenInicio"
            />
            <div class="row icons">
              <div class="col-sm-4">
                <i className="fas fa-phone-volume fa-2x"></i> (+34) 933 638 787
              </div>
              <div class="col-sm-8 icons_2">
                <i className="fas fa-home fa-2x" align="center"></i> C/ Puig
                dels Tudons, 6, 08210 Barberà del Vallès - Barcelona
              </div>
            </div>
            <div class="row icons">
              <div class="col-sm-4">
                <i className="fas fa-at fa-2x"></i>{" "}
                <a href="mailto:tanaki@tanaki.es">tanaki@tanaki.es</a>
              </div>
              <div class="col-sm-8 icons_2">
                <i className="fas fa-tools fa-2x"></i>{" "}
                <a href="mailto:sat@tanaki.es">
                  sat@tanaki.es (Servicio Asistencia Técnica)
                </a>
              </div>
            </div>

            <br />
            <div className="container">
              <h5 className=" contactUs">
                <strong>
                  Para enviarnos tu sugerencia, puede hacerlo clickando sobre el
                  servicio técnico que desee contactar, o rellenando los campos
                  siguientes.{" "}
                </strong>
              </h5>
            </div>
            <ContactUs />
            <div className="container satisfactionText">
              <p>
                La satisfacción del cliente es lo más importante para el Grupo
                TANAKI Visión. Todos nuestros departamentos cuentan con
                profesionales especializados y con las habilidades necesarias
                para conseguir la excelencia en todos nuestros servicios.{" "}
              </p>
            </div>
            <div className="container map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.260223499172!2d2.1476466147973508!3d41.52030357925215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4be18d2cb954d%3A0x39181e2ab463ebbd!2sAv.%20Puig%20dels%20Tudons%2C%206%2C%2008210%20Barcelona!5e0!3m2!1ses!2ses!4v1618208432071!5m2!1ses!2ses"
                width="600"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="This is a unique title"
              ></iframe>
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}
