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
} from "react-native";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingHorizontal:10
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
      paddingVertical:30,
      marginHorizontal:10
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
      color:'black'
    },
    selectedCategoryTitle: {
      fontWeight: "bold",
      color:"white"
    },
    categoriesView:{
      
      marginHorizontal:10
    }
  });

  const categories = [
    { id: 1, categoryName: "All" },
    { id: 2, categoryName: "Women" },
    { id: 3, categoryName: "Eyewear" },
    { id: 4, categoryName: "Watch" },
    { id: 5, categoryName: "Men" },
    { id: 6, categoryName: "Winter" },
  ];

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
        <Image
          style={styles.logos}
          source={require("./assets/threelines.png")}
        ></Image>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            style={styles.logos}
            source={require("./assets/search.png")}
          ></Image>
          <Image
            style={styles.logos}
            source={require("./assets/bag.png")}
          ></Image>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Find your style</Text>
      </View>

      <ScrollView style={styles.categoriesView} horizontal={true} showsHorizontalScrollIndicator={false}>
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
            <Text style={selectedCategory.categoryName == category.categoryName
                ? styles.selectedCategoryTitle
                : styles.categoryTitle}>{category.categoryName}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
