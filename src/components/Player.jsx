import { useState } from "react";

export default function Player({name, symbol, isActive}) {
  const [playerName, setName] = useState(name)
  const [ isEditing, setEditing ] = useState(false);

  // console.log(isEdit);
  
  function handleButton(){
    setEditing(editing => !editing)
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }
  
  let editPlayer = <span className="player-name"> {playerName}</span> 
  let btnCaption = "Edit"

  if (isEditing) {
    editPlayer = <input type="text" required value={playerName} onChange={handleChangeName} />
    btnCaption="Save"
  }
  
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
              {editPlayer}
              <span className="player-symbol"> {symbol} </span> 
            </span>
            <button onClick={handleButton}>{btnCaption}</button>
        </li>
    )

}