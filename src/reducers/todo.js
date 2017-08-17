import {getTodos,createTodo,updateTodo,destroyTodo} from '../lib/todoServices'
import {showMessage} from './messages'
const initState ={
    todos:[],
    currentTodo:''
}

export const ActionTypes = {
    Add_todo: 'TODO_ADD',
    Current_update: 'CURRENT_UPDATE',
    Todos_Load: 'TODOS_LOAD',
    todo_replace :'replaceTodo',
    remove_todo: 'REMOVE_TODO'
}
export const FilterActionTypes = {
    All: 'ADD',
    Completed: 'completed',
    Active: 'active'
}

export const updateCurrent =(val) =>({type:ActionTypes.Current_update,payload: val})

export const loadTodos = (todos) => ({type:ActionTypes.Todos_Load , payload: todos})

export const addTodo =(todo) =>({type: ActionTypes.Add_todo,payload:todo})

export const replaceTodo =(todo) =>({type: ActionTypes.todo_replace,payload:todo})

export const removeTodo =(id) =>({type: ActionTypes.remove_todo,payload:id})

export const fetchTodos = () =>{
    return (dispatch) => {
        dispatch(showMessage('Loading Todos'))
        getTodos().then(todos => dispatch(loadTodos(todos)))
    }
}

export const saveTodo =(name) =>{
    return (dispatch) => {
        dispatch(showMessage("Saving todo"))
        createTodo(name)
            .then(res => dispatch(addTodo(res)))
    }
}

export const toggleTodo = (id) =>{
    return (dispatch,getState) =>{
        dispatch(showMessage('Saving todo update'))
        const {todos} = getState().todo
        const todo = todos.find(t => t.id === id)
        const toggled ={...todo, isComplete: !todo.isComplete}
        updateTodo(toggled).then( res =>
            dispatch(replaceTodo(res))
        )
    }
}

export const deleteTodo = (id) =>{
    return (dispatch) => {
        dispatch(showMessage('Removing todo'))
        destroyTodo(id).then(() =>
            dispatch(removeTodo(id))
        )
    }
}

export const getVisibleTodos = (todos,filter) =>{
    switch(filter){
        case FilterActionTypes.Active:
            return todos.filter(t=> !t.isComplete)
        case FilterActionTypes.Completed:
            return todos.filter(t=> t.isComplete)
        default:
            return todos


    }
}


export default (state = initState,action) =>{
    switch (action.type){
        case ActionTypes.Add_todo:
            return {...state ,currentTodo:'', todos: state.todos.concat(action.payload)}
        case ActionTypes.Current_update:
            return {...state,currentTodo: action.payload}
        case ActionTypes.Todos_Load:
            return {...state,todos: action.payload}
        case ActionTypes.todo_replace:
            return {...state,todos: state.todos.map(t => 
                t.id === action.payload.id ? action.payload : t)}
        case ActionTypes.remove_todo:
                return {...state, todos: state.todos.filter(t => t.id !== action.payload)}
        default:
        return state
    }
}
