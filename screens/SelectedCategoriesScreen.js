import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import popularProducts from '../data/popularProducts'
import products from '../data/products'

function SelectedCategoriesScreen({navigation, route}) {

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
          width:200,
        },
      });

    const allProducts = products.concat(popularProducts)
    
    return (
        <SafeAreaView>
        <Text>{route.params.category.categoryName}</Text>
           {allProducts.map(product=><Text>{product.productName}</Text>)}
        </SafeAreaView>
    )
}

export default SelectedCategoriesScreen
