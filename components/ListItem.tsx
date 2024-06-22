import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LatLng } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CoordinatePoint} from "../Interfaces/CoordinateCollection";

export default function ListItem(props: { coordinatePoint: CoordinatePoint, deleteListItem: any, setStateCurrentMarker: any }) {

  let keyICanUse: number = parseInt(props.coordinatePoint.keyId.toString());
  let myLat = props.coordinatePoint.latAndLng.latitude;
  let myLong = props.coordinatePoint.latAndLng.longitude;
  let wholeCoordinatePoint = props.coordinatePoint;
  const setStatesCurrentMarker = props.setStateCurrentMarker;

  const logError = () => {
    console.log(wholeCoordinatePoint);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{props.setStateCurrentMarker({latitude: myLat, longitude: myLong});logError}}>
        <Text style={styles.text}>Lat: {myLat.toFixed(6)}, Long: {myLong.toFixed(6)}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.deleteListItem(keyICanUse)} style={styles.touchable}>
        <Icon name={'close'} color='blue' size={15}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderStyle: 'solid',
  },
  text:{
    display:'flex',
    borderStyle: 'solid',
  },
  touchable:{
    width: 50
  }
});
