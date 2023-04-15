import React, { useEffect, useState } from 'react';


function Delete(props){

  return (
    <button onClick={props.onClick} className="delete" ><img className="img" src= "https://www.flaticon.com/svg/vstatic/svg/3917/3917176.svg?token=exp=1673286032~hmac=6207ca7af0469bd58dc0dd3ec70ba7a8" alt="" /></button>   
  )
}
export default Delete;