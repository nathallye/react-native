import React from "react";
import { Text } from "react-native";

import Style from "../style";

import ChildRelationship from "./ChildRelationship";

const DadRealationship = (props) => {
  return (
    <>
      <Text style={Style.textDefault}>Componente com filhos</Text>
      {props.children}
    </>
  );
}

export default DadRealationship;