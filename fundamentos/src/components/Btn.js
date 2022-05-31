import React from "react";
import { Button } from "react-native";

const Btn = (props) => {

  function executar() {
    console.log("Executando...")
  }

  return (
    <Button 
      title="Executar"
      onPress={executar}
    />
  );
}

export default Btn;