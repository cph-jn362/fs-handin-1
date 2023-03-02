import {
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Pressable,
  Platform
} from "react-native";
import React from "react";
import { useState } from "react";
import axios from "axios";

export default function AddScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  

  function addBooking() {
    
    const local = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'

    const postBooking = async() => {
      axios
        .post('http://'+local+':3000/bookings', { 
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
          comment: comment,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    postBooking();
  }

  return (
      <ScrollView>
      <SafeAreaView style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
      <Text style={{ marginBottom: 30, fontSize: 30 }}>Add Booking</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Write a comment"
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <Pressable style={styles.pressable} onPress={addBooking}>
          <Text style={styles.buttonText}>Add Booking</Text>
        </Pressable>
      </SafeAreaView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 40,
    borderRadius: 4,
    width: 250,
  },
  pressable: {
    padding: 15,
    backgroundColor: "#ccc",
  },
  buttonText: {
    textAlign: "center",
  },
});
