import {
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";
import { useState } from "react";
import { BookingEntity } from "../entities/BookingEntity";
import axios from "axios";

export default function EditScreen(props: any) {
  const booking: BookingEntity = props.route.params.booking;

  const [firstName, setFirstName] = useState(booking.firstName);
  const [lastName, setLastName] = useState(booking.lastName);
  const [phone, setPhone] = useState(booking.phone);
  const [email, setEmail] = useState(booking.email);
  const [comment, setComment] = useState(booking.comment);

  function editBooking() {
    const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2";

    const putBooking = async () => {
      axios
        .put("http://" + local + ":3000/bookings/" + booking.bookingID, {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
          comment: comment,
        }).then(
        )
    };
    putBooking();
  }

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
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
        <Pressable style={styles.pressable} onPress={editBooking}>
          <Text style={styles.buttonText}>Save changes</Text>
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
