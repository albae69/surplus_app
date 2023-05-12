import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {wait} from '@utils';
import {images} from '@assets/images';
import {color, dimension, fonts} from '@styles';

interface Props {
  navigation: any;
}

function Splash({navigation}: Props) {
  useEffect(() => {
    wait(1000).then(() => {});
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
