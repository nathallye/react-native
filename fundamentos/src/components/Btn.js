import React from "react";
import { Text, Button } from "react-native";

import Style from "./style";

const Btn = (props) => {

  function executar() {
    console.log("Executando...")
  }

  return (
    <>
      <Text style={Style.textDefault}>Componente Button</Text>
      <Button 
        title="Executar"
        onPress={executar}
        />
    </>
  );
}

export default Btn;