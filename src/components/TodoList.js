import React,{Component} from 'react';
import {connect} from 'react-redux'
import {fetchTodos} from '../reducers/todo'

const TodoItem = ({ id, name, isComplete }) => (
  <li>
    <input type="checkbox" 
      defaultChecked={isComplete} />{name}
  </li>
)

class TodoList extends Component {
  componentDidMount(){
    this.props.fetchTodos()
  }
  render() {
    console.log(this.props.todos)
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) =>({todos: state.todos}),
  {fetchTodos}
)(TodoList)

/**
 * Igual que en app importammos la funcion connect, esto se  hico porque al cambiar el texto del 
 * input se rendereaban los 2 componenetes y no es lo optimo porque solo cambia el 
 * form component de esta forma si afectamos el input solo se renderea el form 
 */