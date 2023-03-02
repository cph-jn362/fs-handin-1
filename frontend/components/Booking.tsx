import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { BookingEntity } from "../entities/BookingEntity";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamList } from "../types/ParamList";

type bookingScreenProp = StackNavigationProp<ParamList, "Edit">;

export default function Booking({ booking }: { booking: BookingEntity }) {
  const navigation = useNavigation<bookingScreenProp>();
  return (
    <TouchableOpacity 
    style={styles.bookingItem}
    onPress={() => navigation.navigate("Edit", {booking})}>
        <Text style={styles.bookingItemName}>{booking.firstName} {booking.lastName}</Text>
        <Text>{booking.phone}</Text>
        <Text>{booking.email}</Text>
        <Text style={styles.bookingItemComment}>{booking.comment}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bookingItem: {
    padding: 10,
    backgroundColor: '#ccc',
    marginBottom: 15,
    borderRadius: 4,
    width: 300,
  },
  bookingItemName: {
    fontSize: 20,
    marginBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  bookingItemComment: {
    marginTop: 10,
    padding: 5,
    backgroundColor: '#fff'
  } 
});


