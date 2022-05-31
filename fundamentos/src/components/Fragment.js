import React from "react";
import { View, Text } from "react-native";

import Style from "./style";

const Fragment = (props) => {
  return (
    <>
      <Text style={Style.textDefault}>
        Adjacent JSX elements must be wrapped in an enclosing tag.
      </Text>
      <Text style={Style.textSecondary}>
        Cuidado com esse erro!
      </Text>
    </>
  );
}

export default Fragment;
