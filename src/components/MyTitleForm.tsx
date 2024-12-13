import React from "react";
import { useState } from "react";

function MyTitleForm() {
  const [title, setTitle] = useState("Awesome Title");

  const handleChange = (event) => {
    if(event.target.value.includes("*")) {  
        return  
    } else {setTitle(event.target.value);}
    
  };

  return (
    <header>
      <h1>{title}</h1>
      <label htmlFor="title">Title :</label>
      <input id="title" type="text" onChange={handleChange} />
    </header>
  );
}

export default MyTitleForm;