import "./Css/AnimeCard.css"
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const AnimeCard = ({name,src,onPageChange,nameChange,srcChange}) =>{
    return (
      <>
      <NavLink className="aFullCard" to={"/anime/"+name}>
        <img className="aCardImg" src={src}></img>
        <div className="aCardInfo">
        {name}
        </div>
      </NavLink>
      </>
    );
  }
  AnimeCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    onPageChange: PropTypes.func,
    nameChange: PropTypes.func,
    srcChange: PropTypes.func,

}
AnimeCard.defaultProps = {
    src: "",
    name: "anime adı",
    onPageChange: ()=>null,
    nameChange: ()=>null,
    srcChange: ()=>null,
}
  
  export default AnimeCard ;
  
  