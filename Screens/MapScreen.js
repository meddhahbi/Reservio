import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const route = useRoute();
  // console.log(route.params);
  const mapView = useRef(null);
  const coordinates = [];
  const details = route.params.searchResults.map((item) => item.properties?.map((prop) => {
    coordinates.push({
        latitude:Number(prop.latitude),
        longitude:Number(prop.longitude)
    })
}));


  useEffect(()=>{
    mapView.current.fitToCoordinates(coordinates,{
      edgePadding:{
        top:190,
        left:190,
        bottom:190,
        right:190,
      }
    })

  },[]);



  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={mapView}
        style={{ width: "100%", height: "100%" }}
      >
        {route.params.searchResults.map((item) =>
          item.propreties.map((property) => (
            <Marker
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  $ {property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
