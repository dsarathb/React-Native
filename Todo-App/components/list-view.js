import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default class ListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <FlatList style={this.props.rowStyle}
                    data={this.props.dataInfo}
                    renderItem={({ item }) =>
                        <TodoRowItem completedAction={() => this.props.listCompletedTodoAction(item)} checkAction={() => { this.props.listCheckAction(item) }} todo={item} isOnlyList={this.props.isListDisplay} />
                    }
                    ItemSeparatorComponent={(item, index) =>
                        <View style={{ backgroundColor: 'gray', height: 1, width: '100%' }} />}
                    keyExtractor={(item) => item.key.toString()}

                />
            </View>
        )
    }
}

const TodoRowItem = (props) => {
    if (props.isOnlyList) {
        return (
            <TouchableOpacity style={listStyles.rowContainer}>
                <Text style={[listStyles.rowTitle]}>
                    {props.todo.todoName}
                </Text>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity style={listStyles.rowContainer}>
                <Text style={[listStyles.rowTitle, props.todo.completed ? { textDecorationLine: 'line-through' } : { textDecorationLine: 'none' }]}>
                    {props.todo.todoName}
                </Text>
                <CheckBox
                    checked={props.todo.completed}
                    title=''
                    center={true}
                    containerStyle={listStyles.checkBox}
                    textStyle={{ textAlign: 'center' }}
                    color='transparent'
                    onPress={() => props.checkAction()}
                />
                <AntIcon style={listStyles.deleteIcon}
                    name='closecircle'
                    size={25}
                    color='red'
                    onPress={() => props.completedAction()}
                />

            </TouchableOpacity>
        )
    }
}


const listStyles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowTitle: {
        flex: 0.9,
        fontFamily: 'AvenirNext-Regular',
        fontSize: 16,
        backgroundColor: 'transparent',
        paddingLeft: 5,
    },
    checkBox: {
        width: 44,
        height: 45,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderWidth: 0
    },

    deleteIcon: {
        flex: 0.1,
        backgroundColor: 'transparent',
        textAlign: 'center',
        alignItems: 'center'
    }

})