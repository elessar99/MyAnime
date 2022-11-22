import "./Css/AnimePage.css"
import PropTypes from "prop-types";
import AnimeCard from "./AnimeCard";
import { useState } from "react";
const AnimePage = ({name,src}) =>{
    const [epKey, setEpKey] = useState(0);
    return (
      <>
      <div className="aFullAnimePage">
        <div className="aPageCard">
        <div className="aPageName">{name}</div>
        <img src={src} className="aPageImg"></img>
        </div>
        <div className="animePageInfoBody">
            <div className="animePageInfo">
                <div className="aPageInfoHeader">Konusu</div>
                <div style={{color:"#f9931e"}}>Burada animenin konusu yazılıp anime hakkında insanların bilgilenmesi sağlanabilir.</div>
            </div>
            <div className="animePageInfo">
                <div className="aPageInfoHeader">Anime Bilgileri</div>
                <div style={{color:"#f9931e"}}>Burada anime hakkında bilgiler yazılıp animenin japonca ismi, stüdyosu, puanı gibi içeriklerle insanların bilgilenmesi sağlanabilir.</div>
            </div>
        </div>
        <div className="aPageEpisodes">
        <div>
            <div className="sezon" onClick={()=>{
                if(epKey===1){
                    setEpKey(0)
                }else{
                   setEpKey(1) 
                }
                
            }}>sezon 1</div>
            {epKey===1&&(<div className="episode">
                <div className="episodes">bölüm 1</div>
                <div className="episodes">bölüm 2</div>
                <div className="episodes">bölüm 3</div>
                <div className="episodes">bölüm 4</div>
                <div className="episodes">bölüm 5</div>
                <div className="episodes">bölüm 6</div>
                <div className="episodes">bölüm 7</div>
                <div className="episodes">bölüm 8</div>
                <div className="episodes">bölüm 9</div>
                <div className="episodes">bölüm 10</div>
            </div>)}
        </div>
        <div>
            <div className="sezon"onClick={()=>{
                if(epKey===2){
                    setEpKey(0)
                }else{
                   setEpKey(2) 
                }
            }}>sezon 2</div>
            {epKey===2&&(<div className="episode">
                <div className="episodes">bölüm 1</div>
                <div className="episodes">bölüm 2</div>
                <div className="episodes">bölüm 3</div>
                <div className="episodes">bölüm 4</div>
                <div className="episodes">bölüm 5</div>
                <div className="episodes">bölüm 6</div>
                <div className="episodes">bölüm 7</div>
                <div className="episodes">bölüm 8</div>
                <div className="episodes">bölüm 9</div>
                <div className="episodes">bölüm 10</div>
            </div>)}
        </div>
        </div>
      </div>
      </>
    );
  }
  AnimePage.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
}
AnimePage.defaultProps = {
    src: "",
    name: "anime adı",
}
  
  export default AnimePage ;
  
  