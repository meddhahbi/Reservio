import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const UserScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
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
  const route = useRoute();
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: "column", gap: 20 }}>
        <Text>First Name</Text>
        <TextInput
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
        />
      </View>

      <View style={{ flexDirection: "column", gap: 20, marginTop: 10 }}>
        <Text>Last Name</Text>
        <TextInput
          value={LastName}
          onChangeText={(text) => setLastName(text)}
          style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
        />
      </View>

      <View style={{ flexDirection: "column", gap: 20, marginTop: 10 }}>
        <Text>Email</Text>
        <TextInput
          value={Email}
          onChangeText={(text) => setEmail(text)}
          style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
        />
      </View>

      <View style={{ flexDirection: "column", gap: 20, marginTop: 10 }}>
        <Text>Phone</Text>
        <TextInput
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
        />
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 12,
              marginTop: 4,
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {" "}
              $ {route.params.newPrice * route.params.adults}
            </Text>
          </View>

          <Text>
            You Saved $ {route.params.oldPrice - route.params.newPrice}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
