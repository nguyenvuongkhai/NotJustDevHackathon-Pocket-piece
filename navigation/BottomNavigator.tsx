import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from './type';
import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'
import  { HomeTabs, TicketTabs } from './TopTabNavigator';
const Tab = createBottomTabNavigator<RootStackParamList>();
export default function BottomNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = 'calendar';
          } else if (route.name === 'ticket') {
            iconName = 'tago';
          } else if (route.name === 'profile') {
            iconName = 'user';
          }

          return <AntDesign name={iconName} size={size} color={color} />
        },
        title: '',

      })}>
        <Tab.Screen name='home' component={HomeTabs} options={{
          title: 'Pocket piece', tabBarLabel:'',
           headerRight: () => (<Pressable style={{marginRight:'auto'}}>
            <AntDesign name='search1' size={25} />
          </Pressable>)
        }} />
        <Tab.Screen name='ticket' component={TicketTabs} options={{
          title:'My ticket', tabBarLabel:"",
        }} />
        <Tab.Screen name='profile' component={ProfileScreen} options={{
          title:'Profile',tabBarLabel:'',
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})