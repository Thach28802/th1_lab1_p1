import React from "react";
import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        flexDirection: "row",
        justifyContent:"space-around",
    },
    box:{
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center",
    },
});

const Square = ({ text, bgColor = "red"}) => (
    <View style = {[style.box, {backgroundColor:bgColor}]}>
        <Text>{text}</Text>
    </View>
);

export default () => {
    return (
        <View style ={style.container}>
            <Square text ="Square 1" />
            <Square text ="Square 2" bgColor="green"/>
            <Square text ="Square 3" bgColor="yellow"/>
        </View>
    );
}