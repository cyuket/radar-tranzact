import React from 'react';
import { Image, TouchableOpacity, StatusBar } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { images } from '../../assets';

export default ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <StatusBar barStyle={'light-content'} />
      <Image source={images.menu} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = {
  icon: {
    margin: 8,
    marginLeft: 16,
    width: 24,
    height: 24,
    tintColor: 'white',
    resizeMode: 'contain',
  },
};
