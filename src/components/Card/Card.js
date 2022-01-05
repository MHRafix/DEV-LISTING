import React from 'react';
import './Card.css';
const Card = (props) => {
    // Data Destructuring 
    let {profilePic, name, age, post, salary, location} = props.developers;

    return (
        <div className="dvCard">
          <img src={profilePic} /><br />
          <div className="wrapper">
      <div className="infowrap">
          <span className="info">Name &nbsp;</span> <br />
          <span className="info">Age  &nbsp;</span> <br />
          <span className="info">Location  &nbsp;</span> <br />
          <span className="info">Stack  &nbsp;</span> <br />
          <span className="info">Salary  &nbsp;</span>  
       </div>

        <div className="infowrap2">
          <span className="info">: &nbsp; {name}</span><br />
          <span className="info">: &nbsp; {age}</span><br />
          <span className="info">: &nbsp; {location}</span><br />
          <span className="info">: &nbsp; {post}</span><br />
          <span className="info" style={{color: "rgb(39 174 96)"}}>: &nbsp; ${salary}</span><br />
      </div>
      </div><br />
      <button className="appointBtn" onClick={() => props.handleEvent(props.developers)}>Appoint Me &nbsp; <i class="fas fa-check-circle" style={{color: "#27ae60"}}></i></button>
        </div>
    );
};

export default Card;