import logo from './logo.svg';
import './App.css';
import ''

function App() {
  //variable
  const msg = "Welcome to ReactJS"
  //function
  function printsomething(){
    return "Hello from function"
  }
  return (
    <div>
      <h1 style={{color:"magenta", textAlign:"center"}}> Dyani Daniels ET712</h1>
      <p> this is my first react js app</p>
      <p>Bucket List</p>
      <ol>
        <li>It gives you things to look forward to</li>
        <li>It makes life more meaningful</li>
      </ol>

      <h2>Inline Styling</h2>
      <label for="email">Enter an e-mail: </label>
      <input type="text" id="email" placeholder="Enter an email address..."style={{padding: "10px", backgroundColor:"lightgreen"}}/>
      <button type= "submit" style={{backgroundColor:"crimson", padding:"10px 20px"}}>Submit</button>
      style={{width: "500px", display:"block", margin:"auto", border: "groove 10x orange"}}
      <h2 className='subtitle'> Variables in JSX</h2>
      <p> Calling variable msg = {msg}</p>
      <p>Calling function printsomething = {printsomething()}</p>
    
    </div>
  );
}

export default App;
