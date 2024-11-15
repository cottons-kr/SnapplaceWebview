import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://e8coss0owsowc0kc40ow8g0c.apne2a.algorix.cloud/' }}
      allowFileAccess={true}
      scalesPageToFit={true}
      originWhitelist={["*"]}
      decelerationRate="normal"
      allowsBackForwardNavigationGestures={true}
      bounces={false}
      geolocationEnabled={true}
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserAction={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
