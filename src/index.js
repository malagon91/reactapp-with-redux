import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {updateCurrent} from './reducers/todo'
const todoChangeHandler =(val) =>{
  store.dispatch(updateCurrent(val))
}

const render =() =>{
   //app state is been declared here
  const state = store.getState()
  ReactDOM.render(<App 
    todos ={state.todos} 
    currentTodo = {state.currentTodo}
    changeCurrent={todoChangeHandler} />, 
    document.getElementById('root'));

}
render()
//como entiendo se hace esto para que cada que cambie el state de redux 
// se vuelva a llamar el metodo  render y pinte los cambios en pantalla
store.subscribe(render)

 registerServiceWorker();