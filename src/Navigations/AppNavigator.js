import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import DepositScreen from '../Screens/DepositScreen';
import AppTabView from '../Components/AppTabView';
import ScholarFeedScreen from '../Screens/ScholarFeedScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator  
        initialRouteName="Chat"
        options={{
            activeBackgroundColor : "#ffd600",
            activeTintColor:"#eee",
            inactiveBackgroundColor : "#eee",
            inactiveTintColor: "black",
        }}
    >
    <Tab.Screen name="scholar" component={ScholarFeedScreen } />
    {/* <Tab.Screen name="Tab" component={AppTabView } /> */}
    <Tab.Screen name="Login" component={LoginScreen } />
    <Tab.Screen name="SignUp " component={SignUpScreen } />
    <Tab.Screen name="Deposit" component={DepositScreen } />
    </Tab.Navigator>
  )
}

export default AppNavigator