import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SpecialScreen from '../screens/SpecialScreen';
import EventScreen from '../screens/EventScreen';
import { RootStackParamList } from './type';
import TicketTabScreen from '../screens/TicketTabScreen';
const Tab = createMaterialTopTabNavigator<RootStackParamList>();
const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='special' component={SpecialScreen} />
            <Tab.Screen name='all' component={EventScreen} />
        </Tab.Navigator>
    )
}
const TicketTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='event' component={TicketTabScreen} />
            <Tab.Screen name='voucher' component={EventScreen} />
        </Tab.Navigator>
    )
}
export {HomeTabs, TicketTabs};

const styles = StyleSheet.create({})