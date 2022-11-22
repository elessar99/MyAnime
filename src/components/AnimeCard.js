import "./Css/AnimeCard.css"
import PropTypes from "prop-types";
const AnimeCard = ({name,src,onPageChange,nameChange,srcChange}) =>{
    return (
      <>
      <div className="aFullCard" onClick={()=>{
        onPageChange(5)
        nameChange(name)
        srcChange(src)
      }}>
        <img className="aCardImg" src={src}></img>
        <div className="aCardInfo">
        {name}
        </div>
      </div>
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
  
  