import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from 'react-native-maps';

const MapScreen = ({location}) => {

    return (
        <View style={styles.container}>
            <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker title="I am here" coordinate={location} description="Hello" />
        )}
      </MapView>
        </View>
    )
    };

    const styles = StyleSheet.create ({
        container: {
            flex: 1,
            marginTop: 50,
            // justifyContent: 'center',           
            // alignItems: 'center'

        },
        map: {
            width: '100%',
            height: '100%',
            
          },
    })

export default MapScreen;