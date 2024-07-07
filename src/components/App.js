import React from "react";
import { useState } from "react";
import Todos from "./Todos";
import Counter from "./Counter";
import ReactMemo from "./ReactMemo";
const App = () => {
    const [dataObj, setDataObj] = useState({
        todoArr: [],
        count: 0,
        skillsArr: []
    })
  return (
    <div id="main">
        <h1>React.useMemo</h1>
        <Todos dataObj={dataObj} setDataObj={setDataObj} /><hr />
        <Counter dataObj={dataObj} setDataObj={setDataObj} /><hr /><hr />
        <ReactMemo dataObj={dataObj} setDataObj={setDataObj} />
    </div>
  );
};
export default App;


