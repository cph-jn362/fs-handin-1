import {
  Text,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";
import axios from "axios";

export default function ListScreen() {
  const [bookings, setBookings] = useState([]);

  const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2";

  useEffect(() => {
    const fetchBookings = async () => {
      axios
        .get("http://" + local + ":3000/bookings")
        .then((response) => {
          setBookings(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchBookings();
  });

  return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
      <Text style={{ marginBottom: 30, fontSize: 30 }}>Booking List</Text>
        <FlatList
          data={bookings}
          renderItem={({ item }: { item: BookingEntity }) => (
            <Booking booking={item} />
          )}
          keyExtractor={(item) => "" + item.bookingID}
        />
      </SafeAreaView>
  );
}




