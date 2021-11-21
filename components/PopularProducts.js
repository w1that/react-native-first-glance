import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import popularProducts from "../data/popularProducts";

export default function PopularProducts({navigation}) {
  const styles = StyleSheet.create({
    popularProductImage: {
      width: 300,
      height: 400,
      borderRadius: 30,
      borderColor: "gray",
      borderWidth: 1,
    },
    popularProductItem: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
      backgroundColor: "#f0f0f0",
      marginVertical: 10,
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
  });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <Text style={styles.popularTitle}>Most Popular</Text>
        <Text
          style={styles.seeAllTitle}
          onPress={() => alert("Navigates to all popular products")}
        >
          See All
        </Text>
      </View>
      <View>
        {popularProducts.map((product) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.popularProductItem}
              key={product.id}
              onPress={()=>navigation.navigate('Product Detail', {clickedProduct:product})}
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
          );
        })}
      </View>
    </View>
  );
}
