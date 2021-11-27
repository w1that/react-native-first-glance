import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppBar from "../components/AppBar";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import Products from "../components/Products";
import products from "../data/products";

function Home({ navigation }) {
  const styles = StyleSheet.create({
    title: {
      fontSize: 26,
      fontWeight: "bold",
      paddingVertical: 20,
      marginHorizontal: 10,
    },
    container: {
      //paddingTop: 50,
      backgroundColor: "white",
    },
  });

  const [thereSearchedProduct, setThereSearchedProduct] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    products.map((product) => {
      if (
        searchInput.length > 3 &&
        product.productName.includes(searchInput) &&
        !thereSearchedProduct.includes(product)
      ) {
        setThereSearchedProduct([...thereSearchedProduct, product]);
      }
    });
    if (searchInput === "") {
      setThereSearchedProduct([]);
    }
  }, [searchInput]);

  function handleNavigateSearched(product) {
    navigation.navigate("Product Detail", { clickedProduct: product });
    setThereSearchedProduct([]);
    setSearchInput("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppBar
          setSearchInput={setSearchInput}
          input={searchInput}
          navigation={navigation}
        />
        <View
          style={{
            backgroundColor: "black",
            width: 200,
            position: "absolute",
            top: 110,
            zIndex: 1,
            left: "50%",
            marginLeft: -110,
          }}
        >
          {thereSearchedProduct.length > 0 ? (
            thereSearchedProduct.map((product) => {
              return (
                <TouchableOpacity
                  onPress={() => handleNavigateSearched(product)}
                  activeOpacity={0.7}
                >
                  <Text style={{ color: "white", padding: 10 }}>
                    {product.productName}
                  </Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <></>
          )}
        </View>
        <View>
          <Text style={styles.title}>Find your style</Text>
        </View>

        <Categories navigation={navigation} />
        <Products navigation={navigation} />

        <PopularProducts navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
