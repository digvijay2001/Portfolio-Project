import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; 
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header"


function App() {
  return (
    <>
    <Particles className="particles-canvas"
    params={{
      particles: {
        number : {
          density :{
            enable :true,
            value_area:900
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width:6,
            color: "#f9ab00"
          }
        }
      }
    }}
    />
     <Navbar />
  <Header/>
  </>
);
 }

export default App;

