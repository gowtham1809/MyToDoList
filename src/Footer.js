
const Footer=({length})=>{
    const noun = length > 1 ? 'List Items' : 'List Item'
   
    const len= length + ' ' + noun;
    return(
       
        <h1 className="Footer"> {len} </h1>
    )
}
export default Footer