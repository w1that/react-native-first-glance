import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AppBar() {
  const styles = StyleSheet.create({
    logos: {
      width: 30,
      height: 30,
      marginLeft: 10,
      marginRight: 10,
    },
  });

  const [focused, setFocused] = useState(false);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Image
          style={styles.logos}
          source={require("../assets/threelines.png")}
        ></Image>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="search"
          keyboardType="default"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: focused ? "black" : "gray",
            paddingHorizontal: 10,
            fontSize: 16,
            paddingVertical: 5,
            maxWidth: 180,
            minWidth: 180,
            height: 50,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
  );
}
