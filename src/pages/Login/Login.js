import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import SignIn from '../../Images/sign-in.png';
import './login.css'
import { ThemeContext } from "../../context/ThemeContext";


export const Login = () => {
  const {token, setToken} = useContext(AuthContext);
  const navigate = useNavigate();
  const {theme} = useContext(ThemeContext)
  
  const handleUserLogin = (evt) => {
    evt.preventDefault();
    const [email, password] = evt.target.elements;
    const formData = new FormData();
    formData.append('email', email.value);
    formData.append('password', password.value);

    axios.post('https://book-service-layer.herokuapp.com/user/login', formData)
    .then((data) => {
      if (data.data) {
        setToken(data.data);
        navigate('/');
      }
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className={`signIn ${theme}`}>
      <div className="container">
        <div className="signIn-inner">
          <div className="signIn-imgDiv">
            <img className="signIn-img" src={SignIn} alt="img" />
          </div>
          
          <form className="signIn-form" onSubmit={handleUserLogin}>
          <h1 className="signIn-heading">Sign in</h1>
          <p className="signIn-text">Do not you have an account? <Link className="signIn-link" to='/register'>Sign up</Link></p>

              <input className="signIn-input" type="email" name="email" placeholder="Email" />

            
              <input className="signIn-input" type="password" name="password" placeholder="Password" />

            <button className="signIn-button" type="submit">Next step</button>
          </form>
        </div>
      </div>
    </div>
  );
}