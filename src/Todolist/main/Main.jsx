import React from 'react';
import "./style.css";
import Item from './item/Item';

const Main = (props) => {


  function countPendingTasks() {
    let count = 0;
    for( let i = 0; i < props.tasksArray.length; i++ ) {
      if( props.tasksArray[i].completed == false ){
        count = count + 1
      }
    }
    return count
  }

  if( !props.showComplete ){
    return(
      <div className='main' >
      <div className="task-quantity-block">
        <p>You have <span className="task-quantity" >{countPendingTasks()}</span> pending items</p>
        <div className="task-list">
          { 
           props.tasksArray.map( (task) => {
            if( task.completed == false ){
              return <Item 
              text={task.text} 
              key={task.id} 
              id={task.id}  
              completed = {task.completed}
              tasksArray = {props.tasksArray}
              setTaskObject = {props.setTaskObject}
            />
            }
            } ) 
          }
        </div>
      </div>
    </div>
    )
  }


  else if ( props.showComplete ) {
    return (
      <div className='main' >
      <div className="task-quantity-block">
        <p>You have <span className="task-quantity" >{countPendingTasks()}</span> pending items</p>
        <div className="task-list">
          { 
           props.tasksArray.map( (task) => {
              return <Item 
              text={task.text} 
              key={task.id} 
              id={task.id}  
              completed = {task.completed}
              tasksArray = {props.tasksArray}
              setTaskObject = {props.setTaskObject}
            />
            } ) 
          }
        </div>
      </div>
    </div>
    )
  }
}

export default Main
