import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Animated,
  ScrollView,
  useWindowDimensions,
  Easing,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import slides from "../slides";
import OnBoardingItem from "./OnBoardingItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";
import PreviousButton from "./NextButton";
import SwipeGesture from "../utils/swipe-gesture";

export default function OnBoarding() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const { width } = useWindowDimensions();

  const onSwipePerformed = (action) => {
    switch (action) {
      case "left": {
        scrollTo();
        break;
      }
      case "right": {
        scrollBack();
        break;
      }
    }
  };

  const scrollTo = () => {
    let current = width * currentIndex;
    if (currentIndex < slides.length) {
      setCurrentIndex(currentIndex + 1);

      Animated.spring(scrollX, {
        toValue: current,
        useNativeDriver: false,
      }).start();
    }
  };

  const scrollBack = () => {
    let current = width * currentIndex;
    if (currentIndex >= 2) {
      setCurrentIndex(currentIndex - 1);

      Animated.spring(scrollX, {
        toValue: current - width * 2,
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ flex: 3 }}>
        <SwipeGesture
          onSwipePerformed={onSwipePerformed}
          gestureStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {slides.map((item) => {
            return (
              <OnBoardingItem
                item={item}
                opacity={opacity}
                currentIndex={currentIndex}
                key={item.id}
              />
            );
          })}
        </SwipeGesture>
      </View>

      <SwipeGesture onSwipePerformed={onSwipePerformed}>
        <View
          style={{ flex: 0, justifyContent: "center", alignItems: "center" }}
        >
          <Paginator
            data={slides}
            scrollX={scrollX}
            currentIndex={currentIndex}
          />
        </View>
      </SwipeGesture>

      <View style={{ flex: 1 }}>
        {currentIndex != slides.length ? (
          <NextButton scrollTo={scrollTo} />
        ) : (
          <TouchableOpacity style={styles.getStarted} activeOpacity={1}>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
              Get Started
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStarted: {
    marginStart: 30,
    marginEnd: 30,
    backgroundColor: "red",
    height: 61,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#F43030",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  swipesGestureContainer: {
    height: "100%",
    width: "100%",
  },
});
