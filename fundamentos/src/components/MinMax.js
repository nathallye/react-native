import React from "react";
import { Text } from "react-native";

import Style from "./style";

const MinMax = (props) => {
  console.log(props)

  return (
    <Text style={Style.textDefault}>
      O valor {props.max} é maior que o valor {props.min}!
    </Text>
  );
}

export default MinMax;