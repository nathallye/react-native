import React from "react";
import { View } from "react-native";

const Square = (props) => {
  return (
    <View style={{
      height: 50,
      width: 50, 
      backgroundColor: props.color || "#000"
    }}
    />
  );
}

export default Square;