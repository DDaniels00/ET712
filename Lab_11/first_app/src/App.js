import './App.css';
import React from 'react';

function App() {
  // Define required variables
  const msg = "Welcome to ReactJS";
  const printsomething = () => "Hello from function";

  // Define the style object
  const containerStyle = {
    width: "500px",
    display: "block",
    margin: "auto",
    border: "groove 10px orange"
  };

  return (
    <div>
      <h1 style={{color:"crimson", textAlign:"center"}}>ET712</h1>
      <p>This is my first ReactJS app</p>
      <p>Bucket List</p>
      <ol>
        <li>It gives you things to look forward to</li>
        <li>It makes life more meaningful</li>
      </ol>

      {/* Inline Styling Section */}
      <div style={containerStyle}>
        <h2>Inline Styling</h2>
        <label htmlFor="email">Enter an e-mail: </label>
        <input
          type="text"
          id="email"
          placeholder="Enter an email address..."
          style={{ padding: "10px", backgroundColor: "lightgreen" }}
        />
        <button type="submit" style={{ backgroundColor: "crimson", padding: "10px 20px" }}>
          Submit
        </button>

        <h2 className='subtitle'>Variables in JSX</h2>
        <p>Calling variable msg = {msg}</p>
        <p>Calling function printsomething = {printsomething()}</p>
      </div>
    </div>
  );
}

export default App;
