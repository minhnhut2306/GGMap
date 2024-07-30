import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 10.8508,
          longitude: 106.6297,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <View style={styles.containerbutton}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../image/arrowleft.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerbin}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../image/bin.png')} />
          <View style={{marginStart: 18}}>
            <Text style={styles.textlabel}>Các thùng rác QR ở quanh bạn</Text>
            <Text style={styles.text}>
              Hãy đến quét mã, phân loại và tích điểm
            </Text>
          </View>
          <Image
            style={{marginStart: 10}}
            source={require('../image/location.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 705,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerbin: {
    height: 85,
    width: '100%',
    backgroundColor: 'rgba(213, 214, 216, 0.8)',
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textlabel: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000',
    marginBottom: 5,
    fontWeight: '600',
  },
  text: {
    fontSize: 10,
    fontWeight: 'normal',
    color: '#000',
    marginBottom: 5,
    fontWeight: '400',
  },
  containerbutton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 100,
    padding: 5,
    borderRadius: 10,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
