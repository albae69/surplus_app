import React, {JSX} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Third Party
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Local Imports
import {dimension} from '@styles';

function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <View />
      <View style={styles.row}>
        <TouchableOpacity style={{marginRight: dimension.md}}>
          <MaterialIcons name="favorite-outline" color="white" size={26} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="cart-outline" color="white" size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: dimension.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alingItems: 'center',
  },
});

export default Header;
