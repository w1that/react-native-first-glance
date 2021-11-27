import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CartContext } from "../contexts/cartContext";

export default function AppBar({ setSearchInput, input, navigation }) {
  const styles = StyleSheet.create({
    appbarContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logos: {
      width: 30,
      height: 30,
      marginLeft: 10,
      marginRight: 10,
    },
    searchBar: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: focused ? "black" : "gray",
      paddingHorizontal: 10,
      fontSize: 16,
      paddingVertical: 5,
      maxWidth: 180,
      minWidth: 180,
      height: 50,
    },
    rightSide: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    leftSide: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      paddingTop: 20,
      //paddingTop:50 //old version
    },
  });

  const [focused, setFocused] = useState(false);
  const cartContext = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appbarContainer}>
        <TouchableOpacity>
          <Image
            style={styles.logos}
            source={require("../assets/threelines.png")}
          ></Image>
        </TouchableOpacity>
        <View style={styles.leftSide}>
          <TextInput
            value={input}
            placeholder="search"
            keyboardType="default"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={(text) => setSearchInput(text)}
            style={styles.searchBar}
          />
        </View>
        <View style={styles.rightSide}>
          <TouchableOpacity>
            <Image
              style={styles.logos}
              source={require("../assets/search.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingLeft: 5 }} onPress={()=>navigation.navigate('Cart Detail')}>
            <Image
              style={styles.logos}
              source={require("../assets/bag.png")}
            ></Image>
            <View style={{
                position: "absolute",
                backgroundColor: "orange",
                padding: 2,
                borderRadius: 50,
                left: 2,
                width: 20,
                height: 20,
                borderWidth:2,
                borderColor:"#b0bb0b",
                justifyContent:"center"
              }}>
            <Text
              style={{fontWeight: "bold",textAlign:"center"}}
            >
              {cartContext.productsInCart.length>0?cartContext.productsInCart.length:''}
            </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
