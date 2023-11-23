import React, {useState } from "react"

const ChildComponent = ({sendToparent}) =>{
    const [color, setcolor] = useState("")
   const handleClick = (e) =>{
    const {value } = e.value ;
    setcolor(value)
    sendToparent(value)
   }


   return (
    <div>
        <input  type="text" onChange={handleClick} value={color}/>
    </div>
   )
}


export default ChildComponent