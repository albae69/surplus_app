import React, {JSX} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Order(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Order</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Order;
