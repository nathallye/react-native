import React, { useState } from "react";
import { Text, Button, View } from "react-native";

import Style from "./style";

const Counter = ({ initialValue = 0, step = 1 }) => {  
  const [count, setCount] = useState(initialValue);

  function dec() {
    setCount(count - step)
  }

  function inc() {
    setCount(count + step)
  }

  return (
    <React.Fragment>
      <Text style={Style.textDefault}>Contador</Text>
      <Text>{count}</Text>
      <View style={Style.buttons}>
        <View style={Style.button} >
          <Button
            title="-"
            onPress={dec}
          />
        </View>
        <View style={Style.button}>
          <Button   
            title="+"
            onPress={inc}
          />
        </View>
      </View>
    </React.Fragment>
  );
}

export default Counter;