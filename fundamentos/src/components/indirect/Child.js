import React from "react";
import { Button } from "react-native";

const Child = (props) => {

  function numberRandom(min, max) {
    return parseInt(Math.random() * (max - min)) + min;
  }

  return (
    <Button 
      title="Enviar informações"
      onPress={function() {
        const n = numberRandom(props.min, props.max)
        props.function(n)
      }}
    />
  );
}

export default Child;
