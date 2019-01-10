import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View,StyleSheet, Dimensions} from 'react-native';
import ListView from '../../components/list-view';

class TodoCompleted extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { completedTodos  } = this.props;
        return(
            <View>
                <ListView 
                   rowStyle = {completedListStyles.rowStyle}
                   dataInfo = {completedTodos}
                   isListDisplay = {true}
                />
            </View>
        )
    }
}

const completedListStyles = StyleSheet.create({
    rowStyle : {
       marginLeft:10, 
       marginRight:10, 
       marginTop:10,
       width : Dimensions.get('window').width - 2*10,
    },

})

const mapStateToProps = state => {
    return {
        completedTodos : state.todos.completedTodos
    }
}

export default connect (mapStateToProps)(TodoCompleted);