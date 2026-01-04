import { StyleSheet } from 'react-native';
import React from 'react';

import { WebView } from 'react-native-webview';

const HomeScreen = () => {
  return (
    <WebView
      source={{ uri: 'https://pet-simulator-sigma.vercel.app/' }}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
