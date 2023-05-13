import React, {JSX, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';

// Local Imports
import {Header, Input, WalletVoucher} from '@components';
import {color, dimension, fonts} from '@styles';
import {getItem} from '@utils/asyncStorage';
import {lsKey} from '@utils';

function Discover(): JSX.Element {
  const [user, setUser] = useState<Record<string, any>>({});

  useEffect(() => {
    getItem(lsKey.user).then(val => {
      if (val) {
        setUser(JSON.parse(val));
      }
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.wrapHeader}>
        <Header />
        <Text style={styles.greeting}>Hi, {user?.name}!</Text>
        <View style={styles.wrapInput}>
          <Input
            type="search"
            customContainerInputStyle={styles.customContainerInputStyle}
            placeholder="Mau selamatkan makanan apa hari ini?"
            editable={false}
          />
        </View>
      </View>
      {/* Header */}

      {/* Swiper */}
      <View style={styles.wrapSwiper}>
        <Swiper autoplay activeDotColor={color.primary}>
          <View style={styles.swiperContent} />
          <View
            style={[styles.swiperContent, {backgroundColor: 'lightgreen'}]}
          />
          <View
            style={[styles.swiperContent, {backgroundColor: 'lightblue'}]}
          />
        </Swiper>
      </View>
      {/* Swiper */}

      {/* Wallet Voucher */}
      <View style={styles.wrapWalletVoucher}>
        <WalletVoucher saldoAmount={0} availableVoucher={3} />
      </View>
      {/* Wallet Voucher */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapHeader: {
    height: 130,
    width: '100%',
    backgroundColor: color.primary,
    borderBottomLeftRadius: dimension.xxl,
    borderBottomRightRadius: dimension.xxl,
    marginBottom: dimension.xxl,
  },
  greeting: {
    fontFamily: fonts.medium,
    color: 'white',
    fontSize: dimension.lg,
    marginLeft: dimension.xl,
  },
  wrapInput: {
    paddingHorizontal: dimension.xl,
    top: dimension.xl,
  },
  customContainerInputStyle: {
    backgroundColor: 'white',
  },
  wrapSwiper: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: dimension.xxl,
    paddingBottom: 0,
  },
  swiperContent: {
    height: 200,
    width: '100%',
    backgroundColor: 'tomato',
    borderRadius: dimension.md,
  },
  wrapWalletVoucher: {
    paddingHorizontal: dimension.lg,
  },
});

export default Discover;
