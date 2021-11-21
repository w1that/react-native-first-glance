import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import products from "../data/products";

export default function Products({navigation}) {
  const styles = StyleSheet.create({
    productImage: {
      width: 200,
      height: 300,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "gray",
    },
    productItem: {
      marginHorizontal: 10,
      backgroundColor: "#f0f0f0",
      borderRadius: 30,
    },
    productInfo: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
  });

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {products.map((product) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.productItem}
              key={product.id}
              onPress={()=>navigation.navigate('Product Detail', {clickedProduct:product})}
            >
              <Image
                resizeMode="cover"
                style={styles.productImage}
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
      </ScrollView>
    </View>
  );
}
