import React, {JSX} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Local Imports
import {dimension, fonts} from '@styles';

function NearbyRestaurant(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Restaurant</Text>
      <Text style={styles.description}>There's no restaurant nearby.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: dimension.lg,
  },
  title: {
    fontFamily: fonts.bold,
    color: 'black',
    padding: dimension.lg,
    marginLeft: -dimension.lg,
  },
  description: {
    fontFamily: fonts.regular,
  },
});

export default NearbyRestaurant;
