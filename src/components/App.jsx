import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojiTerm => (
          <Emoji
          key={emojiTerm.id}
          emoji={emojiTerm.emoji}
          name={emojiTerm.name}
          description ={emojiTerm.meaning}
          />
  ))}        
      </dl>
    </div>
  );
}

export default App;
