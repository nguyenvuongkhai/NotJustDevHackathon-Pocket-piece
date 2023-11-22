import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Badge = ({content}) => {
  return (
    <View style={styles.container}>
        <Text>{content}</Text>
    </View>
  )
}

export default Badge

const styles = StyleSheet.create({
    container:{
        padding:5,
        borderRadius:5,
        borderWidth:1,
        backgroundColor:'#FFF',
        borderColor:'#EEEEEE'
    }
})