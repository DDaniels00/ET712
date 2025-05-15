import './App.css';

function App() {
    return (
        <>
            <h1> Slice App </h1>
            <section className="slicewrapper">
                <div className="numberWrapper">
                <div><p>1</p></div>
                <div><p>2</p></div>
                <div><p>3</p></div>
                </div>
                <p className="msg">Press the button to slice</p>
                <div className="btngroup">
                <button>Previous</button>
                <button>Next</button>
                </div>
            </section>
        </>
    );
}

export default App;
