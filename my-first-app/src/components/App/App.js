import React from 'react';
import ClassComp, { ClassComp2 } from "../ClassComp/ClassComp";
import FunctionalComp, { FunctionalComp2 } from "../FuncitionalComp/FunctionalComp";
import basicElement from "../BasicElement/BasicElement"
import './App.css';

const funkcjaPokazujacaId = event => alert(event.target.id)
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
];


function App() {
  const lol = "ZMIENNA"
  const displayAction = false;

  return (
    <div className="container">
      < h1 > Hello, World!</h1 >
      {displayAction && <p>This is p</p>}
      <ClassComp></ClassComp>
      <ClassComp2/>
      <FunctionalComp name="THIS IS PROP NAME"></FunctionalComp>
      <FunctionalComp2/>
      {basicElement}

      <ul>
        { emojis.map(emoji => (
          <li>
            <button
              onClick={funkcjaPokazujacaId}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
            </button>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default App;
