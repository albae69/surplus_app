import {color, dimension, fonts} from '@styles';
import React, {JSX} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  availableVoucher: number;
  saldoAmount: number;
}

function WalletVoucher(props: Props): JSX.Element {
  const {availableVoucher, saldoAmount} = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.coin} />
        <View>
          <Text style={styles.text}>Rp{saldoAmount}</Text>
          <Text style={[styles.text, {color: 'gray'}]}>Surplus Pay</Text>
        </View>
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.row}>
        <View style={[styles.coin, {borderRadius: 0}]} />
        <Text style={styles.text}>{availableVoucher} Available Voucher</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    backgroundColor: 'lightgray',
    borderRadius: dimension.s,
    padding: dimension.md,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    height: '80%',
    width: 1,
    backgroundColor: 'grey',
  },
  text: {
    fontFamily: fonts.medium,
    color: color.primary,
    fontSize: dimension.s,
  },
  coin: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: 'orange',
    marginRight: dimension.lg,
  },
});

export default WalletVoucher;
