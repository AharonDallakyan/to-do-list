import React, { useEffect,useState} from 'react';

function Add(props) {
  return <button  onClick={props.onClick}className="addBut"> <p>+</p> </button>;
}

export default Add;
