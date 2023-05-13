import React, {JSX, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Local Imports
import {images} from '@assets/images';
import {lsKey, validateEmail, validatePassword, wait} from '@utils';
import {setItem} from '@utils/asyncStorage';
import {color, dimension, fonts} from '@styles';
import {Button, Input} from '@components';

function Login({navigation}: any): JSX.Element {
  //  user
  let currentUser = {
    name: 'mail',
    email: 'mail@mail.com',
    password: 'admin12345',
  };

  //   States
  //   Form
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //   Error
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorEmailMsg, setErrorEmailMsg] = useState<string>('');

  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [errorPasswordMsg, setPasswordMsg] = useState<string>('');

  //   Loading
  const [loading, setLoading] = useState<boolean>(false);

  //   Functions
  const onSubmit = () => {
    setLoading(true);
    wait(1000).then(() => {
      if (email != currentUser.email && password != currentUser.password) {
        // TODO: throw error
        setLoading(false);
        alert('Email or password is wrong!');
      } else {
        // TODO: save current user into async storage and navigate to home
        setItem(lsKey.user, JSON.stringify(currentUser));
        setLoading(false);
        navigation.replace('Home');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image source={images.login} style={styles.login_bg} />
      <View style={styles.wrapContent}>
        <View style={{paddingTop: dimension.md}}>
          <Input
            label="Email"
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={text => {
              setEmail(text);
              if (validateEmail(text)) {
                setErrorEmail(false);
              } else {
                setErrorEmail(true);
                setErrorEmailMsg('Please input a valid email');
              }
            }}
            isError={errorEmail}
            errorMessage={errorEmailMsg}
          />
          <View style={{marginVertical: dimension.s}} />
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChangeText={text => {
              setPassword(text);
              if (validatePassword(text)) {
                setErrorPassword(false);
              } else {
                setErrorPassword(true);
                setPasswordMsg('Password minimal length is 6');
              }
            }}
            isError={errorPassword}
            errorMessage={errorPasswordMsg}
          />
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Button
            title="Login"
            buttonStyle={{
              borderRadius: dimension.xs,
            }}
            disabled={email.length == 0 && password.length == 0}
            isLoading={loading}
            onPress={onSubmit}
          />
          <Text style={styles.register}>
            Doesnt Have an Account?{' '}
            <Text style={{color: color.primary}}>Register</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  login_bg: {
    height: 300,
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
    width: '100%',
  },
  forgotPassword: {
    fontFamily: fonts.medium,
    color: 'lightgray',
    alignSelf: 'flex-end',
    marginTop: dimension.s,
    marginBottom: dimension.xl,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  register: {
    fontFamily: fonts.medium,
    color: 'lightgray',
    textAlign: 'center',
    marginTop: dimension.md,
  },
});

export default Login;
