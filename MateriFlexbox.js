import React, { Component } from "react";
import { Text, View } from "react-native";

class MateriFLexBox extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'purple' }} />
            </View>
        )
    }
}

export default MateriFLexBox;