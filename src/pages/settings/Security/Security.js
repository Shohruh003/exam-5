import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './security.css'
import { AuthContext } from "../../../context/authContext";

export const Security = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleUserSecurity = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [ email, currentPassword, newPassword] = evt.target.elements;

    formData.append('email', email.value);
    formData.append('currentPassword', currentPassword.value);
    formData.append('newPassword', newPassword.value);

    axios.post('https://book-service-layer.herokuapp.com/user/security', formData)
    .then((data) => {
      if (data.data) {
        setToken(data.data);
        navigate('/');
      }
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="security">
      <div className="container">
        <div className="security-inner">
          
          <form className="security-form" onSubmit={handleUserSecurity}>
              <div className="security-content">
                <h2 className="security-heading">Change Or Recover Your Password:</h2>

                <label className="security-label">Email
                  <input className="security-input" type="email" name="email" placeholder="Email" />
                  <p className="security-text">Please enter your email address.</p>
                </label>


                <label className="security-label">Last Name
                <input className="security-input" type="password" name="currentPassword" placeholder="Current Password" />
                <p className="security-text">Please enter your Current Password.</p>
                </label>


                <div className="security-phoneDiv">
                <label className="security-label">New Password
                <input className="security-input security-phone" type="password" name="newPassword" placeholder="New Password" />
                <p className="security-text">Please enter your  New Password.</p>
                </label>


                <label className="security-label">Confirm Password
                <input className="security-input security-email" type="password" name="confirmPassword" placeholder="Confirm Password" />
                <p className="security-text">Please enter your Confirm Password.</p>
                </label>
                </div>

                <hr className="security-hr"/>

                <button className="security-button" type="submit">Save Changes</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}