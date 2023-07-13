import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth,db } from "../FirebaseConfig";
import {setDoc,doc} from "firebase/firestore"

const RegisterScreen = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const navigation = useNavigation();


  const register = () =>{
    if(email === "" || password === "" || phone === ""){
      Alert.alert(
        "Invalid Details",
        "Please enter all credentials",
        [
          {
            text:"Cancel",
            onPress:()=>console.log("Cancel Pressed"),
            style:"cancel"
          },
          {
            text:"Ok",
            onPress:()=>console.log("Ok Pressed")
          },
        ],
          {
            cancelable:false
          }

       
      );
    }


    createUserWithEmailAndPassword(auth,email,password).then((useCredentials)=>{
      const user = useCredentials._tokenResponse.email;
      const uid = auth.currentUser.uid;


      setDoc(doc(db,"users",`${uid}`),{
        email:user,
        phone:phone,
      })

      console.log(email,uid);
      navigation.navigate("Main");

    })

  }


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >

<KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Register
          </Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Create new account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email..."
              placeholderTextColor={"black"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter your password..."
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>




          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Phone
            </Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Enter your phone..."
              placeholderTextColor={"black"}
              style={{
                fontSize: phone ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>



        </View>

        <Pressable 
        onPress={register}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </Pressable>


            <Pressable onPress={()=>navigation.navigate("Login")} style={{marginTop:20}}>

              <Text style={{textAlign:"center", color:"gray",fontSize:17}}>Already have account ? Sign IN</Text>

            </Pressable>



      </KeyboardAvoidingView>








    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
