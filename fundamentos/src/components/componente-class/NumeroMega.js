import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Style from "../style";

const NumeroMega = ({ numero }) => {

  return (
    <View style={stylesNumeroMega.Container}>
      <Text style={[Style.textDefault, stylesNumeroMega.Number]}>
        {numero}
      </Text>
    </View>
  );
}

const stylesNumeroMega = StyleSheet.create({
  Container: {
    backgroundColor: "#000",
    
    height: 50,
    width: 50,

    margin: 5,
    borderRadius: 25,
  },
  Number: {
    color: "#FFF",
    fontSize: 24
  },
})

export default NumeroMega;