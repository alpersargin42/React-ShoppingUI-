import React, { useState } from "react";
import {email} from "./Validate";

function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  }
  const handleSubmit = () => {
    console.log(email, password);
    if(!email||!password)
      alert("Tüm Alanları Doldurunuz!")
    if((password.length<8 || password.length>20))
      alert("Şifrenizi 8 ile 20 karakter arasında yazınız.")
    //GEÇERSİZ ŞİFRE VEYA KULLANICI ADI UYARISI EKLENECEK....
  }

  return (
      <div className="form">
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h1 className="title logreg">Giriş Yap</h1>
          </div>
          <div>
            <img src={"https://www.clicksus.com/wp-content/uploads/2021/10/e-ticaret.png"} className={"img_img"}/>
          </div>
        </div>
        <div className="form-body">
          <div className="logreg_col">
            <div className="container">
              <div className="email" >
                <label className="form__label logreg_label" for="email">Email </label><br />
                <input type="email" id="email" className="form__input logreg_input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
              </div>
              <div className="password">
                <label className="form__label logreg_label" for="password">Şifrenizi Giriniz </label><br />
                <input className="form__input logreg_input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Şifrenizi Giriniz" minLength="8" maxLength="20" />
              </div>
            </div>
            <div class="footer field is-clearfix">
              <button onClick={() => handleSubmit()} type="submit" class="btn button is-primary is-outlined is-pulled-right logreg_button">Giriş Yap</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LoginForm