import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
const Project1 = ()=>
{
    return (
        <View style={
            MyStyle.ViewStyle
        }>
            <Text style={MyStyle.TextStyle}> Hello World</Text>
        </View>
    )
}
var MyStyle = StyleSheet.create(
    {
        ViewStyle:{
            width:100,
            height:100,
            backgroundColor:'aqua',
            alignItems:'center',
            justifyContent:'center'
        },
        TextStyle:
        {
            color:'black'
        }
    }
)
export default Project1;
