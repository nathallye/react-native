import React from "react";
import { StyleSheet, View } from "react-native";

import Square  from "./Square";

const FlexboxV1 = (props) => {
  return (
    <View style={styles.FlexV1}>
      <Square color="#ff801a"/>
      <Square color="#50d1f6"/>
      <Square color="#dd22c1"/>
      <Square color="#8312ed"/>
      <Square color="#36c9a7"/>
    </View>
  );
}

const styles = StyleSheet.create({
  FlexV1: {
    backgroundColor: "black",

    flex: 1,
    justifyContent: "space-evenly",
  }
});

export default FlexboxV1;