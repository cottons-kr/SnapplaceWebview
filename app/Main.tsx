import * as React from 'react';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';

async function requestPermissions() {
  const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
  const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
  const { status: audioStatus } = await Camera.requestMicrophonePermissionsAsync();
  const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();

  if (locationStatus !== 'granted') {
    alert('위치 권한이 필요합니다');
  }
  if (cameraStatus !== 'granted') {
    alert('카메라 권한이 필요합니다');
  }
  if (audioStatus !== 'granted') {
    alert('마이크 권한이 필요합니다');
  }
  if (mediaStatus !== 'granted') {
    alert('저장소 접근 권한이 필요합니다');
  }
}

export default function App() {
  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#272727' }}>
      <WebView
        style={{ flex: 1, width: '100%', height: '100%' }}
        source={{ uri: 'https://e8coss0owsowc0kc40ow8g0c.apne2a.algorix.cloud/' }}
        allowFileAccess={true}
        scalesPageToFit={true}
        originWhitelist={["*"]}
        allowsBackForwardNavigationGestures={true}
        bounces={false}
        geolocationEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
}
