import React from "react"
import Typed from "react-typed";
const Header = () => {
    return (
        
         <div className="header-wraper " >
         <div className="main-info" >
             <h1 >Welcome to My Portfolio </h1> <h2>Hello, I am Digvijay Singh <br></br> Front End Developer</h2>
             <Typed className="typed-text"
             strings={["Html 5", " Css 3", "Javascript", "React Js", "Bootstrap", "GitHub"]}
             typeSpeed={20}
             backSpeed={30}
             loop
             />
             <a href="#" className="btn-main-offer">Contact Me</a>
             </div> 
             </div>
        
    )
}

export default Header;



