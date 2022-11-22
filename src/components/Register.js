import "./Css/Popup.css"

import PropTypes from "prop-types";
const Register = ({onChange}) =>{
    return (
      <>
      <div className="logRegPage">
      <div className="inputBody">
      <input className="input" type="email" placeholder="E-mail Giriniz..."></input>
        <input className="input" placeholder="Kullanıcı Adı Giriniz..."></input>
        <input className="input" type="password" placeholder="Şifre Giriniz..."></input>
        <input className="input" type="password" placeholder="Şifreyi Tekrar Giriniz..."></input>
      </div>
      <div className="buttonBody">
        <button className="button" onClick={()=>{alert("Bu opsiyon şuanda calışmamaktadır !!!")}}> üye ol </button>
        <button className="button" onClick={()=>{onChange(1)}}> giriş yap </button>
      </div>
      </div>
      </>
    );
  }
  Register.propTypes = {
    onChange: PropTypes.func,


}
Register.defaultProps = {
    onChange: ()=> null,
}
  
  export default Register ;
  
  