import React, {Component} from 'react';
import { createStackNavigator,createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import Todo from '../screens/todo';
import TodoPending from '../screens/todo-pending';
import TodoCompleted from '../screens/todo-completed';

const TodoStack = createStackNavigator({
    todo : {
        screen : Todo,
        navigationOptions : ({ navigation }) => ({
            title : 'Todo',
            headerTitleStyle : {
                fontFamily: 'AvenirNext-Regular',
                fontSize : 18,
            },  
        })
    }
},
{
    initialRouteName : 'todo',
}
);

const TodoPendingStack = createStackNavigator({
    todoPending : {
        screen : TodoPending,
        navigationOptions : ({ navigation }) => ({
            title : 'Pending',
            headerTitleStyle : {
                fontFamily: 'AvenirNext-Regular',
                fontSize : 18,
            },  
        })
    }
},
{
    initialRouteName : 'todoPending',
}
);

const TodoCompletedStack = createStackNavigator({
    todoCompleted : {
        screen : TodoCompleted,
        navigationOptions : ({ navigation }) => ({
            title : 'Todo Completed',
            headerTitleStyle : {
                fontFamily: 'AvenirNext-Regular',
                fontSize : 18,
            },  
        })
    }
},
{
    initialRouteName : 'todoCompleted',
}
);

const TabStack = createBottomTabNavigator({
    todo : {
        screen : TodoStack,
        navigationOptions : ({navigation}) => ({
            title : 'All',
            tabBarIcon:({ focused, horizontal, tintColor }) => {
               return(<FontIcon name = 'list-ul' size={19}  color = {tintColor} />) 
            },
            
        })
    },
    todoPending : {
        screen: TodoPendingStack,
        title:'Pending',
        navigationOptions : ({navigation}) => ({
            title:'Pending',
            tabBarIcon:({ focused, horizontal, tintColor }) => {
                return(<MatComIcon name = 'dots-horizontal-circle' size={19} color = {tintColor}  />) 
             },
            

        })

    },
    todoCompleted : {
        screen: TodoCompletedStack,
        title :'Completed',
        navigationOptions:({navigation}) => ({
            title:'Completed',
            tabBarIcon:({ focused, horizontal, tintColor }) => {
                return(<IonIcon name = 'md-cloud-done' size={19} color = {tintColor}  />) 
             },
        })
    }
},
{
    initialRouteName : 'todo',
    defaultNavigationOptions : ({navigation}) => ({
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
        },
    })
}
);

const AppContainer = createAppContainer(TabStack);

export default AppContainer;

