import React, {JSX} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';

//Local Imports
import {color, fonts} from '@styles';

interface Props {
  title: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  disabled?: boolean;
  isLoading?: boolean;
}

function Button(props: Props): JSX.Element {
  const {
    title,
    onPress,
    type = 'primary',
    buttonStyle,
    titleStyle,
    disabled,
    isLoading,
  } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.btn,
        type === 'secondary' && {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: color.primary,
        },
        disabled && {backgroundColor: 'lightgray'},
        buttonStyle,
      ]}>
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text
          style={[
            styles.titleStyle,
            type === 'secondary' && {
              color: color.primary,
            },
            titleStyle,
          ]}>
          {title}
        </Text>
      )}
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
