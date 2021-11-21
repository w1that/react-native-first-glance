import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import popularProducts from "../data/popularProducts";

export default function PopularProducts(){
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
})
    return(
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
              paddingHorizontal:10
            }}
          >
            <Text
              style={{
                paddingVertical: 20,
                fontWeight: "bold",
                
                paddingHorizontal:10,
                textAlign: "left",
                fontSize:20
              }}
            >
              Most Popular
            </Text>
            <Text
              style={{
                paddingVertical: 20,
                paddingHorizontal:10,
                fontWeight: "bold",
                textAlign: "left",
                color: "orange",
                fontSize:20
              }}
              onPress={() => alert("Navigates to all popular products")}
            >
              See All
            </Text>
          </View>
          <View style={{ flex: 1, flexWrap: "wrap" }}>
            {popularProducts.map((product) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.popularProductItem}
                >
                  <Image
                    resizeMode="cover"
                    style={styles.popularProductImage}
                    source={product.imagePath}
                  ></Image>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <Text>{product.productName}</Text>
                    <Text style={{ fontWeight: "bold" }}>${product.price.toString()}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
    )
}
