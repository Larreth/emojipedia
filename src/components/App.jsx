import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

// function where emojipedia.js data will be mapped from
function createEmoji(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* calling map function on the emoji in emojipedia.js  */}
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
