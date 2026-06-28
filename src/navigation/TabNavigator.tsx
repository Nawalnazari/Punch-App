import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Paths } from '@/navigation/paths';

import { Example, Home } from '@/screens';
import Dashboard from '@/screens/Dashboard/Dashboard';

type TabParamList = {
  dashboard: undefined;
  example: undefined;
  home: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

/**
 * Tab Navigator Configuration
 * Defines the bottom tab navigation structure with custom styling
 */
function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        component={Dashboard}
        name="dashboard"
        options={{
          title: 'Dashboard',
        }}
      />
      <Tab.Screen
        component={Home}
        name={Paths.Home}
        options={{
          // tabBarIcon: ({ color, size }) => (
          //   <Icon source="home" size={size} color={color} />
          // ),
          title: 'Attendance',
        }}
      />
      <Tab.Screen
        component={Example}
        name={Paths.Example}
        options={{
          // tabBarIcon: ({ color, size }) => (
          //   <Icon source="car" size={size} color={color} />
          // ),
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
