import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

import Style from "./style";

const Input = (props) => {
  const [state, setState] = useState("Teste");

  return (
    <View>
      <Text style={Style.textDefault}>{state}</Text>
      <TextInput 
        placeholder="Digite seu nome"
        value={state}
        onChangeText={state => setState(state)}
      />
    </View>
  );
}

export default Input;