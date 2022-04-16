import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto';

const Tabs = createBottomTabNavigator();

function MyTabs(){
    return (
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
                <Tabs.Screen name='Profile' component={Feed}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default MyTabs

