import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Paths } from '@/navigation/paths';

import { Example, Home } from '@/screens';

const Tab = createBottomTabNavigator();

/**
 * Tab Navigator Configuration
 * Defines the bottom tab navigation structure with custom styling
 */
function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        component={Home}
        name={Paths.Home}
        options={{
          // tabBarIcon: ({ color, size }) => (
          //   <Icon source="home" size={size} color={color} />
          // ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        component={Example}
        name={Paths.Example}
        options={{
          // tabBarIcon: ({ color, size }) => (
          //   <Icon source="car" size={size} color={color} />
          // ),
          title: 'Example',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
