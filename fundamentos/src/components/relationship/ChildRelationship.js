import React, { useState } from "react";
import { Text } from "react-native";

import Style from "../style";

const ChildRelationship = (props) => {
  return (
    <Text style={Style.textSecondary}>
      {props.name} {props.surname}
    </Text>
  );
}

export default ChildRelationship;