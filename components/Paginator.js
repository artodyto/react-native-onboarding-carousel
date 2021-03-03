import React, { useEffect } from "react";
import { StyleSheet, Animated, useWindowDimensions, View } from "react-native";

export default function Paginator({ data, scrollX, currentIndex }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { flexDirection: "row" }]}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [9, 26, 9],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={[
                {
                  width: dotWidth,
                  backgroundColor:
                    i == currentIndex - 1 ? "#F43030" : "#C4C4C4",
                  opacity,
                },
                styles.dot,
              ]}
              key={i}
            ></Animated.View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 9,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
});
