import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ProductDetail({ navigation, route }) {

  const styles = StyleSheet.create({
    mainContainer:{ paddingHorizontal: 20 },
    topBar:{ justifyContent: "space-between", flexDirection: "row" },
    icons:{ width: 30, height: 30 },
    productInfo:{
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingVertical: 20,
      },
    sizeField:{
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingVertical: 10,
      },
    sizeText:{ fontWeight: "600", fontSize: 18 },
    colorField:{
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingVertical: 10,
      },
    addCart:{
        backgroundColor: "black",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 16,
      },selectedSizeStyle:{
        borderRadius: 16,
        backgroundColor: "orange",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        borderColor: "gray",
      },
      nonSelectedSize:{
        borderWidth: 2,
        borderRadius: 16,
        backgroundColor: "#f0f0f0",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        borderColor: "gray",
      }

  })  

  const [currentProduct, setcurrentProduct] = useState(
    route.params.clickedProduct
  );
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [selectedSize, setSelectedSize] = useState('L')

  function handleSelectColor(colorCode) {
    setSelectedColor(colorCode);
  }

  function handleSelectSize(size){
      setSelectedSize(size)
  }

  function handleColorFieldStyle(colorCode){
    if(colorCode === selectedColor){
        return {
            borderWidth: 2,
            borderRadius: 16,
            backgroundColor: colorCode,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            borderColor: "orange",
          }
    }else{
        if(colorCode==='#ffffff'){
            return {
                borderRadius: 16,
                backgroundColor: colorCode,
                width: 50,
                height: 50,
                borderWidth:1,
                borderColor:'gray',
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }
        }else{
            return {
                borderRadius: 16,
                backgroundColor: colorCode,
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }
        }
    }
  }

  function handleSizeFieldStyle(size) {
      if(selectedSize===size){
          return styles.selectedSizeStyle
      }  else{
          return styles.nonSelectedSize
      }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.icons}
            source={require("../assets/left-arrow.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require("../assets/like.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <View
        style={styles.productInfo}
      >
        <Text style={{ fontWeight: "600", fontSize: 30 }}>
          {currentProduct.productName}
        </Text>
        <Text style={{ fontWeight: "500", fontSize: 24 }}>
          ${currentProduct.price}
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          resizeMode="cover"
          style={{ width: "100%", borderRadius: 30, height: 360 }}
          source={currentProduct.imagePath}
        ></Image>
      </View>
      {(currentProduct.categoryId != 3 && currentProduct.categoryId !=4) ? <View style={{ paddingVertical: 20 }}>
        <Text style={{ fontWeight: "600", fontSize: 20 }}>Select Size</Text>
        <View
          style={styles.sizeField}
        >
          <TouchableOpacity
            style={handleSizeFieldStyle('S')}
            onPress={()=>setSelectedSize('S')}
          >
            <Text style={styles.sizeText}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={handleSizeFieldStyle('M')}
            onPress={()=>setSelectedSize('M')}
          >
            <Text style={styles.sizeText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={handleSizeFieldStyle('L')}
            onPress={()=>setSelectedSize('L')}
          >
            <Text style={styles.sizeText}>
              L
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={handleSizeFieldStyle('XL')}
            onPress={()=>setSelectedSize('XL')}
          >
            <Text style={styles.sizeText}>XL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={handleSizeFieldStyle('XXL')}
            onPress={()=>setSelectedSize('XXL')}
          >
            <Text style={styles.sizeText}>XXL</Text>
          </TouchableOpacity>
        </View>
      </View>:<></>}
      <View>
        <Text style={{ fontWeight: "600", fontSize: 20, marginTop:20 }}>Select Color</Text>

        <View
          style={styles.colorField}
        >
          <TouchableOpacity
            onPress={() => handleSelectColor("#ffffff")}
            style={handleColorFieldStyle("#ffffff")}
          />

          <TouchableOpacity
            onPress={() => handleSelectColor("#916954")}
            style={handleColorFieldStyle("#916954")}
          />

          <TouchableOpacity
            onPress={() => handleSelectColor("#9c7bbd")}
            style={handleColorFieldStyle("#9c7bbd")}
          />

          <TouchableOpacity
            onPress={() => handleSelectColor("#cb81cc")}
            style={handleColorFieldStyle("#cb81cc")}
          />

          <TouchableOpacity
            onPress={() => handleSelectColor("#9ecc81")}
            style={handleColorFieldStyle("#9ecc81")}
          />

          <TouchableOpacity
            onPress={() => handleSelectColor("#8199cc")}
            style={handleColorFieldStyle("#8199cc")}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "800" }}>
          <Text style={{ color: "orange" }}>$</Text>
          {currentProduct.price}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.addCart}
        >
          <Text style={{ color: "white" }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ProductDetail;
