import React, { useState } from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function ProductDetail({navigation, route}) {
    const [currentProduct, setcurrentProduct] = useState(route.params.clickedProduct)
   
    return (
        <SafeAreaView style={{paddingHorizontal:20}}>
            <View style={{justifyContent:"space-between", flexDirection:"row",}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}><Image style={{width:30, height:30}} source={require("../assets/left-arrow.png")}></Image></TouchableOpacity>
                <TouchableOpacity><Image style={{width:30, height:30}} source={require("../assets/like.png")}></Image></TouchableOpacity>
            </View>
            <View style={{justifyContent:"center", flexDirection:"column", alignItems:"center", paddingVertical:20}}>
                <Text style={{fontWeight:"600", fontSize:30}}>{currentProduct.productName}</Text>
                <Text style={{fontWeight:"500", fontSize:24}}>${currentProduct.price}</Text>
            </View>
            <View style={{justifyContent:"center", alignItems:"center"}}>
                <Image resizeMode="cover" style={{width:"100%", borderRadius:30, height:360}} source={currentProduct.imagePath}></Image>
            </View>
            <View style={{paddingVertical:20}}>
                <Text style={{fontWeight:"600", fontSize:20}}>Select Size</Text>
                <View style={{flexDirection:"row", justifyContent:"flex-start", paddingVertical:10}}>
                    <View style={{borderWidth:2, borderRadius:16, backgroundColor:"#f0f0f0", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10, borderColor:"gray"}}>
                        <Text style={{fontWeight:"600", fontSize:18}}>S</Text>
                    </View>
                    <View style={{borderWidth:2, borderRadius:16, backgroundColor:"#f0f0f0", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10, borderColor:"gray"}}>
                        <Text style={{fontWeight:"600", fontSize:18}}>M</Text>
                    </View>
                    <View style={{ borderRadius:16, backgroundColor:"orange", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10, borderColor:"gray"}}>
                        <Text style={{fontWeight:"600", fontSize:18, color:"white"}}>L</Text>
                    </View>
                    <View style={{borderWidth:2, borderRadius:16, backgroundColor:"#f0f0f0", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10, borderColor:"gray"}}>
                        <Text style={{fontWeight:"600", fontSize:18}}>XL</Text>
                    </View>
                    <View style={{borderWidth:2, borderRadius:16, backgroundColor:"#f0f0f0", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10, borderColor:"gray"}}>
                        <Text style={{fontWeight:"600", fontSize:18}}>XXL</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{fontWeight:"600", fontSize:20}}>Select Color</Text>
                <View style={{flexDirection:"row", justifyContent:"flex-start", paddingVertical:10}}>     
                    <View style={{borderWidth:2, borderRadius:16, backgroundColor:"white", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10, borderColor:"orange"}}>
                       
                    </View>
                    <View style={{borderRadius:16,opacity:0.5, backgroundColor:"#916954", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10,}}>
                        
                    </View>
                    <View style={{ borderRadius:16,opacity:0.5, backgroundColor:"#9c7bbd", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10,}}>
                       
                    </View>
                    <View style={{ borderRadius:16,opacity:0.5, backgroundColor:"#cb81cc", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10,}}>
                        
                    </View>
                    <View style={{borderRadius:16,opacity:0.5, backgroundColor:"#9ecc81", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10,}}>
                        
                    </View>

                    <View style={{ borderRadius:16,opacity:0.5, backgroundColor:"#8199cc", width:50, height:50, justifyContent:"center", alignItems:"center", marginRight:10,}}>
                        
                    </View>
                </View>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingVertical:20}}>
                <Text style={{fontSize:26, fontWeight:"800"}}><Text style={{color:"orange"}}>$</Text>{currentProduct.price}</Text>
                <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:"black", paddingHorizontal:40, paddingVertical:20, borderRadius:16}}>
                    <Text style={{color:"white"}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail
