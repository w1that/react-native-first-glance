import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import AppBar from "./components/AppBar";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetail from "./screens/ProductDetail";
import { CartContext } from "./contexts/cartContext";
import CartDetail from "./screens/CartDetail";
import SelectedCategoriesScreen from "./screens/SelectedCategoriesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const styles = StyleSheet.create({});

  const [productsInCart, setProductsInCart] = useState([]);

  function addProductToCart(product) {
    setProductsInCart([...productsInCart, product]);
  }

  function deleteProductFromCart(product){
    /**this field will be filled */
  }

  return (
    <NavigationContainer>
      <CartContext.Provider value={{ addProductToCart, productsInCart }}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Product Detail" component={ProductDetail} />
          <Stack.Screen name="Cart Detail" component={CartDetail}/>
          <Stack.Screen name="Selected Category Screen" component={SelectedCategoriesScreen}/>
        </Stack.Navigator>
      </CartContext.Provider>
    </NavigationContainer>
  );
}
