import React from "react";
import { SafeAreaView, Text } from "react-native";

import First from "./components/First";

const App = () => {
  return (
    <SafeAreaView>
      <Text>Olá mundo!</Text>
      <First />
    </SafeAreaView>
  );
}

export default App;