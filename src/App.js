
import "./App.css";
import Header from "./MyComponents/Header";  // in rfc default return is used so no need to use{} to import
import {Todos} from "./MyComponents/Todos";  // in rafc no default return used so use {} to import
// import {TodoItem} from "./MyComponents/TodoItem";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
//import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (  localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    //console.log("Hi there",todo);

    // deleting this way won't work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title, description)=>{
    //console.log("adding",title,description);
    let sno;
    if (todos.length===0) {
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno +1;
    }

    const myTodo ={
      sno: sno,
      title: title,
      description: description
    }
    setTodos([...todos,myTodo]);
    //console.log(myTodo);     
    
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title = "My ToDos List" />

      <Switch>
          <Route exact path="/" render={()=> {
            return(
            <>
            <AddTodo addTodo = {addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </>
          )
          }}>
          
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
      </Switch>  
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
