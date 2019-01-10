import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.moveToTodoList = this.moveToTodoList.bind(this);

    }

    moveToTodoList() {
       this.props.navigation.navigate('todo');
    }

    render() {
        return (
            <View style={homeStyles.container}>
                <TouchableOpacity style={homeStyles.button} onPress = {() => {this.props.navigation.navigate('todo')}}>
                    <Text style={homeStyles.buttonTitle}> Todo </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
    },
    button : {
        marginLeft: 20, 
        marginRight: 20, 
        backgroundColor: 'blue', 
        height: 44, 
        justifyContent: 'center', 
        borderRadius:6,
    },
    buttonTitle : {
        fontFamily: 'AvenirNext-DemiBold', 
        textAlign: 'center', 
        color: 'white'
    }
});

