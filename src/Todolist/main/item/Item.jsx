import React from 'react';
import "./style.css";

const Item = (props) => {

  function changeCompletedStatus(e){
    let currentId = e.target.closest(".task").id;
    let newTasksArray = props.tasksArray.filter( (taskObject) => {
      if( taskObject.id == currentId ){
        taskObject.completed = e.target.checked
      }
      return taskObject

    });
    props.setTaskObject(newTasksArray);
  }


  function removeElement(e) {
    let currentId = e.target.closest(".task").id;
    let removeAtIndex = 0;
    let newTasksArray = props.tasksArray.map( (taskObject, index) => {
      if( taskObject.id != currentId ){
        removeAtIndex = index
      }
      return taskObject
    });
    props.setTaskObject(newTasksArray);
    newTasksArray.splice(removeAtIndex, 1)
    console.log(newTasksArray)
  }



  return (
    <div className="task" id={props.id} >
      <div className="left-block">
        <input type="checkbox" className="checkbox" checked={props.completed} onChange={ (e) => changeCompletedStatus(e) } />
        <span className="user-task"> {props.text} </span>
      </div>

      <div className="hover-bin" onClick={ (e) => removeElement(e) } >
        <i className="fa-solid fa-dumpster-fire"></i>
      </div>
    </div>
  )
}

export default Item
