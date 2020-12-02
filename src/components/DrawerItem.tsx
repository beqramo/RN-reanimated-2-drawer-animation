import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type DrawerItemPropsType = {
  onPress: () => void;
  active: boolean;
  text: string;
};
const DrawerItem = ({onPress, active, text}: DrawerItemPropsType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, active ? styles.activeContainer : null]}>
      <Text style={[styles.titleText, active ? styles.activeText : null]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1F1B33',
    paddingLeft: 30,
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  activeContainer: {
    backgroundColor: '#FC807433',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 27,
    alignSelf: 'flex-start',
  },
  activeText: {
    color: '#FC8074',
  },
});
