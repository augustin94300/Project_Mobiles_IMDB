import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {Text, ScrollView, Image, View, StyleSheet, Button, TouchableWithoutFeedback} from "react-native";

export default class Movie_Description extends React.Component {
    render() {
        return (
                <View style={styles.Trailer_Container}>
                    <Button style={styles.Trailer_Container_Text} title='film' onPress={() => {}}/>
                </View>
        )
    }   
}

const styles = StyleSheet.create({  
    Trailer_Container: {
        flex: 0.5,
        justifyContent: "center",
        backgroundColor: "#B00020",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    Trailer_Container_Text: {
        color: "#FFFFFF",
        fontSize: 5,
    },

})