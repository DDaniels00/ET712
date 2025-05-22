import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const messages = [
    'I think, therefore I am',
    'I have a dream',
    'The only thing we have to fear is fear itself',
  ];
  
  const [isopen, setIsopen] = useState(true);

  return (
    <>
      <h1 className="title">Slice App by student's name</h1>
      <section className="slicewrapper">
        <div className="numberWrapper">
          <div className={counter === 1 ? 'active' : ''}><p>1</p></div>
          <div className={counter === 2 ? 'active' : ''}><p>2</p></div>
          <div className={counter === 3 ? 'active' : ''}><p>3</p></div>
        </div>

        {/* Prevent negative indexing */}
        <p className="msg"><em>{messages[counter - 1] || "Message Not Found"}</em></p>

        <div className="btngroup">
          <button onClick={() => setCounter(prev => Math.max(1, prev - 1))}>Previous</button>
          <button onClick={() => setCounter(prev => Math.min(messages.length, prev + 1))}>Next</button>
        </div>
      </section>

      <h1 className="title">Open and close button</h1>
      <div className="info">
        <b>Cat (Felis catus)</b>, commonly referred to as the domestic cat or house cat
        <button className="readmore_btn" onClick={() => setIsopen(!isopen)}>
          {isopen ? 'Hide' : 'Read More'}
        </button>
      </div>
      
      {isopen && (
        <section className="hiddentext">
          <p>
            The cat (Felis catus), also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal.
            Advances in archaeology and genetics show domestication occurred in the Near East around 7500 BC.
          </p>
        </section>
      )}
    </>
  );
}

export default App;
