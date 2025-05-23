import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import User from '../pages/user';
import CustomTabBar from '../components/CustomTabBar';
import { AuthProviderList } from '../context/authContext-list';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <AuthProviderList>
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
        }}
        tabBar={pros=><CustomTabBar {...pros}/>}
        initialRouteName='List'
      >
        <Tab.Screen
          name="List" 
          component={List}
        />
        <Tab.Screen
          name="User"
          component={User}
        />
      </Tab.Navigator>
    </AuthProviderList>
    
  );
}