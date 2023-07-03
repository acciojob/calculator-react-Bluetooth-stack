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
        <div className="Calculator">
            <input id="calci" type="text" disabled value={input}></input>
            <div>
                <button onClick={(e)=>{handleClick(e)}} >C</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn-/">/</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn-*">*</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn--">-</button>
            </div>
            <div>
                <button onClick={(e)=>{handleClick(e)}} id="btn-7">7</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn-8">8</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn-9">9</button>
                <button onClick={(e)=>{handleClick(e)}} id="plus">+</button>
            </div>
            <div>
                <button onClick={(e)=>{handleClick(e)}} id="btn-4">4</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn-5">5</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn-6">6</button>
            </div>
            <div>
                <button onClick={(e)=>{handleClick(e)}} id="btn-1">1</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn-2">2</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn-3">3</button>
                <button onClick={(e)=>{handleClick(e)}} id="equal">=</button>
            </div>
            <div>
                <button onClick={(e)=>{handleClick(e)}} id="btn-0">0</button>
                <button onClick={(e)=>{handleClick(e)}} id="btn-.">.</button>
                <button id="btn-div"></button>
            </div>
        </div>
    )
}

export default App;