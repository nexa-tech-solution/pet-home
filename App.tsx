// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/header';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FDEED9',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },

  mainArea: {
    flex: 1,
    marginTop: 12,
  },
});

export default App;
