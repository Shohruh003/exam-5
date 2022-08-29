import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import './myAccaunt.css'
import MyAccauntImg from '../../../Images/man.jpg'
import { AuthContext } from "../../../context/authContext";

export const MyAccaunt = () => {
  const {token} = useContext(AuthContext);
  const [me, setMe] = useState({});

  useEffect(() => {
    axios.get('https://book-service-layer.herokuapp.com/user/me', {
      headers: {
        Authorization:token.token,
      },
    })
    .then((res) => setMe(res.data))
    .catch((error) => console.log(error))
  }, [token])

  return (
    <div className="myAccaunt">
      <div className="container">
        <div className="myAccaunt-inner">
          
          <form className="myAccaunt-form">
              <div className="myAccaunt-imgLabel">
              <label>
                {me.image !== null ?  <img className="myAccaunt-img" alt="img"  width={175} height={175} src={`https://book-service-layer.herokuapp.com/${me.image}`} /> : <img alt="img" className="myAccaunt-img" width={175} height={175} src={MyAccauntImg} />}
                <input className="myAccaunt-imgFile" type="file" name="image" required/>
              </label>
              </div>
              <div className="myAccaunt-content">
                <h2 className="myAccaunt-heading">My profile</h2>

                <label className="myAccaunt-label">First Name
                  <input className="myAccaunt-input" type="text" defaultValue={me.first_name} name="first_name" placeholder="First name" required/>
                  <p className="myAccaunt-text">Please enter your first name.</p>
                </label>


                <label className="myAccaunt-label">Last Name
                <input className="myAccaunt-input" type="text" defaultValue={me.last_name} name="last_name" placeholder="Last name" required/>
                <p className="myAccaunt-text">Please enter your last name.</p>
                </label>


                <div className="myAccaunt-phoneDiv">
                <label className="myAccaunt-label">Phone
                <input className="myAccaunt-input myAccaunt-phone" type="number" defaultValue={me.phone} name="phone" placeholder="Phone" required/>
                <p className="myAccaunt-text">Please enter your  phone number.</p>
                </label>


                <label className="myAccaunt-label">Email
                <input className="myAccaunt-input myAccaunt-email" type="email" defaultValue={me.email} name="email" placeholder="Email" required/>
                <p className="myAccaunt-text">Please enter your email address.</p>
                </label>
                </div>

                <hr className="myAccaunt-hr"/>

                <button className="myAccaunt-button" type="submit">Save Changes</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}