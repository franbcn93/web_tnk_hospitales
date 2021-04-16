import React, { Component, Fragment } from "react";
import "../style/Card.css";
import { hospitales } from "../hospitales.json";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      hospitales,
    };
  }

  render() {
    const listado = this.state.hospitales.map((todo, i) => {
      return (
        <div className="col-md-4 " key={i}>
          <div className="card mt-4 cardBorder">
            <div className="card-title text-center">
              <h3 className="MarginTitle">{todo.nombre}</h3>
              <span className="badge bg-secondary">{todo.comarca}</span>
              <p className="margenP">{todo.habitaciones} habitaciones</p>
              <img className="imgCard" src={todo.imagen} width="30%" alt="" />
            </div>
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        {/* <h1>Hola</h1>
        <div class="container divCard">
          <div class="row">
            <div class="col-4">
              <div className="lista_hospitales ">{listado}</div>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="col-md-12 listDiv">
            <div className="row listHosp">{listado}</div>
          </div>
        </div>

        <div className="container">
          <div className="col-md-12">
            <div className="row">{listado}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
