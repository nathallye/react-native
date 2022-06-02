import React from "react";
import { Text } from "react-native";

import Style from "../style";

import products from "./products";

const ListProducts = () => {

  function getList() {
    return products.map(product => {
      return (
        <Text key={product.id} style={Style.textSecondary}>
          {product.id}) {product.name} tem preço R${product.price}
        </Text>
      )
    })
  }

  return (
    <React.Fragment>
      <Text style={Style.textDefault}>
        Lista de Produtos
      </Text>

      {getList()}
      
    </React.Fragment>
  );
}

export default ListProducts;