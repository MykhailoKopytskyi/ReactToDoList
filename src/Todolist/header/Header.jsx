import React from 'react';
import { useEffect } from 'react';
import "./style.css";
import {v4} from "uuid";

const Header = (props) => {

  useEffect( () => {
    console.log("use effect render")

    function handleKeyPress(e){
      if( e.key == "Enter" ){
        changeTasksArray();
      }
    }
    window.addEventListener( "keypress", (e) => handleKeyPress(e) );
    return () => {
      window.removeEventListener( "keypress", (e) => handleKeyPress(e) ); 
      console.log("unmounted") // Once a component is unmounted, listener should be removed to avoid memory leak !!!! 
    }
  }, [props.task] ); // We need to change the props inside the useEffect whenever we input a new task


  useEffect( () => {
    localStorage.setItem( "tasksArray", JSON.stringify(props.tasksArray) )
    console.log("Items are set to localstorage")
  }, [props.tasksArray] )

  useEffect( () => {
    localStorage.setItem( "showComplete", JSON.stringify(props.showComplete) )
  }, [props.showComplete] )




  function changeValue(e) {
    props.setTask(e.target.value);
  }

  function changeTasksArray() {

    if( props.task.trim() ){
      props.setTaskObject( [...props.tasksArray, {
        text: props.task,
        completed: false,
        id: v4()
      }]);

      props.setTask("");
    }


  }
  

  return (
    <div className='header' >
      <h2>To do list</h2>
      <div className="declare-task-block">
        <input type="text" placeholder="Take the garbage out" className="declare-task" value={props.task}  onChange={ (e) => changeValue(e) } />
        <div className="add-task" onClick={ changeTasksArray } >+</div>
      </div>
    </div>
  )
}

export default Header
