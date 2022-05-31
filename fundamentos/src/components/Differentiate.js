import React from "react";
import { Text, Platform } from "react-native";

import Style from "./style";

const Differentiate = () => {
  let platform = '';

  if (Platform.OS === 'android') {
    platform = "Android";
  } else if(Platform.OS === 'ios') {
    platform = "iOS"
  } else {
    platform = "Não identificado!"
  }

  return (
    <>
      <Text style={Style.textDefault}>Diferenciando iOS e Android</Text>
      <Text style={Style.textSecondary}>{platform}</Text>
    </>
  );
}

export default Differentiate;