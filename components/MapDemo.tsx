import React, {BaseSyntheticEvent, useCallback, useContext, useEffect, useState} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, LatLng } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import List from './List';
import {CoordinatePoint} from "../Interfaces/CoordinateCollection";

export default function Map() {

  const [newCoordinate, setNewCoordinate] = useState<LatLng>({latitude: 0, longitude: 0});
  const [currentMarker, setCurrentMarker] = useState<LatLng>({latitude: 29.75583610226629, longitude: 0-95.39435648656884});

    useEffect(() => {
        console.log(currentMarker.longitude.toString());

    }, [currentMarker]);

    const setCurrentMarkerFunction = (coordinatePoint: CoordinatePoint) => {

    };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 29.75583610226629,
          longitude: -95.39435648656884,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: currentMarker.latitude,
            longitude: currentMarker.longitude,
          }}
          onDragEnd={
            (e) => setNewCoordinate(e.nativeEvent.coordinate)
          }
        >
        </Marker>
      </MapView>
      </View>
      <View style={{flex: 1}}>
      <List newCoordinate={newCoordinate} setStateCurrentMarker={setCurrentMarker}></List>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
