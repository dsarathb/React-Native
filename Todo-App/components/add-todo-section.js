import React, {Component} from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet,Text} from 'react-native';
import {connect} from 'react-redux';
import { addTodoTask } from '../actions/todo-list-action';


 class AddTodo extends Component {
    constructor(props) {
       super(props);
       this.didChangeTextInField = this.didChangeTextInField.bind(this);
       this.addTodoAction = this.addTodoAction.bind(this);

       this.state = {
           todo : ''
       }
    }

    addTodoAction() {
       this.props.addTodoTask(this.state.todo);

       this.setState({todo:''});
    }

    didChangeTextInField = (text) => {
        this.setState({todo:text});
    }

    render(){
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.field}
                    placeholder = 'Enter Todo Here'
                    placeholderTextColor = 'lightgray'
                    onChangeText = {(text) => this.didChangeTextInField(text)}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    value = {this.state.todo}
                />
                <TouchableOpacity style = {styles.addButton} onPress = {this.addTodoAction}>
                    <Text style = {styles.buttonTitle}>
                        Add 
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoTask:(todo) => {
            dispatch(addTodoTask(todo));

        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddTodo);

const styles = StyleSheet.create({
    container :{
        marginLeft:10, 
        marginRight:10, 
        marginTop:10, 
        height:45, 
        flexDirection:'row',
        backgroundColor:'transparent',
        borderRadius:6,
        justifyContent:'space-between',
    },
    field : {
        width:'76%', 
        height:45,
        fontFamily:'AvenirNext-Regular',
        fontSize:16,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'lightgray',
        borderRadius:6,
        padding:10
    },
    addButton : {
        width:'20%',
        fontSize:16,
        backgroundColor:'blue', 
        justifyContent:'center',
        borderRadius:6,
    },
    buttonTitle : {
        fontFamily:'AvenirNext-DemiBold',
        fontSize:16,
        textAlign:'center',
        color:'white'
    }
})