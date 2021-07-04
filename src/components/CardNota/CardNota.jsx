import React, { Component } from "react";
import "./estilo.css";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.salarioBruto}</h3>
          <h3 className="card-nota_titulo">{this.props.desconto}</h3>
          <h3 className="card-nota_titulo">{this.props.dependente}</h3>
        </header>
      </section>
    );
  }
}

export default CardNota;
