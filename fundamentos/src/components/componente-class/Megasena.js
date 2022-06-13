import React, { Component } from "react";
import { Button, Text, View, TextInput } from "react-native";

import NumeroMega from "./NumeroMega";

class Megasena extends Component {

  state = {
    quantNumeros: this.props.quantNumeros,
    numerosGerados: [],
  }

  alterarQuantNumeros = (input) => { // Para evitar um erro do this não apontar para a instância correta, vamos utilizar arrow function
    this.setState({ quantNumeros: +input })
  }

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  }

  gerarNumeros = () => {
    const numerosGerados = Array(this.state.quantNumeros)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b)

    this.setState({ numerosGerados: numerosGerados })
  }

  // Outra forma de fazer essa função, mais simples.
  // gerarNumeros = () => {
  //   const  { quantNumeros } = this.state 
  //   const numerosGerados = []

  //   for(let i = 0; i < quantNumeros; i++) {
  //     numerosGerados.push(this.gerarNumeroNaoContido(numerosGerados))
  //   }

  //   this.setState({ numerosGerados })
  // }

  exibirNumeros = () => {
    const numeros = this.state.numerosGerados;
    return numeros.map(numero => {
      return <NumeroMega key={numero} numero={numero}/>
    })
  }

  render() {
    return (
      <React.Fragment>
        <Text>Componente baseado em Classe!</Text>
        <Text>Quantidade de Números para Sortear: {this.state.quantNumeros}</Text>
        <TextInput 
          keyboardType={"numeric"}
          style={{borderBottomWidth: 1}}
          placeholder="Quantidade de Números"
          value={ `${this.state.quantNumeros}` }
          onChangeText={ this.alterarQuantNumeros } 
        />
        <Button 
          title="Gerar"
          onPress={this.gerarNumeros}
        /> 
        <View style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {this.exibirNumeros()}
        </View>
      </React.Fragment>
    );
  }
}

export default Megasena;