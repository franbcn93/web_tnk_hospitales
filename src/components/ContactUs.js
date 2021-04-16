import React, { Fragment } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    const YOUR_SERVICE_ID = "service_u5dqbty";
    const YOUR_TEMPLATE_ID = "template_0uw7uhm";
    const YOUR_USER_ID = "user_VHRwVv2wo1dOZEHUpaIKA";
    const valorNombre = e.target.user_name.value;
    const valorEmail = e.target.user_email.value;
    const valorMensaje = e.target.message.value;

    if (valorNombre === "" || valorEmail === "" || valorMensaje === "") {
      alert("Para poder enviar un mensaje, debe rellenar todos los campos.");
    } else {
      emailjs
        .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <Fragment>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-sm-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre..."
              name="user_name"
            />
          </div>
          <div className="col-1"></div>
          <div className="col-sm-5 sepText">
            <input
              type="email"
              className="form-control "
              name="user_email"
              placeholder="Email..."
            />
          </div>

          <div className="row marginText">
            <div className="col-1"></div>
            <div className="col-sm-8">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                placeholder="Mensaje..."
              ></textarea>
            </div>

            <div className="col-sm-2 btnAlig">
              <input
                type="submit"
                value="Enviar mensaje"
                className="btnMsn btn btn-secondary"
              />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
}
