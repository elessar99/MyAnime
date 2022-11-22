import { useState } from "react";
import "./Css/Popup.css"

import PropTypes from "prop-types";
import Login from "./Login";
import Register from "./Register";
const Popup = ({onPageChange}) =>{
  const [logReg, setLogReg] = useState(onPageChange);
    return (
      <>
      {logReg !=0 && (<div className="popupPage">
      <div  onClick={()=>{setLogReg(0)}} className="overlay"></div>
        <div className="form">
          {logReg===1 && <Login onChange={(j)=>{setLogReg(j)}}/>}
          {logReg===2 && <Register onChange={(i)=>{setLogReg(i)}}/>}
        </div>
      </div>)}
      </>
    );
  }
  Popup.propTypes = {
    onPageChange: PropTypes.number,


}
Popup.defaultProps = {
    onPageChange: 0,
}
  
  export default Popup ;
  

