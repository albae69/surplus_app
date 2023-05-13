import React, {useEffect, JSX} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Local Imports
import {images} from '@assets/images';
import {color, dimension, fonts} from '@styles';
import {clear, getItem} from '@utils/asyncStorage';
import {lsKey, wait} from '@utils';

interface Props {
  navigation: any;
}

function Splash({navigation}: Props): JSX.Element {
  useEffect(() => {
    // TODO: check localstorage if any user have logged in
    getItem(lsKey.user).then(val => {
      if (val) {
        // if user logged in, navigate to home
        navigation.replace('Home');
      } else {
        getItem(lsKey.isBoarding).then(val => {
          // check if user have seen the onBoarding screen
          if (val) {
            navigation.replace('Login');
          } else {
            navigation.replace('OnBoarding');
          }
        });
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={images.logo} />
      <Text style={styles.text}>Save food. Save budget.</Text>
      <Text style={styles.text}>Save planet.</Text>
      <Image source={images.certified} style={styles.certified} />
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: color.primary,
    fontFamily: fonts.semibold,
    fontSize: dimension.md,
  },
  certified: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});
