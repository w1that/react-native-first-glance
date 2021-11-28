import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductInCart from "../components/ProductInCart";
import { CartContext } from "../contexts/cartContext";

function CartDetail({ navigation }) {
  const cartContext = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    cartContext.productsInCart.forEach((productInCart) => {
      setTotalPrice((prevTotalPrice) => prevTotalPrice + productInCart.price);
    });
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "column",
          height: Dimensions.get("window").height,
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            flex: 15,
            width: "100%",
            paddingTop: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "500", marginBottom: 20 }}>
            Cart
          </Text>
          {cartContext.productsInCart.length === 0 ? (
            <></>
          ) : (
            <View
              style={{
                backgroundColor: "black",
                padding: 20,
                position: "absolute",
                right: 10,
                top: 10,
                borderRadius: 15,
                borderWidth: 2,
                borderColor: "rgba(104, 255, 0, 0.8)",
              }}
            >
              <Text style={{ color: "white" }}>Total: ${totalPrice}</Text>
            </View>
          )}

          <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            showsVerticalScrollIndicator={false}
            horizontal={false}
          >
            {cartContext.productsInCart.length !== 0 ? (
              cartContext.productsInCart.map((productInCart) => {
                return (
                  <ProductInCart
                    productInCart={productInCart}
                    navigation={navigation}
                  />
                );
              })
            ) : (
              <Text>Shop first, checkout later</Text>
            )}
          </ScrollView>
        </View>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            flex: 2,
            paddingBottom: 60,
            backgroundColor: "white",
            paddingTop: 10,
            borderTopColor: "black",
            borderTopWidth: 1,
            opacity:0.9,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            activeOpacity={0.7}
            style={{
              alignItems: "center",
              backgroundColor: "white",
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 20,
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/left-arrow.png")}
            />
          </TouchableOpacity>
          {cartContext.productsInCart.length === 0 ? (
            <TouchableOpacity></TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                backgroundColor: "white",
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../assets/checkout.png")}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CartDetail;
