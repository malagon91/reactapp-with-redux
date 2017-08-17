import {ActionTypes} from './todo'

export const MessagesActionTypes = {
    Message_Show: 'MESSAGE_SHOW'
}
export const showMessage = (msg) =>({type: MessagesActionTypes.Message_Show, payload: msg})

export default function (state = '', action) {
    switch (action.type) {
        case MessagesActionTypes.Message_Show:
            return action.payload
        case ActionTypes.Todos_Load:
        case ActionTypes.Add_todo:
        case ActionTypes.todo_replace:
        case ActionTypes.remove_todo:
            return ''
        default:
            return state
    }

}