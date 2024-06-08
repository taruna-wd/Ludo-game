import { useState } from "react"


export default  function Ludo (){
    let [count, setCount] = useState({ blue :0 , red :0  , green:0 , purple :0}) ;   // use object  wiht useState
    // let [moves , setMoves] = useState({blue:0})

    let increase = () =>{

        console.log(count.blue)
        setCount((moves) =>{
            return {...moves  , blue : moves.blue+1} // for change in spread ...moves create a object copy in form of array
        })
    }
    let red = () =>{

        console.log(count.red)
        setCount((moves) =>{
            return {...moves  , red : moves.red+1}
        })
    }
   
    let green = () =>{

        console.log(count.green)
        setCount((moves) =>{
            return {...moves  , green : moves.green+1}
        })
    }
   
    let purple = () =>{

        console.log(count.purple)
        setCount((moves) =>{
            return {...moves  , purple : moves.purple+1}
        })
    }
   
    return (
        <>
        <div>
            <h2>
                Game start!
            </h2>
            <div className="flex">
            <h4>Blue : {count.blue}</h4>
            <button  style={{backgroundColor:"blue"}}   onClick={increase}> +1 </button>

            <h4>Red :{count.red} </h4>
            <button onClick={red}  style={{backgroundColor :"red"}}> + 1</button>

            <h4>Green :{count.green} </h4>
            <button onClick={green}   style={{backgroundColor :"green"}}>+1</button>

            <h4>Yellow  : {count.purple}</h4>
            <button onClick={purple}   style={{backgroundColor :"purple"}}>+1</button> 

            </div>
            
        </div>
        
        </>
    )
}