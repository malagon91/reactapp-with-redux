import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './miapp.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {updateCurrent} from './reducers/todo'
//import {bindActionCreators} from 'redux'  ** Ya no se ocupo con el connect

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
          <TodoForm 
          currentTodo={this.props.currentTodo} 
          changeCurrent={this.props.updateCurrent} />
          <TodoList todos= {this.props.todos}/>
        </div>
      </div>
    );
  }
}

//export default App;

//con este cambio se pasan todos los props que se estaban heredando del store 
//pero ahora con el provider que se asigno en index.js ahora el componente que 
//queremos que este conectado con ese provuider necesitamos hacer lo que hago enseguida 
//que es pasar el estado del store y juntarlo con el objeto connect de react-redux
// //13. Elimino las constantes porque solo heredan el valor se pueden asignar solas
//***Segunda simplificacion
// const mapStateProps =(state) => state
// //El metodo bindActionCreators no se va a requerir con que heredemos el objeto del 
// // distpatch al connect redux hara todo
// const mapdispatchToProps =(dispatch) => bindActionCreators({updateCurrent},dispatch)
// const ConnectedApp = connect(mapStateProps,mapdispatchToProps)(App)
// export default ConnectedApp
//***Segunda simplificacion
//here: 
export default connect(
  (state)=>state,
  {updateCurrent})
  (App)

