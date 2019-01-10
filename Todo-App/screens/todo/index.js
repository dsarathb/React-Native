import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, Text,TouchableOpacity, StyleSheet,Dimensions} from 'react-native';
import AddTodoSection from '../../components/add-todo-section';
import { CheckBox } from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {addTodoTask, pendingTodoTask, completedTodoTask} from '../../actions/todo-list-action';
import ListView from '../../components/list-view';

 class Todo extends Component {
    constructor(props){
        super(props);
        this.checkboxAction = this.checkboxAction.bind(this);
        this.state = {
            todoList : [
                'Do It Now',
                'Later',
                'Just Do It',
                'Manage',
                'Support',
            ],
            checked : false,
        }
    }

    checkboxAction = (item) => {
        this.props.pendingTodoTask(item);
    }

    completedTodoAction = (item) => {
        this.props.completedTodoTask(item);
    }

    render() {
        const { todos } = this.props;
        return (
            <View>
                <AddTodoSection />
                <ListView rowStyle = {todoStyles.rowStyle}
                          dataInfo = {todos}
                          isListDisplay = {false}
                          listCompletedTodoAction = {(item) => this.completedTodoAction(item)}
                          listCheckAction = {(item) => {this.checkboxAction(item)}}      
                />

                {/* <FlatList style = {todoStyles.rowStyle}
                  // data = {this.state.todoList}
                   data = {todos}
                   renderItem = {( { item }) => 
                       <TodoRowItem completedAction = {() => this.completedTodoAction(item)} checkAction={() => {this.checkboxAction(item)}} todo = {item}/> 
                   }
                   ItemSeparatorComponent = {(item, index) => 
                   <View style = {{backgroundColor:'gray',height:1,width:'100%'}} />}
                   keyExtractor = {(item) => item.key.toString()}
                />                 */}
            </View>
        )
    }
}

const TodoRowItem = (props) => {//textDecorationLine:'line-through'

    return(
        <TouchableOpacity style = {todoStyles.rowContainer}>
            <Text style = { [todoStyles.rowTitle, props.todo.completed ? { textDecorationLine:'line-through'} : { textDecorationLine:'none'}]}>
                {props.todo.todoName}
            </Text>
            <CheckBox 
               checked = {props.todo.completed}
               title = ''
              center = {true}
              containerStyle = {todoStyles.checkBox}
              textStyle ={ {textAlign : 'center'}}
              color = 'transparent'
              onPress = {() => props.listCheckAction()}
            />
           <AntIcon style = {todoStyles.deleteIcon}
              name = 'closecircle'
              size = {25}
              color = 'red'
              onPress = {() => props.listCompletedTodoAction()}
           />  

        </TouchableOpacity>
    )
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos.todos,
        //pending
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoTask: (todo) => {
            dispatch(addTodoTask(todo));
        },
        pendingTodoTask : (todo) => {
            dispatch(pendingTodoTask(todo));
        },
        completedTodoTask : (todo) => {
            dispatch(completedTodoTask(todo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);



const todoStyles = StyleSheet.create({
    rowStyle : {
       marginLeft:10, 
       marginRight:10, 
       marginTop:10,
       width : Dimensions.get('window').width - 2*10,
    },

})