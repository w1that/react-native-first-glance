import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import categories from "../data/categories";

export default function Categories(){

    const styles = StyleSheet.create({
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
      });
    

    const [selectedCategory, setSelectedCategory] = useState({
        id: 1,
        categoryName: "All",
      });

    return(
        <View>
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
        </View>
    )
}