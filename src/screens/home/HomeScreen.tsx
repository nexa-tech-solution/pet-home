import { StyleSheet, View } from 'react-native';
import React from 'react';

import { WebView } from 'react-native-webview';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-3012411444875177/4594575809';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://pet-simulator-sigma.vercel.app' }}
        style={styles.container}
        originWhitelist={['*']}
        // javaScriptEnabled
        // domStorageEnabled
      />
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
