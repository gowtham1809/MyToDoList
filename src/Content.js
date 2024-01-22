
import React from "react";

import Itemlt from "./Itemlt";

const Content = ({items,handlecheck,handledelete}) =>{
   
    return(
    <div className='main'>
    {(items.length)?(<>
      
        < Itemlt items={items}
      handlecheck={handlecheck}
      handledelete={handledelete}/>
      </>
    ):(
        <p>your To do list is empty</p>
        )
        }
    </div>
    )
}

export default Content