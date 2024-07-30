import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import MapScreen from './src/code/MapScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{flex: 1}}>
        <MapScreen />
      </View>
    </SafeAreaView>
  );
}
export default App;
