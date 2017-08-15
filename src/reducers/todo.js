const initState ={
    todos:[
        {id:1, name:'Render static UI',isComplete:true},
        {id:2, name:'Create initial state',isComplete:true},
        {id:3, name:'Render based on state',isComplete:false}
    ],
    currentTodo:'temp'
}

export const ActionTypes = {
    Add_todo: 'TODO_ADD',
    Current_update: 'CURRENT_UPDATE'
}

export const updateCurrent =(val) =>({type:ActionTypes.Current_update,payload: val})

export default (state = initState,action) =>{
    switch (action.type){
        case ActionTypes.Add_todo:
            return {...state , todos: state.todos.concat(action.payload)}
        case ActionTypes.Current_update:
            return {...state,currentTodo: action.payload}
        default:
        return state
    }
}