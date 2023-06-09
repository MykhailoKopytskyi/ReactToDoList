import React from 'react';
import { useState } from 'react';
import "./style.css";

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';


const Todolist = () => {



  const [task, setTask] = useState( "" );
  const [ tasksArray, setTaskObject ] = useState( () => {
    let savedTasksArray = JSON.parse(localStorage.getItem( "tasksArray" ));
    return savedTasksArray || [];
  } );
  const [showComplete, setShowComplete ] = useState( () => {
    let savedShowComplete = JSON.parse(localStorage.getItem("showComplete"));
    return savedShowComplete || false;
  } );

  return (
    <div className='todolist' >
      <Header 
        task={task} 
        setTask={setTask} 
        tasksArray={tasksArray} 
        setTaskObject={setTaskObject} 
        showComplete = {showComplete}
      />

      <Main 
        tasksArray={tasksArray} 
        setTaskObject={setTaskObject} 
        showComplete={showComplete}  
      />

      <Footer 
        showComplete={showComplete} 
        setShowComplete={setShowComplete} 
        tasksArray={tasksArray} 
        setTaskObject={setTaskObject} 
      />

    </div>
  )
}

export default Todolist
