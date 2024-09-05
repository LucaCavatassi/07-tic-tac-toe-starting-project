import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setEditing ] = useState(false);

  // console.log(isEdit);
  
  function handleButton(bool){
    setEditing(bool)
  }
  
  console.log(isEditing);

  if (isEditing === true) {
    return (
      <li>
            <span className="player">
              <input type="text" />
              <span className="player-symbol"> {symbol} </span> 
            </span>
            <button onClick={() => handleButton(true)}>Edit</button>
      </li>
    )
  } else {
    return (
        <li>
            <span className="player">
              <span className="player-name"> {name}</span> 
              <span className="player-symbol"> {symbol} </span> 
            </span>
            <button onClick={() => handleButton(true)}>Edit</button>
        </li>
    )
  }

}