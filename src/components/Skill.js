import React from "react";

const Skill = ({skills, addSkills,inputValue,setInputValue}) => {

    return (
      <div id="skill-input">
          <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <button onClick={addSkills}>Add Skill</button>
          <ul>
              {
                skills.map((skill,index)=>{
                  return(
                    <li key={index}>
                    {skill}
                    </li>
                  ) 
                })
              }
            </ul>
      </div>
    )
  }
  
  export default Skill;