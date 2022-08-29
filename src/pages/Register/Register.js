import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import SignUp from '../../Images/sign-up.png';
import './register.css'
import { ThemeContext } from "../../context/ThemeContext";

export const Register = () => {
  const {theme} = useContext(ThemeContext)
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleUserRegister = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    
    const [first_name, last_name, number, email, password] = evt.target.elements;
    
    formData.append('first_name', first_name.value);
    formData.append('last_name', last_name.value);
    formData.append('phone', number.value);
    formData.append('email', email.value);
    formData.append('password', password.value);

    axios.post('https://book-service-layer.herokuapp.com/user/register', formData)
    .then((data) => {
      if (data.data) {
        setToken(data.data);
        navigate('/');
      }
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className={`register ${theme}`}>
      <div className="container">
        <div className="register-inner">
          <div className="register-imgDiv">
            <img className="register-img" src={SignUp} alt="img" />
          </div>
          
          <form className="register-form" onSubmit={handleUserRegister}>
          <h2 className="register-heading">Sign up</h2>
          <p className="register-text">Already have an account? <Link className="register-link" to='/login'>Sign in</Link></p>

            
              <input className="register-input" type="text" name="first_name" placeholder="First name" />

            
              <input className="register-input" type="text" name="last_name" placeholder="Last name" />

            
              <input className="register-input" type="number" name="phone" placeholder="Phone" />

            
              <input className="register-input" type="email" name="email" placeholder="Email" />

            
              <input className="register-input" type="password" name="password" placeholder="Password" />

            <button className="register-button" type="submit">Next step</button>
          </form>
        </div>
      </div>
    </div>
  );
}