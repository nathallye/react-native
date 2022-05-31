import React, { useState } from "react";
import { Text } from "react-native";

import Style from "../style";

import Child from "./Child";

const DadIndirect = (props) => {

  const [state, setState] = useState(0);
  
  function displayValue(number) {
    setState(number)
  }

  return (
    <>
      <Text style={Style.textDefault}>Comunicação Indireta</Text>
      <Text style={Style.textSecondary}>{state}</Text>
      <Child 
        min={1}
        max={60}
        function={displayValue}
      />
    </>
  );
}

export default DadIndirect;