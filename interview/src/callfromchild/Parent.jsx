import React, { useState } from "react"
import ChildComponent from "./child"


const ParentComponent = () =>{
 const [color, setcolor] = useState("")

  const getcolor = (data) =>{
    setcolor(data)
  }

    return (
        <div>
            <h1>{color}</h1>
            <div className="w-4 h-4 p-2 shadow-lg " style={{background:`${color}`}}>
            <ChildComponent  getcolor={getcolor} />
            </div>
        </div>
    )
}

export default ParentComponent