import React from "react";
import{FaTrashAlt}from "react-icons/fa";
const Itemlt =({items,handlecheck,handledelete})=>{
    return(
      
        <ul >
        {items.map((n)=>(
           <li className="item" key={n.id}>
               <input type="checkbox" 
               onClick={()=>handlecheck(n.id)}
               checked={n.cheaked}>
               </input>

               <label
               style={n.cheaked ?{textDecoration:'line-through'}:null}
               onDoubleClick={()=>handlecheck(n.id)}>{n.item}</label>

               <FaTrashAlt
               onClick={()=>handledelete(n.id)}
               role="button"
               tabIndex="0"
               aria-label={`Delete ${n.n}`}/>
            </li>
        ))}
          
       </ul>   


    )
}
export default Itemlt