import { useState } from "react";
import { aksiyonState } from "../store/reducers/AnimeReducer/AksiyonState"
import AnimeCard from "../components/AnimeCard";
import PropTypes from "prop-types";

import "./Css/TypeAnime.css"

const AksiyonAnime = ({onPageChange,nameChange,srcChange}) =>{
  let counter = 0;
  const [pageKey, setPageKey] = useState(1);
  const [state, setstate] = useState(aksiyonState);
    return (
      <>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <div className="aTypePage">
          {state.map((item)=>{
            counter++;
            if(counter<17 && pageKey===1){
              return(
              <AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={item.animeName} src={item.animeSrc}/>
              )
            }
            else if (counter>16 && pageKey===2){
              return(
              <AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={item.animeName} src={item.animeSrc}/>
              )
            }
                   
          })}
        </div>
        <div>
          <button style={{margin:"1em"}} onClick={()=>{setPageKey(1)}}>1</button>
        </div>
      </div>
      </>
    );
  }
  AksiyonAnime.propTypes = {
    onPageChange: PropTypes.func,
    nameChange: PropTypes.func,
    srcChange: PropTypes.func,
  }
  AksiyonAnime.defaultProps = {
    onPageChange: ()=>5,
    nameChange: ()=>null,
    srcChange: ()=>null,
  }
  
  export default AksiyonAnime ;
  
  