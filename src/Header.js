import logo from'./logo.svg';
const Header =(props)=>{
    /*const headstyle={color:'red ! importent'}*/
    return (
        <header id='header' /*style={headstyle}*/>
        
      <img src={logo} className='App-logo' alt="logo"/>
      <h1 /*className='textcenter'*/>{props.title}</h1>
      </header>
    )
}
Header.defaultProps={
  title:"To Do List"
}
export default Header;
