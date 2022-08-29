import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Img from "../../Images/avloniy.jpg"
import axios from "axios";
import './addAuthor.css'
import { ThemeContext } from "../../context/ThemeContext";

export const AddAuthor = () => {
  const {token, setToken} = useContext(AuthContext);
  const {theme} = useContext(ThemeContext)
  const navigate = useNavigate();
  
  const handleUserRegister = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [first_name, last_name, date_of_birth, date_of_death, genre_id, country, bio, image] = evt.target.elements;

    formData.append('first_name', first_name.value);
    formData.append('last_name', last_name.value);
    formData.append('date_of_birth', date_of_birth.value);
    formData.append('date_of_death', date_of_death.value);
    formData.append('genre_id', genre_id.value);
    formData.append('country', country.value);
    formData.append('bio', bio.value);
    formData.append('image', image.files[0]);

    axios.post('https://book-service-layer.herokuapp.com/author', formData,{
      headers:{
          Authorization:token.token,
      }
    })
    .then((data) => {
      if (data.data) {
        setToken(data.data);
        navigate('/');
      }
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className={`addAuthor ${theme}`}>
      <div className="addAuthorr">
        <div className="addAuthor-inner">
          <div className="addAuthor-imgDiv">
              <img className="addAuthor-contentImg" src={Img} alt="book" width={350} height={266} />
              <h2 className="addAuthor-name">Abdulla Avloniy</h2>
              <button className="addAuthor-button" type="submit">Upload image</button>
          </div>
          
          <form className="addAuthor-form" onSubmit={handleUserRegister}>
          <h2 className="addAuthor-heading">Add Author</h2>

            
              <input className="addAuthor-input" type="text" name="first_name" placeholder="First name" required/>

            
              <input className="addAuthor-input" type="text" name="last_name" placeholder="Last name" required/>

            
              <input className="addAuthor-input" type="number" name="date_of_birth" placeholder="Date of birth" required/>


              <input className="addAuthor-input" type="number" name="date_of_death" placeholder="Date of death" required/>


              <select className="addAuthor-input" name="genre_id"required>
                <option value={1}>Temuriylar davri </option>
                <option value={2}>Jadid adabiyoti </option>
                <option value={3}>Sovet davri </option>
                <option value={4}>Mustaqillik davri</option>
              </select>

            
              <input className="addAuthor-input" type="text" name="country" placeholder="Country" required/>

            
              <textarea className="addAuthor-input" name="bio" placeholder="Description" required/>

              <label className="addAuthor-label">Add Author image
                <input className="addAuthor-img" type="file" name="image" placeholder="Author image"required/>
              </label>

            <button className="addAuthor-button" type="submit">Next step</button>
          </form>
        </div>
      </div>
    </div>
  );
}