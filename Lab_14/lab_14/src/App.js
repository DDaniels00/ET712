import './App.css';
import React, { useState } from "react"; // Ensure useState is imported

function App() {
    // Set the initial state
    const [count, setCount] = useState(0);
    const [name, setName] = useState(""); // Uncommented and properly formatted
    const [inputs, setInputs] = useState({});

    // Function to open an alert dialog when the form is submitted
    const submitForm = function(event){
        event.preventDefault();
        alert(`Welcome to React State ${inputs.username}. Your lucky number is ${inputs.luckynumber}\nComments= ${textcomment}`);
    };


    //function to handle the changes in all inputs
    const handle_changes = function(event){
      const name = event.target.name
      const value = event.target.value
        setInputs(values => ({...values, [name]:value})) //spread statement
    }
    // set the state for textarea

    const[textcomment, setTextcomment]=useState("")
    // function to collect the value of the textarea
    const submitted_comments = function(event){
      setTextcomment(event.target.value)
    }
    return (
        <>
            <h1>Lab 14, React State</h1>
            <p>Count = {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment the count</button>
            <button onClick={() => setCount(0)}>Reset button</button>

            <h1>Form Application Using State</h1>
            <form onSubmit={submitForm}>
                <fieldset>
                    <legend>Forms in ReactJS</legend>
                    <section>
  <label for="usernamename">Enter your name: </label>
                    <input 
                        type="text" 
                        id="username" 
                        value={inputs.username} 
                        onChange= {handle_changes}
                    />
                    </section>
                    <section>
                      <label for="luckynumber">Enter a lucky number: </label>
                      
                <input              
            type='number'
            id='luckynumber'
            name='luckynumber'
          value={inputs.luckynumber}
          onChange={handle_changes}
          />
                    </section>

                    <section>
                      <label for="comments"> Any suggestion?</label>
                      <textarea 
                        id='comments'
                        name='usercomments'
                        value={textcomment}
                        onChange={submitted_comments}
                        />
                    </section>


                    {/**
                    Submit form */}
                    <input type="submit"/>
                    {/** Test data in the form inputs */}
                    <p>Name = {inputs.username}</p>
                    <p>Lucky number = {inputs.luckynumber}</p>
                    <p>Comments {textcomment} </p>
                </fieldset>
            </form>
        </>
    );
}

export default App;
