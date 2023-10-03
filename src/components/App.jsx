import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button onClick>Submit</button>
      </form>
    </div>
  );
}

export default App;
