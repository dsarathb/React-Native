import { TODOS_LIST, ADD_TODO_TASK, PENDING_TODO_TASK, COMPLETED_TODO_TASK } from '../actions';

const INITIAL_STATE = {
    todos: [],
    pendingTodos: [],
    completedTodos: [],
}

const TodoListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODOS_LIST:
            return {
                ...state,
                todos: action.payload,
            }
        case ADD_TODO_TASK: {
            let todoItems = [...state.todos];
            todoItems = [...state.todos, { key: Math.random(), pending: true, completed: false, todoName: action.payload, }];
            let pendingTodoItems = [];
            let completedTodoItems = [];
            todoItems.map(todo => {
                if (!todo.completed) {
                    pendingTodoItems.push(todo);
                } else {
                    completedTodoItems.push(todo);
                }
            })
            return {
                ...state,
                todos: todoItems,
                pendingTodos: pendingTodoItems,
                completedTodos : completedTodoItems, 
            }
        }
        case PENDING_TODO_TASK:
            const todosList = [...state.todos];
            const pendingTodosList = [...state.pendingTodos];
            const completedTodosList = [...state.completedTodos];

            todosList.map(item => {
                if (item.key === action.payload.key) {
                    if (item.completed) {
                        item.completed = false;
                        item.pending = true;
                        pendingTodosList.push(item);
                        let itemIndex = completedTodosList.indexOf(item);
                        if (itemIndex != -1) {
                            completedTodosList.splice(itemIndex, 1);
                        }
                    } else {
                        item.completed = true;
                        item.pending = false;
                        let itemIndex = pendingTodosList.indexOf(item);
                        pendingTodosList.splice(itemIndex, 1);
                        completedTodosList.push(item);
                    }
                }
            })
            return {
                ...state, todos: todosList, pendingTodos: pendingTodosList, completedTodos: completedTodosList
            }
        case COMPLETED_TODO_TASK:
            const todosItems = [...state.todos];
            const pendings = [];
            const completeds = [];
            todosItems.map(item => {
                if (item.key === action.payload.key) {
                    let itemIndex = todosItems.indexOf(item);
                    if (itemIndex != -1) {
                        todosItems.splice(itemIndex, 1);
                    }
                }
            })

            todosItems.forEach(todo => {
                if (todo.pending) {
                    pendings.push(todo);
                } else if (todo.completed) {
                    completeds.push(todo);
                }
            })

           // console.log('Deleted Items Todos: '+JSON.stringify(todosItems)+'Pending Todos:'+JSON.stringify(pendings)+'Completed Todos :'+JSON.stringify(completeds));

            return { ...state, todos: todosItems, pendingTodos: pendings, completedTodos: completeds }
        default:
            return state;
    }
}

export default TodoListReducer;