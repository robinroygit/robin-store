import { useReducer } from "react";


const initialState={
    count:0,
};
const reducer = (state,action)=>{
   switch(action.type){
    case "INCREMENT": return{ 
        count:state.count+1,
    }
    case "DECREMENT":return{
        count:state.count-1,
    }

    default: return state
   }

}

 

const Test = () => {
    // const [count,setCount] = useState(0)

    const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div> 
    <h1 style={{padding:"0 5rem"}}>{state.count}</h1>
    <input type="button" value="increment" onClick={()=>dispatch({type:"INCREMENT"})}/>
    <input type="button" value="decrement" onClick={()=>dispatch({type:"DECREMENT"})}/>

    </div>
  )
}

export default Test