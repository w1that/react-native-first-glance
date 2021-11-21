import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppBar from '../components/AppBar';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';
import Products from '../components/Products';


function Home({navigation}) {
    const styles = StyleSheet.create({
        title: {
            fontSize: 26,
            fontWeight: "bold",
            paddingVertical: 20,
            marginHorizontal: 10,
          },
          container: {
            paddingTop: 50,
            backgroundColor:"white"
          },
    })
    return (
        <SafeAreaView style={styles.container}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        <AppBar />
        <View>
          <Text style={styles.title}>Find your style</Text>
        </View>
        
        <Categories/>
        <Products navigation={navigation}/>
        
        <PopularProducts navigation={navigation}/>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Home
