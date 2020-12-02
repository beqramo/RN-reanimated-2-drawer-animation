import DrawerItem from 'components/DrawerItem';
import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';

const list = [
  {id: 23, text: 'Start'},
  {id: 213, text: 'Your Cart'},
  {id: 2332, text: 'Favourites'},
  {id: 2342, text: 'Your Orders'},
];

type DrawerContentPropsType = {
  onPress: () => void;
  style: {
    transform: {
      translateY: number;
    }[];
    borderTopLeftRadius: number;
  };
};

export default function DrawerContent({
  style,
  onPress,
}: DrawerContentPropsType) {
  return (
    <Animated.View style={[styles.mainContainer, style]}>
      <Text style={styles.titleText}>Beka</Text>
      {list.map(({id, text}) => (
        <DrawerItem key={id} active={id === 23} onPress={onPress} text={text} />
      ))}
      <View style={styles.line} />
      <DrawerItem active={false} onPress={() => {}} text={'Sign Out'} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#1F1B33',
    paddingRight: '50%',
    paddingTop: '25%',
    paddingLeft: 24,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 38,
    alignSelf: 'center',
    marginBottom: '30%',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#84818E',
    marginTop: '30%',
    marginBottom: '30%',
  },
});
