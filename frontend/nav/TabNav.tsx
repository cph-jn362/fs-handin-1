import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { ParamList } from '../types/ParamList'
import { Ionicons } from '@expo/vector-icons';
import ListScreen from '../screens/ListScreen'
import AddScreen from '../screens/AddScreen'

const Tab = createBottomTabNavigator<ParamList>();

type TabNavProps = NativeStackScreenProps<ParamList, "Tab">;

const TabNav: React.FC<TabNavProps> = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="List" component={ListScreen}/>
        <Tab.Screen name="Add" component={AddScreen}/>
    </Tab.Navigator>
  )
}

export default TabNav
