import Animated from 'react-native-reanimated';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Menu from '../assets/menu.svg';

type ScreenPropsType = {
  drawerAnimation: Animated.SharedValue<number>;
  style: {
    transform: (
      | {
          rotateZ: string;
          translateX?: undefined;
          translateY?: undefined;
        }
      | {
          translateX: number;
          rotateZ?: undefined;
          translateY?: undefined;
        }
      | {
          translateY: number;
          rotateZ?: undefined;
          translateX?: undefined;
        }
    )[];
    borderRadius: number;
  };
};

export default function Screen({drawerAnimation, style}: ScreenPropsType) {
  return (
    <Animated.View style={[styles.mainContainer, style]}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            drawerAnimation.value = +!drawerAnimation.value;
          }}>
          <Menu width={30} height={33} />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Start</Text>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  safeAreaContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 24,
  },
  btn: {
    marginHorizontal: 36,
  },
  textStyle: {
    color: '#9F9FA0',
    fontSize: 24,
    letterSpacing: 5,
    lineHeight: 33,
    textTransform: 'uppercase',
  },
});
