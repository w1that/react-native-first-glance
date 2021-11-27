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
import { CartContext } from "../contexts/cartContext";

function CartDetail({ navigation }) {
    const cartContext = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        cartContext.productsInCart.forEach(productInCart => {
            setTotalPrice(prevTotalPrice=>prevTotalPrice+productInCart.price) 
        });
    }, [])
    
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
            paddingTop:30,
            alignItems:"center"
          }}
        >
        
      
      <Text style={{fontSize:30, fontWeight:"500",marginBottom:20 }}>Cart</Text>
          <View style={{backgroundColor:"black", padding:20, position:"absolute", right:10, top:10,borderRadius:15, borderWidth:2, borderColor:"rgba(104, 255, 0, 0.8)"}}>
              <Text style={{color:"white"}}>Total: ${totalPrice}</Text>
          </View>
    
          <ScrollView contentContainerStyle={{justifyContent:"center", alignItems:"center"}} showsVerticalScrollIndicator={false}>
          {cartContext.productsInCart.length!==0?cartContext.productsInCart.map(productInCart=>{
              return (
                <TouchableOpacity activeOpacity={0.7} key={productInCart.id} style={{width:"94%", marginBottom:10, backgroundColor:"white",borderWidth:1, height:100, borderRadius:20, flexDirection:"row", alignItems:"center",justifyContent:"space-between", paddingRight:20}}>
              <Image style={{ width:90,height:90, resizeMode:"stretch", borderRadius:16, marginLeft:5 }} source={productInCart.imagePath} />
            <Text style={{fontWeight:"500", fontSize:20, width:"50%"}}>{productInCart.productName}</Text>
            <Text style={{fontWeight:"500", fontSize:20,marginRight:6}}>${productInCart.price}</Text>
          </TouchableOpacity>
              )
          }):<Text>Shop first, checkout later</Text>}
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
            borderRadius: 20,
            borderTopColor:"black",
            borderTopWidth:1,
            
            
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
            <Text style={{ fontWeight: "bold" }}>Continue Shopping</Text>
          </TouchableOpacity>
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
            <Text style={{ fontWeight: "bold" }}>Complete transaction</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CartDetail;
