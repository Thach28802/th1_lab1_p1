import React from "react";
import { View,Button, StyleSheet } from "react-native";
import{
    TouchableOpacity,
    Text
} from "react-native";

export default () => {
    return (
        <View style={MyStyle.container}>
            <Button title="Button 1" onPress={() => alert("Hello!")}/>
            <TouchableOpacity
                onPress={() => alert("Xin chào!")}
                style={{
                    backgroundColor:"blue",
                    padding: 10,
                    alignItems: "center",
                    marginTop: 10,
            }}
            >
                <Text style={MyStyle.container}>Button 2</Text>
            </TouchableOpacity>
        </View>
    );
};
const MyStyle = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: "center",
            color:'white'
       },
       button:{
        backgroundColor: "blue",
        marginTop: 10,
        alignItems: "center",
        padding: 10
       },
       text:{
        color: "white",
        fontSize: 18
       }
    }
)