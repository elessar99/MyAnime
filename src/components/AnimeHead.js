import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "../views/useClickOutside";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import "./Css/AnimeHead.css"
const AnimeHead = ({onPageChange,onLogReg}) =>{
  const handleClick = useCallback(()=>{
    setDropDown((c)=> !c)
  },[])
  const handleClick2 = useCallback(()=>{
    setDropDown2((k)=> !k)
  },[])
  const handleClick3 = useCallback(()=>{
    setDropDown3((j)=> !j)
  },[])
  const animeState=useSelector(state=>state.animeType)
  const dispatch = useDispatch
  const refDropdown = useRef(null);
  const refDropdown3 = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  useClickOutside(refDropdown, ()=> setDropDown(false));
  useClickOutside(refDropdown3, ()=> setDropDown3(false));
    return (
      <>
      <div className="animeHead">
        <NavLink className="aLogo" to={"/"}><img className="aLogoImg" src={require("../img/logo/animeLogo.png")}></img></NavLink>
        
        <div className="aHeadBtn">
            <div ref={refDropdown}>
            <div onClick={handleClick} className="aHeadBtns">anime türleri</div>
              <div className={dropDown ? "animeTypeDropDown show":"animeTypeDropDown"}>
                <NavLink className="aDropDownBtns" to={"/action"}>Aksiyon</NavLink>
                <NavLink className="aDropDownBtns" to={"/supernatural"}>Doğaüstü Güç</NavLink>
                <NavLink className="aDropDownBtns" to={"/comedy"}>Komedi</NavLink>
              </div>
            </div>
            <a href="https://yeppuu.com/" target="blank" className="aHeadBtns">anime haber</a>
            <a href="https://myanimelist.net/" target="blank" className="aHeadBtns">myAnime</a>
        </div>
        <div className="aLogReg">
          <div style={{display:"flex"}}>
            <div className="aLogRegBtn" onClick={()=>{onLogReg(1)}}>
              giriş yap
            </div>
            <div className="aLogRegBtn" onClick={()=>{onLogReg(2)}}>
              üye ol
            </div>
          </div>
          {false&&(<div>user</div>)}
        </div>
        <div className="iconBody">
          <div>
            {!dropDown2 && (<img className="iconImg" src={require("../img/menu.png")} onClick={()=>{handleClick2()}}></img>)}
            {dropDown2 && (<img className="iconImg" src={require("../img/close1.png")} onClick={()=>{handleClick2()}}></img>)}
          </div>
          <div className={dropDown2 ? "animeMenuDropDown show":"animeMenuDropDown"}>
              <div>
                <div className="">
                  <div style={{display:"flex",flexDirection:"column"}}>
                    <div className="aLogRegBtnMenu" onClick={()=>{onLogReg(1)}}>
                      giriş yap
                    </div>
                    <div className="aLogRegBtnMenu" onClick={()=>{onLogReg(2)}}>
                      üye ol
                    </div>
                  </div>
                    {false&&(<div>user</div>)}
                </div>
              </div>
              <div ref={refDropdown3}>
            <div onClick={handleClick3} className="aMenuBtn" style={{marginTop:"2em"}}>anime türleri</div>
              <div className={dropDown3 ? "animeTypeDropDownMenu show":"animeTypeDropDownMenu"}>
                <NavLink className="aDropDownBtns" to={"/action"}>Aksiyon</NavLink>
                <NavLink className="aDropDownBtns" to={"/supernatural"}>Doğaüstü Güç</NavLink>
                <NavLink className="aDropDownBtns" to={"/comedy"}>Komedi</NavLink>
              </div>
            <a className="aMenuBtnA" href="https://myanimelist.net/" target="blank">anime haber</a>
            <a className="aMenuBtnA" href="https://myanimelist.net/" target="blank">myAnime</a>
            </div>
              </div>
        </div>
        
      </div>
      </>
    );
  }
  AnimeHead.propTypes = {
    onPageChange: PropTypes.func,
    onLogReg: PropTypes.func,


}
AnimeHead.defaultProps = {
    onPageChange: ()=> null,
    onLogReg:  ()=> null,
}
  
  export default AnimeHead ;
  
  