import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import popularProducts from "../data/popularProducts";
import products from "../data/products";

function SelectedCategoriesScreen({ navigation, route }) {
  const styles = StyleSheet.create({
    popularProductImage: {
      width: 340,
      height: 400,
      borderRadius: 30,
      borderColor: "gray",
      borderWidth: 1,
    },
    popularProductItem: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: 340,
      borderRadius: 30,
      backgroundColor: "#f0f0f0",
      marginVertical: 10,
      alignSelf:"center"
    },
    mainContainer: { justifyContent: "center", alignItems: "center" },
    secondContainer: {
      justifyContent: "space-between",
      flexDirection: "row",
      width: "100%",
      paddingHorizontal: 10,
    },
    popularTitle: {
      paddingVertical: 20,
      fontWeight: "bold",

      paddingHorizontal: 10,
      textAlign: "left",
      fontSize: 20,
    },
    seeAllTitle: {
      paddingVertical: 20,
      paddingHorizontal: 10,
      fontWeight: "bold",
      textAlign: "left",
      color: "orange",
      fontSize: 20,
    },
    productInfo: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },

    title: {
      backgroundColor: "black",
      paddingHorizontal: 50,
      fontWeight: "600",
      fontSize: 28,
      paddingVertical: 20,
      color: "white",
    },
    bottomBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      backgroundColor: "white",
      width: "100%",
      height: 100,
      opacity:0.9,
      borderTopWidth:1,
      borderTopColor:"gray"
    },
    buttons:{
      paddingHorizontal:30,
      paddingVertical:26
    },
    icons:{
      width:50,
      height:50,
    }
    
  });

  const allProducts = products.concat(popularProducts);
  const [selectedCategoriesProducts, setSelectedCategoriesProducts] = useState(
    []
  );

  useEffect(() => {
    allProducts.forEach((product) => {
      if (route.params.category.id == product.categoryId) {
        setSelectedCategoriesProducts((prev) => [...prev, product]);
      }
    });
  }, []);

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white", }}>
      <Text style={styles.title}>{route.params.category.categoryName}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {selectedCategoriesProducts.map((product) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.popularProductItem}
            key={product.id}
            onPress={() =>
              navigation.navigate("Product Detail", { clickedProduct: product })
            }
          >
            <Image
              resizeMode="cover"
              style={styles.popularProductImage}
              source={product.imagePath}
            ></Image>
            <View style={styles.productInfo}>
              <Text>{product.productName}</Text>
              <Text style={{ fontWeight: "bold" }}>
                ${product.price.toString()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.buttons}>
          <Image style={styles.icons} source={require("../assets/left-arrow.png")}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SelectedCategoriesScreen;
