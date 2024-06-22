import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from './ListItem';
import { LatLng } from 'react-native-maps';
import { CoordinatePoint} from "../Interfaces/CoordinateCollection";

export default function List(props: {newCoordinate:LatLng, setStateCurrentMarker: any}) {

    let newCoordinate: LatLng = props.newCoordinate;

    const [listOfCoordinates, updateCoordinates] = useState<CoordinatePoint[]>([]);
    const [index, setIndex] = useState(0);
    const setStateCurrentMarker = props.setStateCurrentMarker;

    useEffect(() =>{
      if(newCoordinate.latitude == 0 && newCoordinate.longitude == 0)
        return;
      let newCoordinatePoint : CoordinatePoint = {latAndLng: newCoordinate, keyId: index}
        listOfCoordinates.push(newCoordinatePoint);
        setIndex(index+1);
        updateCoordinates(listOfCoordinates);
        console.log(listOfCoordinates);
    }, [newCoordinate]);


    const deleteListItem = (key:number) => {
        console.log(key);
       listOfCoordinates.splice(key,1);
       let newCoordinates = listOfCoordinates;
            setNewKeys(key, newCoordinates);
    };

    const setNewKeys = (key:number, newCoordinateList: CoordinatePoint[]) => {
        let resetNum = 0;
        let newListOfCoordinates = newCoordinateList.map((point) => {
            point.keyId = resetNum;
            resetNum += 1;
            return point;
        });
        setIndex(resetNum);
        updateCoordinates(newListOfCoordinates);
    }

    let arr = [];

    for(let key in listOfCoordinates){

        arr.push(
            <ListItem coordinatePoint={listOfCoordinates[key]} key={key} deleteListItem={deleteListItem} setStateCurrentMarker={setStateCurrentMarker}></ListItem>
        )
    }

    return (
        <View style={styles.container}>
            {arr}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderStyle: 'dotted',
        height: '100%'
    },
    map: {
        width: '100%',
        height: '100%',
    },
});