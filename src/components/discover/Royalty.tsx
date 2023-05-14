import React, {JSX} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Local Imports
import {dimension, fonts} from '@styles';

function Royalty(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.royalty}>
        <View style={styles.box} />
        <View style={styles.wrapContent}>
          <Text style={styles.textRoyalty}>
            Sssst ada yang bakal kebuka kalau kamu transaksi di Surplus
          </Text>
          <View style={styles.placeholderProgress}>
            <View />
          </View>
          <Text style={styles.textRoyalty}>
            Lakukan 1x transaksi untuk membuka badges
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: dimension.lg,
    marginTop: dimension.lg,
  },
  royalty: {
    height: 100,
    borderRadius: dimension.s,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: dimension.lg,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  box: {
    height: '100%',
    width: 70,
    backgroundColor: 'lightgray',
    borderRadius: dimension.xs,
  },
  wrapContent: {
    marginLeft: dimension.lg,
  },
  textRoyalty: {
    fontFamily: fonts.regular,
    color: 'black',
    fontSize: dimension.s,
    width: '75%',
  },
  placeholderProgress: {
    height: 4,
    width: '75%',
    backgroundColor: 'lightgray',
    borderRadius: dimension.xs,
    marginVertical: dimension.xs,
  },
});

export default Royalty;
