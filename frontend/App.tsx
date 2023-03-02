import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import StackNav from "./nav/StackNav";

export default function App() {
  return (
      <NavigationContainer>
        <StackNav></StackNav>
      </NavigationContainer>
  );
}
