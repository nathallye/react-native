import React from "react";
import { Text } from "react-native";

import Style from "../style";

const Child = (props) => {
  return (
    <>
      <Text style={Style.textDefault}>{props.text}</Text>
      <Text style={Style.textSecondary}>{props.number}</Text>
    </>
  );
}

export default Child;
