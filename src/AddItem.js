import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem=({handleinput,newItem,handleSubmit})=>{
    const inputref=useRef()
    return(
        <form className = 'addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem"> Add Item</label>
                <input
                        autoFocus
                        ref={inputref}
                        id = 'addItem'
                        
                        type="text"
                        placeholder='Add Item'
                        required
                        value = {newItem}
                        onChange ={handleinput}
                />
                <button
                    type = 'submit'
                    aria-label = 'Add Item'
                   onClick={()=>inputref.current.focus()}
                    //onClick={(e)=>setNewItem(e.target.value)}
                >
                    <FaPlus />
                </button>
        </form>
    )

}
export default AddItem