import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import styles from './styles';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';

export default function Tracking() {
  const mapRef = React.useRef()
  const markerRef = React.useRef()
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tracking</Text>
        <View style={styles.map}>
        <MapView
                    ref={mapRef}
                    style={StyleSheet.absoluteFill}
                    
                >

                    

                    

                    
                </MapView>
        </View>
    </View>
  );
}