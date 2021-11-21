import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import categories from "./data/categories";
import products from "./data/products";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingHorizontal: 10,
    },
    logos: {
      width: 30,
      height: 30,
      marginLeft: 10,
      marginRight: 10,
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      paddingVertical: 20,
      marginHorizontal: 10,
      fontFamily:'sans-serif'
    },
    categoryButton: {
      backgroundColor: "white",
      borderWidth: 2,
      padding: 10,
      marginRight: 10,
      borderColor: "#f0f0f7",
      borderRadius: 10,
    },
    selectedCategoryButton: {
      backgroundColor: "white",
      borderWidth: 2,
      padding: 10,
      marginRight: 10,
      backgroundColor: "black",
      borderColor: "black",
      borderRadius: 10,
    },
    categoryTitle: {
      fontWeight: "bold",
      color: "black",
    },
    selectedCategoryTitle: {
      fontWeight: "bold",
      color: "white",
    },
    categoriesView: {
      marginHorizontal: 10,
      marginBottom: 10,
    },
    productImage: {
      width: 220,
      height: 400,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "black",
    },
    productName: {
      paddingVertical: 10,
      color: "black",
    },
    productPrice: {
      color: "black",
    },
  });

  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    categoryName: "All",
  });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Image
            style={styles.logos}
            source={require("./assets/threelines.png")}
          ></Image>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity>
            <Image
              style={styles.logos}
              source={require("./assets/search.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.logos}
              source={require("./assets/bag.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Find your style</Text>
      </View>

      {/* categories */}
      <SafeAreaView>
        <ScrollView
          style={styles.categoriesView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category) => (
            <TouchableOpacity
              onPress={() => setSelectedCategory(category)}
              key={category.id}
              style={
                selectedCategory.categoryName == category.categoryName
                  ? styles.selectedCategoryButton
                  : styles.categoryButton
              }
            >
              <Text
                style={
                  selectedCategory.categoryName == category.categoryName
                    ? styles.selectedCategoryTitle
                    : styles.categoryTitle
                }
              >
                {category.categoryName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
      {/* products */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          justifyContent="center"
        >
          {products.map((product) => {
            return (
              <View key={product.id}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <TouchableOpacity activeOpacity={0.7}>
                    <Image
                      style={styles.productImage}
                      source={product.imagePath}
                      resizeMode="cover"
                    ></Image>
                  </TouchableOpacity>
                  <Text style={styles.productName}>{product.productName}</Text>
                  <Text style={styles.productPrice}>${product.price}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

      <ScrollView>
        <Text>asdasdas</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
