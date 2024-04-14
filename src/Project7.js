import React, {useState} from "react";
import { TextInput,Text,View,StyleSheet,Button } from "react-native";

const style = StyleSheet.create({
    container: {
        padding: 20,
        flex:1,
    },
    label: {
        fontWeight:"bold",
        fontSize: 18,
    },
    input: {
        marginTop: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 10,
        borderRadius: 5,
    },
});

export default () => {
    const [name, setName] = useState("");

    return (
        <View style={style.container}>
            <Text style={style.label}>Tên của bạn là gì?</Text>
            <TextInput
                style={style.input}
                placeholder="Mời bạn nhập tên"
                placeholderTextColor="rgba(0, 0, 0, 0.5"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                title="Xin chào!"
                onPress={() => {
                    alert(`Chào bạn, ${name}!`);
                    setName("");
                }}
            />
        </View>

    );
};