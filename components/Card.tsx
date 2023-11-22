import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Badge from './Badge'

const Card = () => {
  return (
    <Pressable style={styles.cardContainer} onPress={()=> console.log("pressed!")}>
        {/* <Image source={require('../assets/images/forest.jpeg')} style={styles.imageStyle} resizeMode='contain'/> */
        }
        <View style={styles.imageStyle}/>
        <View style={styles.detailInfo}>
        <Text>
            ĐẠI NHẠC HỘI ÁNH SAO ĐÊM
        </Text>
        <Text>THỨ BẢY 23, THÁNG 12, 2023</Text>
        <Text>live music</Text>
        </View>
        <View style={{flexDirection:'row', padding:5,gap:5   }}> 
        <Badge content={"Hà Nội"}/>
        <Badge content={"Từ 600.000VND"}/>
        </View>
  </Pressable>
  )
}

export default Card
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer:{
        height:250,
        backgroundColor:'#E2E2E2',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#E2E2E2',
        marginVertical:10,

    },
    imageStyle:{
        height:130,
        backgroundColor:'red',
        
    },
    detailInfo:{
        padding:5,
    }
})