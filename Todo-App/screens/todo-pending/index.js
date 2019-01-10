import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, StyleSheet,Dimensions} from 'react-native';
import ListView from '../../components/list-view';

class TodoPending extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { pendingTodosList } = this.props;
        return(
            <View >
                <ListView 
                   rowStyle = {pendingListStyles.rowStyle}
                   dataInfo = {pendingTodosList}
                   isListDisplay = {true}                
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
       pendingTodosList : state.todos.pendingTodos
    }
}

export default connect (mapStateToProps)(TodoPending)

const pendingListStyles = StyleSheet.create({
    rowStyle : {
       marginLeft:10, 
       marginRight:10, 
       marginTop:10,
       width : Dimensions.get('window').width - 2*10,
    },

})