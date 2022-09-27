import React, { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }

  }
  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
    if (password !== confirmPassword)
        alert("Şifreler uyuşmuyor")
    if(!firstName || !lastName || !email||!password||!confirmPassword)
      alert("Tüm Alanları Doldurunuz!")
    if((password.length<8 || password.length>20) || (confirmPassword.length<8 || confirmPassword.length>20) )
      alert("Şifrenizi 8 ile 20 karakter arasında yazınız.")
    }

  return (
      <div className="form">
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h1 className="title logreg">Kayıt Ol</h1>
          </div>
          <div>
            <img src={"https://www.clicksus.com/wp-content/uploads/2021/10/e-ticaret.png"} className={"img_img"}/>
          </div>
        </div>
        <div className="form-body">
          <div className="logreg_col">
            <div className="container">
              <div className="username">
                <label className="form__label logreg_label" for="firstName">Adınız </label><br />
                <input className="form__input logreg_input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="Adınız" />
              </div>
              <div className="lastname">
                <label className="form__label logreg_label" for="lastName">Soyadınız </label> <br />
                <input type="text" id="lastName" value={lastName} className="form__input logreg_input" onChange={(e) => handleInputChange(e)} placeholder="Soyadınız" />
              </div>
              <div className="email">
                <label className="form__label logreg_label" for="email">Email </label><br />
                <input type="email" id="email" className="form__input logreg_input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
              </div>
              <div className="password">
                <label className="form__label logreg_label" for="password">Şifrenizi Giriniz </label><br />
                <input className="form__input logreg_input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Şifrenizi Giriniz" minLength="8" maxLength="20" />
              </div>
              <div className="confirm-password">
                <label className="form__label logreg_label" for="confirmPassword">Şifrenizi Tekrar Giriniz </label><br />
                <input className="form__input logreg_input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Şifrenizi Tekrar Giriniz" minLength="8" maxLength="20" />
              </div>
            </div>
            <div class="footer field is-clearfix">
              <button onClick={() => handleSubmit()} type="submit" class="btn button is-primary is-outlined is-pulled-right logreg_button_reg">Kayıt Ol</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RegistrationForm