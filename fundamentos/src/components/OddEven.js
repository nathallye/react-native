import React from "react";
import { View, Text } from "react-native";

import Style from "./style";

const OddEven = ({number = 0}) => {
  return (
    <View>
      <Text style={Style.textDefault}>
        Renderização Condicional de Código JSX. Solução: Operadores Ternários.
      </Text>
      {number % 2 === 0
        ? <Text style={Style.textSecondary}>Par</Text>
        : <Text style={Style.textSecondary}>Ímpar</Text>
      }
    </View>
  );
}

export default OddEven;