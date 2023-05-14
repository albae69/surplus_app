import React, {JSX, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Linking} from 'react-native';

// Third Party
import Swiper from 'react-native-swiper';

// Local Imports
import {
  Button,
  Category,
  Header,
  Input,
  NearbyRestaurant,
  Royalty,
  WalletVoucher,
} from '@components';
import {color, dimension, fonts} from '@styles';
import {getItem} from '@utils/asyncStorage';
import {lsKey} from '@utils';
import {images} from '@assets/images';

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

      {/* Category */}
      <View style={styles.wrapCategory}>
        <Category />
      </View>
      {/* Category */}

      {/* Royalty */}
      <Royalty />
      {/* Royalty */}

      {/* Register Your City */}
      <View style={styles.wrapRegisterYourCity}>
        <Image source={images.login} style={styles.login_bg} />
        <View style={styles.wrapTextRegisterYourCity}>
          <Text style={styles.titleRegisterYourCity}>
            Mau menyelamatkan banyak makanan di kota kamu?
          </Text>
          <Text style={styles.descriptRegisterYourCity}>
            Ayo segera daftarkan kotamu di aplikasi Surplus agar kita bisa
            beroperasi langsung dan kamu bisa menjadi bagian dari Surplus Hero!
          </Text>
        </View>
        <Button
          title="Daftarkan Kotamu!"
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/forms/d/e/1FAIpQLSfdEc9_FqAuaGTF9SOIeRJ6lGPns7aBIjkBBPMyoPcgIdIfqw/viewform',
            )
          }
        />
      </View>
      {/* Register Your City */}

      {/* Nearby Restaurant */}
      <NearbyRestaurant />
      {/* Nearby Restaurant */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  wrapCategory: {
    marginTop: dimension.lg,
  },
  login_bg: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  wrapRegisterYourCity: {
    paddingHorizontal: dimension.lg,
  },
  wrapTextRegisterYourCity: {
    marginTop: dimension.xl,
  },
  titleRegisterYourCity: {
    fontFamily: fonts.bold,
    color: 'black',
    fontSize: dimension.md,
    textAlign: 'center',
    marginBottom: dimension.s,
  },
  descriptRegisterYourCity: {
    fontFamily: fonts.semibold,
    fontSize: dimension.s,
    textAlign: 'center',
    marginBottom: dimension.xl,
  },
});

export default Discover;
