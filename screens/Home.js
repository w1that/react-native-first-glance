import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';
import Products from '../components/Products';


function Home() {
    const styles = StyleSheet.create({
        title: {
            fontSize: 26,
            fontWeight: "bold",
            paddingVertical: 20,
            marginHorizontal: 10,
          },
    })
    return (
        <>
        
        <View>
          <Text style={styles.title}>Find your style</Text>
        </View>
        
        <Categories/>
        <Products/>
        
        <PopularProducts/>
        </>
    )
}

export default Home
