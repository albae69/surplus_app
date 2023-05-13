import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, ViewStyle} from 'react-native';

// Local Imports
import {color, dimension, fonts} from '@styles';

interface Props {
  label: string;
  type: 'default' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  isError: boolean;
  errorMessage: string;
  customInputStyle?: ViewStyle;
}

function Input(props: Props) {
  const {
    label,
    type,
    placeholder,
    value,
    onChangeText,
    isError,
    errorMessage,
    customInputStyle,
  } = props;

  // States
  const [focus, setFocused] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);

  if (type === 'email') {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          style={[
            styles.input,
            focus && {borderColor: color.primary},
            isError && {borderColor: 'red'},
            value.length > 0 && !isError && {borderColor: color.primary},
            customInputStyle,
          ]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType="email-address"
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
        {isError && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      </View>
    );
  }

  if (type === 'password') {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View
          style={[
            styles.input,
            focus && {borderColor: color.primary},
            isError && {borderColor: 'red'},
            value.length > 0 && !isError && {borderColor: color.primary},
            customInputStyle,
          ]}>
          <View style={styles.row}>
            <TextInput
              value={value}
              placeholder={placeholder}
              onChangeText={onChangeText}
              secureTextEntry={show}
              onFocus={() => {
                setFocused(true);
              }}
              onBlur={() => {
                setFocused(false);
              }}
              style={{flex: 1}}
            />
            <Text onPress={() => setShow(!show)} style={styles.show}>
              {show ? 'show' : 'hide'}
            </Text>
          </View>
        </View>
        {isError && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.bold,
    color: 'black',
    marginBottom: dimension.s,
  },
  show: {
    fontFamily: fonts.medium,
    color: 'black',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: dimension.md,
    paddingHorizontal: dimension.md,
  },
  errorMessage: {
    fontSize: dimension.s,
    fontFamily: fonts.light,
    color: 'red',
    marginTop: dimension.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Input;
