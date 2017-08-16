import {getTodos,createTodo} from '../lib/todoServices'
const initState ={
    todos:[],
    currentTodo:''
}

export const ActionTypes = {
    Add_todo: 'TODO_ADD',
    Current_update: 'CURRENT_UPDATE',
    Todos_Load: 'TODOS_LOAD'
}

export const updateCurrent =(val) =>({type:ActionTypes.Current_update,payload: val})

export const loadTodos = (todos) => ({type:ActionTypes.Todos_Load , payload: todos})

export const addTodo =(todo) =>({type: ActionTypes.Add_todo,payload:todo})

export const fetchTodos = () =>{
    return (dispatch) => {
        getTodos().then(todos => dispatch(loadTodos(todos)))
    }
}

export const saveTodo =(name) =>{
    return (dispatch) => {
        createTodo(name)
            .then(res => dispatch(addTodo(res)))
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
        default:
        return state
    }
}