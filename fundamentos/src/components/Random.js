import React from "react";
import { Text } from "react-native";

import Style from "./style";

const Random = (props) => {
  // const max = props.max;
  // const min = props.min;
  // podemos substituir as duas linhas acima por uma, utilizando Atribuição via desestruturação (destructuring assignment)
  const { min, max } = props; // min, max vão receber os valores que estão dentro do objeto props, na respectiva ordem

  const random = parseInt(Math.random() * (max - min) + min);

  return (
    <Text style={Style.textDefault}>
      Gerando um número aleatório entre { min } e { max }... { random }
    </Text>
  );
}

export default Random;

