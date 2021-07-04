import React, { Component } from "react";
import "./estilo.css";
class FormularioCalculo extends Component {

  constructor(props){
    super(props);
    this.salarioBruto ="";
    this.desconto ="";
    this.dependente = "";
  }

  _handleSalario(evento){
    evento.stopPropagation();
    this.salarioBruto = evento.target.value;
  }
  _handleDesconto(evento){
    evento.stopPropagation();
    this.desconto = evento.target.value;
  }
  _handleDependente(evento){
    evento.stopPropagation();
    this.dependente = evento.target.value;
  }
  _criarSalario(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.salarioBruto, this.desconto, this.dependente);
  }
  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarSalario.bind(this)}
      >
        <input type="text" placeholder="Salario" className="form-cadastro_input"
          onChange={this._handleSalario.bind(this)}
        />
        <input type="text" placeholder="Desconto" className="form-cadastro_input"
          onChange={this._handleDesconto.bind(this)}
        />
        <input type="text" placeholder="Dependente" className="form-cadastro_input"
          onChange={this._handleDependente.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Calcular
        </button>
      </form>
    );
  }
}
export default FormularioCalculo;
