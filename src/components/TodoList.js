import React,{Component} from 'react';
import {connect} from 'react-redux'
import {fetchTodos,toggleTodo,deleteTodo, getVisibleTodos} from '../reducers/todo'

const TodoItem = ({ id, name, isComplete,toggleTodo,deleteTodo }) => (
  <li>
    <span className="delete-item">
    <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input type="checkbox" 
      defaultChecked={isComplete} onChange={()=>toggleTodo(id)} />{name}
  </li>
)

class TodoList extends Component {
  componentDidMount(){
    this.props.fetchTodos()
  }
  render() {
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo => <TodoItem key={todo.id} 
            toggleTodo ={this.props.toggleTodo} 
            deleteTodo ={this.props.deleteTodo}
            {...todo} />)}
        </ul>
      </div>
    )
  }
}
//ownProps Trae los props propios del component, no los que redux pasa por eso 
//ese prop se declaro dentro del component en app.js
export default connect(
  (state,ownProps) =>({todos: getVisibleTodos(state.todo.todos,ownProps.filter)}),
  {fetchTodos,toggleTodo,deleteTodo}
)(TodoList)

/**
 * Igual que en app importammos la funcion connect, esto se  hico porque al cambiar el texto del 
 * input se rendereaban los 2 componenetes y no es lo optimo porque solo cambia el 
 * form component de esta forma si afectamos el input solo se renderea el form 
 */