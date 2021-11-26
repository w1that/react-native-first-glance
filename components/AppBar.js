import React, { useEffect, useState } from "react";
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

export default function AppBar({setSearchInput, input}) {
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
        paddingTop: 50,
      },
  });

  const [focused, setFocused] = useState(false);

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
          onChangeText={(text)=>setSearchInput(text)}
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
        <TouchableOpacity>
          <Image
            style={styles.logos}
            source={require("../assets/bag.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
}
