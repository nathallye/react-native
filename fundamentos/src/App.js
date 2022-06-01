import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

import Style from "./components/style";

import First from "./components/First";
import MinMax from "./components/MinMax";
import Random from "./components/Random";
import Fragment from "./components/Fragment";
import Btn from "./components/Btn";
import Counter from "./components/Counter";
import Dad from "./components/direct/Dad";
import DadIndirect from "./components/indirect/DadIndirect";
import Differentiate from "./components/Differentiate";
import OddEven from "./components/OddEven";
import DadRealationship from "./components/relationship/DadRelationship";
import ChildRelationship from "./components/relationship/ChildRelationship";

const App = () => {
  // console.warn("Opa!")

  return (
    <SafeAreaView style={styles.App}>
      <Text style={Style.textDefault}>Olá mundo!</Text>
      <First />
      <MinMax min={10} max={20} />
      <Random min={0} max={100}/>
      <Fragment />
      <Btn />
      <Counter initialValue={100} step={5}/>
      <Dad />
      <DadIndirect />
      <Differentiate />
      <OddEven number={3}/>
      <DadRealationship>
        <ChildRelationship name="Nathallye" surname="Tavares"/>
        <ChildRelationship name="Paulo" surname="Bacelar"/>        
      </DadRealationship>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: "pink",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    padding: 10,
  }
});

export default App;