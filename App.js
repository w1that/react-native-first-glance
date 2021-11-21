import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppBar from "./components/AppBar";
import popularProducts from "./data/popularProducts";
import products from "./data/products";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";
import Products from "./components/Products";
import Home from "./screens/Home";

export default function App() {
  const styles = StyleSheet.create({
   
    container: {
      paddingTop: 50,
    },
    
    
  });

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppBar/>      
        <Home/>
      </ScrollView>
    </SafeAreaView>
  );
}
