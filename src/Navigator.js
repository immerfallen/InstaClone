import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const LoginOrProfileRouter = ()=> 
<Stack.Navigator initialRouteName='Login'  >
    <Stack.Screen  name='Profile' component={Profile}/>
    <Stack.Screen  name='Auth' component={Login} />
    <Stack.Screen  name='Register' component={Register} />
</Stack.Navigator>
  

function MyTabs(){
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                  let iconName;
      
                  if (route.name === 'Feed') {
                    iconName = 'home'
                  } else if (route.name === 'Camera') {
                    iconName = 'camera';
                  } else if (route.name ==='Profile'){
                      iconName = 'user'
                  }      
                  
                  return <Icon name={iconName} size={30} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                headerShown: false,
              })}
            >
                <Tabs.Screen name='Feed' component={Feed}/>
                <Tabs.Screen name='Camera' component={AddPhoto}/>
                <Tabs.Screen name='Profile' component={LoginOrProfileRouter}/>
            </Tabs.Navigator>
        </NavigationContainer>
        </GestureHandlerRootView>
    )
}

export default MyTabs

