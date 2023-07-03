import React, { useState } from "react";

const App = () => {
    let [input, setInput] = useState('')

    function handleClick(e) {
        if (e.target.innerText == 'C') {
            setInput('');
            return
        }
        if(e.target.innerText=='='){
            setInput(eval(input));
        }
        else{
            setInput(input+e.target.innerText)
        }
    }

    return (
        <div>
            <input type="text" disabled value={input}></input>
            <div>
                <button onClick={(e)=>{handleClick(e)}}>C</button>
                <button onClick={(e)=>{handleClick(e)}}>/</button>
                <button onClick={(e)=>{handleClick(e)}}>*</button>
                <button onClick={(e)=>{handleClick(e)}}>-</button>
            </div>
            <div>
                <button onClick={(e)=>{handleClick(e)}}>7</button>
                <button onClick={(e)=>{handleClick(e)}}>8</button>
                <button onClick={(e)=>{handleClick(e)}}>9</button>
                <button onClick={(e)=>{handleClick(e)}}>+</button>
            </div>
            <div>
                <button onClick={(e)=>{handleClick(e)}}>4</button>
                <button onClick={(e)=>{handleClick(e)}}>5</button>
                <button onClick={(e)=>{handleClick(e)}}>6</button>
            </div>
            <div>
                <button onClick={(e)=>{handleClick(e)}}>1</button>
                <button onClick={(e)=>{handleClick(e)}}>2</button>
                <button onClick={(e)=>{handleClick(e)}}>3</button>
                <button onClick={(e)=>{handleClick(e)}}>=</button>
            </div>
            <div>
                <button onClick={(e)=>{handleClick(e)}}>0</button>
                <button onClick={(e)=>{handleClick(e)}}>.</button>
                <button></button>
            </div>
        </div>
    )
}

export default App;