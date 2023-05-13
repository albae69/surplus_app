import {color, dimension, fonts} from '@styles';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

function Button({
  title,
  onPress,
  type = 'primary',
  buttonStyle,
  titleStyle,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.btn,
        buttonStyle,
        type === 'secondary' && {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: color.primary,
        },
      ]}>
      <Text
        style={[
          styles.titleStyle,
          titleStyle,
          type === 'secondary' && {
            color: color.primary,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
  },
  titleStyle: {
    color: 'white',
    fontFamily: fonts.medium,
  },
});

export default Button;
