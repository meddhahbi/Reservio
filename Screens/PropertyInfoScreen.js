import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../Component/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../Component/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  //console.log(route.params.adults);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
        >
          {route.params.photos.slice(0, 5).map((photo, index) => (
            <View style={{ margin: 6 }} key={index}>
              <Image
                style={{
                  width: 180,
                  height: pixelNormalize(100),
                  borderRadius: 4,
                }}
                source={{ uri: photo.image }}
              />
            </View>
          ))}

          <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginLeft: 20 }}>
              Show More
            </Text>
          </Pressable>
        </Pressable>

        <View
          style={{
            marginHorizontal: 12,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.rating}</Text>
              <View
                style={{
                  backgroundColor: "#003580",
                  padding: 4,
                  borderRadius: 5,
                  width: 100,
                  paddingVertical: 3,
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 14 }}
                >
                  Genius Level
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#17B169",
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>
              Travel sustainable
            </Text>
          </View>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Amenities />

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Pressable style={{backgroundColor:"#6CB4EE", position:"absolute",bottom:20,padding:15,width:"95%", marginHorizontal:10}}>
          <Text style={{textAlign:"center",color:"white", fontWeight:"bold", fontSize:17}}>Select Availibity</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
