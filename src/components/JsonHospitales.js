import React, { Component } from "react";

export default class JsonHospitales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      comarca: "",
      nombre: "",
      habitaciones: "",
    };
  }

  render() {
    return <div className="card"></div>;
  }
}
