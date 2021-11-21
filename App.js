import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import AppBar from "./components/AppBar";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetail from "./screens/ProductDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  const styles = StyleSheet.create({});

  return (
    <NavigationContainer>
      {/*  */}
      
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product Detail" component={ProductDetail} />
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}
