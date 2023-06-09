import React from 'react';
import "./style.css";

const Footer = (props) => {

  return (
    <div className='footer' >
      <div className="footer-inner-wrapper" >
        <input type="checkbox" id="show-complete"  className="complete-tasks" checked={props.showComplete} onChange={ (e) =>{ console.log(e.target.checked); return props.setShowComplete(e.target.checked); } }  />
        <label  htmlFor="show-complete" className="btn show-complete-create" >Show Complete</label>
        <div className="clear-all-tasks btn" onClick={ () => props.setTaskObject([]) } >Clear All</div>
      </div>
    </div>
  )
}

export default Footer
