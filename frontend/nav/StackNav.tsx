import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditScreen from "../screens/EditScreen";
import ListScreen from "../screens/ListScreen";
import { ParamList } from "../types/ParamList";
import TabNav from "./TabNav";

const Stack = createNativeStackNavigator<ParamList>();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="List" component={ListScreen}/>
      <Stack.Screen name="Edit" component={EditScreen}/>
    </Stack.Navigator>
  );
};

export default StackNav;
