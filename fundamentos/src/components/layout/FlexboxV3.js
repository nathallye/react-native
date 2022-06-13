import React from "react";
import { StyleSheet, View } from "react-native";

import Square  from "./Square";

const FlexboxV3 = (props) => {
  return (
    <View style={styles.FlexV3}>
      <Square color="#ff801a"/>
      <Square color="#50d1f6"/>
      <Square color="#dd22c1"/>
      <Square color="#8312ed"/>
      <Square color="#36c9a7"/>
    </View>
  );
}

const styles = StyleSheet.create({
  FlexV3: {
    backgroundColor: "black",

    height: 350,
    width: "100%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

export default FlexboxV3;

