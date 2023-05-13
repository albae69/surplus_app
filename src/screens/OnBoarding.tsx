import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Local Imports
import {images} from '@assets/images';
import {dimension, fonts} from '@styles';
import {Button} from '@components';

function OnBoarding(): JSX.Element {
  return (
    <View style={styles.container}>
      <Button
        title="Lewati"
        onPress={() => {}}
        type="secondary"
        buttonStyle={styles.skipBtn}
      />
      <Image source={images.onboarding} style={styles.onboarding} />
      <View style={styles.wrapContent}>
        <Text style={styles.title}>Selamat Datang di Surplus</Text>
        <View style={styles.wrapDescription}>
          <Text style={styles.description}>
            Selamatkan makanan berlebih di aplikasi Surplus{' '}
          </Text>
          <Text style={styles.description}>agar tidak terbuang sia-sia</Text>
        </View>
        <View style={styles.wrapBtn}>
          <Button title="Daftar" buttonStyle={styles.customBtn} />
          <Button
            title="Sudah punya akun? Masuk"
            type="secondary"
            buttonStyle={styles.customBtn}
          />
        </View>
        <Text style={styles.textConfirmation}>
          Dengan daftar atau masuk, Anda menerima{' '}
          <Text style={{color: 'orange'}}>Syarat dan Ketentuan</Text> serta{' '}
          <Text style={{color: 'orange'}}> Kebijakan Privasi</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  onboarding: {
    height: '50%',
    width: '100%',
    resizeMode: 'cover',
  },
  wrapContent: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 1,
    borderColor: 'lightgray',
    flex: 1,
    padding: dimension.lg,
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    color: 'black',
    fontSize: dimension.xl,
    marginTop: dimension.md,
  },
  wrapDescription: {
    marginBottom: dimension.lg,
  },
  description: {
    fontFamily: fonts.medium,
    color: 'black',
    textAlign: 'center',
    fontSize: dimension.s,
  },
  skipBtn: {
    width: 65,
    height: 25,
    borderRadius: 100,
    alignSelf: 'flex-end',
    marginTop: dimension.md,
    marginRight: dimension.md,
  },
  wrapBtn: {width: '100%'},
  customBtn: {
    marginBottom: dimension.lg,
    height: 45,
    borderRadius: 45 / 2,
  },
  textConfirmation: {
    fontFamily: fonts.regular,
    textAlign: 'center',
    fontSize: dimension.s,
  },
});

export default OnBoarding;
