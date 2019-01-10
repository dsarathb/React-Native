import { TODO_LIST,ADD_TODO_TASK,PENDING_TODO_TASK, COMPLETED_TODO_TASK } from '../actions';

export const todoList = (todo) => {
    return {
        type : TODO_LIST,
        payload : todo,
    }
}

export const addTodoTask = (todo) => {
    return {
        type : ADD_TODO_TASK,
        payload : todo,
    }
}

export const pendingTodoTask = (todo) => {
    return {
        type : PENDING_TODO_TASK,
        payload:todo,
    }
}

export const completedTodoTask = (todo) => {
    return {
        type : COMPLETED_TODO_TASK,
        payload :todo,
    }
}