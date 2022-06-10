import React from "react";
import { View } from "react-native";

const Square = (props) => {
  return (
    <View style={{
      height: 20,
      width: 20, 
      backgroundColor: props.color || "#000"
    }}
    />
  );
}

export default Square;