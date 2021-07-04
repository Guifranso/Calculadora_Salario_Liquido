import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCalculo from "./components/FormularioCalculo";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[]
    }
  }

  criarNota(salarioBruto, desconto, dependente){
    const novaNota = {salarioBruto, desconto, dependente};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }
  calcularSalario(salarioBruto,desconto,dependente){
    fetch('/calcular', {
      method:'POST',
      body: JSON.stringify({
        salarioBruto:salarioBruto,
        desconto:desconto,
        dependente:dependente,
      }),
      headers:{
        'Content-type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(message =>{
        console.log(message)
        console.log(salarioBruto,desconto,dependente)

        const novoArrayNotas = {notas:[message]}
        this.setState(novoArrayNotas)
        console.log(novoArrayNotas);
      })
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCalculo criarNota={this.calcularSalario.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
