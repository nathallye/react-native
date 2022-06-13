import React from "react";
import { StyleSheet, View } from "react-native";

import Square  from "./Square";

const FlexboxV2 = (props) => {
  return (
    <View style={styles.FlexV2}>
      <Square color="#ff801a"/>
      <Square color="#50d1f6"/>
      <Square color="#dd22c1"/>
      <Square color="#8312ed"/>
      <Square color="#36c9a7"/>
    </View>
  );
}

const styles = StyleSheet.create({
  FlexV2: {
    backgroundColor: "black",

    width: "100%",
    // height: "100%",
    alignItems: "center",
    // justifyContent: "center"
  }
});

export default FlexboxV2;