import React from 'react';
import {SafeAreaView} from 'react-native';

// Local Imports
import Navigation from './src/navigation';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
}
