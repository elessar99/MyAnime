import "./Css/Popup.css"

import PropTypes from "prop-types";
const Login = ({onChange}) =>{
    return (
      <>
      <div className="logRegPage">
      <div className="inputBody">
        <input className="input" placeholder="Kullanıcı Adı..."></input>
        <input className="input" type="password" placeholder="Şifre..."></input>
      </div>
      <div className="buttonBody">
        <button className="button" onClick={()=>{alert("Bu opsiyon şuanda calışmamaktadır !!!")}} > giriş yap </button>
        <button className="button" onClick={()=>{onChange(2)}}> üye ol </button>
      </div>
      </div>
      </>
    );
  }
  Login.propTypes = {
    onChange: PropTypes.func,


}
Login.defaultProps = {
    onChange: ()=> null,
}
  export default Login ;
  
  