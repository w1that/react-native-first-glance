import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { CartContext } from '../contexts/cartContext'

function ProductInCart({productInCart, navigation}) {

    const [toggleOptions, setToggleOptions] = useState(false)
    const cartContext = useContext(CartContext)
   

    return (
        <TouchableOpacity
                    activeOpacity={0.7}
                    key={productInCart.id}
                    style={{
                      width: "90%",
                      marginBottom: 10,
                      backgroundColor: "white",
                      borderWidth: 1,
                      height: 100,
                      borderRadius: 20,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onPress={()=>setToggleOptions(!toggleOptions)}
                  >
                    <Image
                      style={{
                        width: 90,
                        height: 90,
                        resizeMode: "stretch",
                        borderRadius: 16,
                        marginLeft: 5,
                        marginRight:5
                      }}
                      source={productInCart.imagePath}
                    />
                    <Text
                      style={{ fontWeight: "500", fontSize: 20, width: "40%" }}
                    >
                      {productInCart.productName}
                    </Text>
                    {toggleOptions?<></>:<Text
                      style={{
                        fontWeight: "500",
                        fontSize: 20,
                        marginRight: 6,
                        paddingRight:10
                      }}
                    >
                      ${productInCart.price}
                    </Text>}
                    
                    {toggleOptions?<View style={{width:40, height:100,backgroundColor:"black", borderTopRightRadius:20, borderBottomRightRadius:20, flexDirection:"column",justifyContent:"space-between"}}>
                    <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor:"black", borderTopRightRadius:20,flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Image style={{width:20,height:20}} source={require('../assets/delete.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product Detail', {clickedProduct:productInCart})} activeOpacity={0.7} style={{ backgroundColor:"black", borderBottomRightRadius:20, flex:1,justifyContent:"center",alignItems:"center"}}>
                            <Image  style={{width:20,height:20}}  source={require('../assets/rightArrow.png')}></Image>
                        </TouchableOpacity>
                    </View>:<></>}
                  </TouchableOpacity>
    )
}

export default ProductInCart
