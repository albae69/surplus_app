import React, {JSX} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// Local Imports
import {Product as IProduct} from '@screens/DetailCategory';
import {dimension, fonts} from '@styles';

function Product(props: IProduct): JSX.Element {
  const {title, image, price} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.wrapText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>IDR {price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: dimension.s,
    padding: dimension.s,
    marginBottom: dimension.md,
    borderColor: 'lightgray',
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  wrapText: {
    marginLeft: dimension.s,
  },
  title: {
    fontFamily: fonts.bold,
    color: 'black',
    paddingRight: 60,
  },
  price: {
    fontFamily: fonts.regular,
  },
});

export default Product;
