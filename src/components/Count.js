import React, { useMemo }  from "react";

const Count = ({count,setCount}) => {
    const expensiveCalculation = useMemo(() => {
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
          result += i;
        }
        return result;
    }, []);
    return (
      <div>
        {"Count : "+count}
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>Expensive Calculation</h1>
        <div>{expensiveCalculation}</div>
      </div>
    )
  }
  
  export default Count;
  