import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import { Search } from './Search';
import { useEffect  } from 'react';
import apiRequest from './apiRequest';

function App() {
  const API_URL='http://localhost:3500/items';
  const[newItem,setNewItem]=useState(''); 
  const [items,setitem]=useState([]);
  const  [search,setsearch]=useState('')
   const [fetchE,setfetchE]=useState(null)
   const [isloading,setisloading]=useState(true);

useEffect(()=>{
const fectItems= async()=>{
  try{
    const response=await fetch(API_URL)
    if(!response.ok) throw Error("Data Not Found");
    const listitems= await response.json();
    console.log(listitems)
    setitem(listitems);
    setfetchE(null)
  }catch(err){
    setfetchE(err.message)
  }
  finally{
    setisloading(false)
  }
}

setTimeout(()=>{
  (async()=>await fectItems())()
},2000)

},[])

    const additem=async (n) => {
          const id=items.length?items[items.length-1].id+1:1;

            const addnewitem={id:id,cheaked:false,item:n} 
            const listitems=[...items,addnewitem]
            setitem(listitems)
            const postoptions={
              method:"POST",
              headers: {
                'Content-Type':'application/json'
              },
              body: JSON.stringify(addnewitem)
            }
            const result = await apiRequest(API_URL,postoptions)
            if(result) setfetchE(result)
    }
    const handlecheck = async(id)=>{ 
            console.log(id)
            const cc=items.map((n)=>
                n.id===id ? {...n, cheaked:!n.cheaked}:n)
          setitem(cc)
          const myitem=cc.filter((item)=>item.id===id)

          const updateoptions={
            method:"PATCH",
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify({cheaked:myitem[0].cheaked})
          }
          const requrl=`${API_URL}/${id}`
          const result = await apiRequest(requrl,updateoptions)
          if(result) setfetchE(result)//localStorage.setItem("to_do_list",JSON.stringify(data))
    }
    const handledelete =async(id)=>{
            console.log(id)
            const ccc=items.filter((n)=>n.id!==id )
          setitem(ccc)
          const deleteOption={method:'DELETE'}
          const requrl=`${API_URL}/${id}`
          const result = await apiRequest(requrl,deleteOption)
          if(result) setfetchE(result)
    }
   
     const handleSubmit = (e) =>{
       e.preventDefault()
       if(!newItem) return;
       additem(newItem)
       setNewItem('')
     }
     const handleinput = (e)=>{
      setNewItem(e.target.value);
     }
   
  return (
    
     <div className='App'>  
      <Header title='TO DO LIST'/>
     <AddItem
     handleinput={handleinput}
     newItem={newItem}
     handleSubmit={handleSubmit}
     />
    <Search
      search={search}
      setsearch={setsearch}/>
      <>
        {isloading && <p>Loading....</p>}
        {fetchE &&<p>{`Error:${fetchE}`}</p>}
        {!fetchE && !isloading && 
        <Content items={items.filter(items=>(
          (items.item).toLowerCase()
          ).includes(search.toLowerCase()))}
        handlecheck={handlecheck}
        handledelete={handledelete}
        />}
      </ >
      <Footer length={items.length}/>
  
    </div>

  );
}

export default App;
