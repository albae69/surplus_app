
# Surplus App

Ikuti langkah-langkah yang ada pada dokumentasi berikut.
[React Native Environment Setup](https://reactnative.dev/docs/environment-setup)
Untuk menjalankan Surplus App ini dibutuhkan software sebagai berikut :

- Node
- Android Studio
- XCode (latest version)
- git

### Instalasi

clone repository ini

```
$ git clone https://github.com/albae69/surplus_app.git
```

lalu masuk ke folder projek

```
cd surplus_app
```

Setelah clone source code ini jalankan command berikut untuk instalasi library yang digunakan di Surplus App

```
$ npm install
```

jika menggunakan yarn

```
$ yarn install
```

Jika telah selesai mendownload library, untuk menjalankan aplikasi sebagai berikut ini :

### Android

```
$ npx react-native run-android
```

jika menggunakan yarn

```
$ yarn android
```

### IOS

untuk menjalankan ios, pastikan anda mempunyai macos dengan versi terbaru dan telah menginstall xcode versi terbaru, agar dapat melakukan upload ke testflight / appstore.

lakukan penginstalan library

```
$ yarn install && cd ios && pod install
```
setelah itu jalankan menggunakan command
```
$ npx react-native run-ios
```
atau
```
$ yarn ios
```

Tested Device:
- Android Emulator - Pixel Android 10
- iOS Simulator iPhone XR 16.2
