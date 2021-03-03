import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Animated,
} from "react-native";

export default function OnBoardingItem({ item, opacity, currentIndex }) {
  const { width } = useWindowDimensions();

  return (
    <Animated.View
      key={item.id}
      style={{
        display: currentIndex == item.id ? "flex" : "none",
        opacity: currentIndex != item.id ? 0.6 : opacity,
        padding: 30,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "#9098B1",
          lineHeight: 21,
        }}
      >
        {item.description}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
  description: {
    textAlign: "center", // <-- the magic
    fontSize: 14,
    marginTop: 0,
  },
});
