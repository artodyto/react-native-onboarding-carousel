import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function NextButton({ scrollTo }) {
  return (
    <TouchableOpacity
      onPress={() => scrollTo()}
      style={styles.container}
      activeOpacity={1}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
        Next
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 61,
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    position: "absolute",
    right: 0,
    borderTopStartRadius: 50,
    borderBottomStartRadius: 50,
    shadowColor: "#F43030",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
