import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../components/Card'

const SpecialScreen = () => {
    const data = [1,2,3,4,5,6]
  return (
    <SafeAreaView style={styles.container}>
        <FlatList data={data} renderItem={(item)=> <Card/>}/>
    </SafeAreaView>
  )
}

export default SpecialScreen

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        backgroundColor:'#fff',
        flex:1,
    }
})