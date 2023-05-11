import {useState,useEffect} from 'react'

function Counter(){
      let [state,setState] = useState(0) 
      useEffect(()=>{

        document.title = `count value is ${state}`
     })
let counterStyle = {
    width:"300px",
    boxShadow:"0 0 10px black",
    padding:"30px",
    margin:"100px auto",
    textAlign:"center"
}
// var countValue = 0

const increaseCount = ()=>{
       setState(state+1)
}
const decrementCount =() =>{
    setState(state-1)
}

    return <div style={counterStyle}>
         <h2>Count Value is {state} </h2>
         <button onClick={increaseCount}>Increment Count</button>
         <button onClick={decrementCount}>Decrement Count</button>
    </div>
}
export default Counter