import React from "react";
import { FlatList, Text } from "react-native";

import Style from "../style";

import products from "./products";

const ListProductsV2 = () => {

  const renderProduct = ({ item: product }) => { 
    return (
      <Text style={Style.textSecondary}>
        {product.id}) {product.name} tem preço R${product.price}
      </Text>
    )      
  }

  return (
    <React.Fragment>
      <Text style={Style.textDefault}>
        Lista de Produtos V2
      </Text>

      <FlatList 
        data={products}
        keyExtractor={i => `${i.id}`}
        renderItem={renderProduct}
      />
    </React.Fragment>
  );
}

export default ListProductsV2;