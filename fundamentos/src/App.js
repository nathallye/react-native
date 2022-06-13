import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

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
import ListProducts from "./components/products/ListProducts";
import ListProductsV2 from "./components/products/ListProductsV2";
import Input from "./components/Input";
// import Square from "./components/layout/Square";
import FlexboxV1 from "./components/layout/FlexboxV1";
import FlexboxV2 from "./components/layout/FlexboxV2";
import FlexboxV3 from "./components/layout/FlexboxV3";
import Megasena from "./components/componente-class/Megasena";

const App = () => {
  // console.warn("Opa!")

  return (
    <SafeAreaView style={styles.App}>
      {/* <Text style={Style.textDefault}>Olá mundo!</Text>
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
      <ListProducts />
      <ListProductsV2 />
      <Input /> 
      <FlexboxV1 /> 
      <FlexboxV2 /> 
      <FlexboxV3 /> */}
      <Megasena quantNumeros={7}/>
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