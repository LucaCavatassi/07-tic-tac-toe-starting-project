import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setEditing ] = useState(false);

  // console.log(isEdit);
  
  function handleButton(){
    setEditing(true)
  }
  
  let editPlayer = <span className="player-name"> {name}</span> 
              
  if (isEditing) {
    editPlayer = <input type="text" required />
  }
  
    return (
        <li>
            <span className="player">
              {editPlayer}
              <span className="player-symbol"> {symbol} </span> 
            </span>
            <button onClick={() => handleButton(true)}>Edit</button>
        </li>
    )

}