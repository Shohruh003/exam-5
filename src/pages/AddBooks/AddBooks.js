import React, {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Img from "../../Images/book.png"
import axios from "axios";
import './addBooks.css'
import { ThemeContext } from "../../context/ThemeContext";

export const AddBooks = () => {
  const {theme} = useContext(ThemeContext)
  const {token, setToken} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleUserRegister = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [title, page, year, price, genre_id, country, author_id,description , image] = evt.target.elements;

    formData.append('title', title.value);
    formData.append('page', page.value);
    formData.append('year', year.value);
    formData.append('price', price.value);
    formData.append('genre_id', genre_id.value);
    formData.append('country', country.value);
    formData.append('author_id', author_id.value);
    formData.append('description', description.value);
    formData.append('image', image.files[0]);


    axios.post('https://book-service-layer.herokuapp.com/book', formData,{
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

  const {id} = useParams()

  const [authCat, setAuthCat] = useState([]);

  useEffect(() => {
    axios
    .get('https://book-service-layer.herokuapp.com/author/genreId/' + id)
    .then(function (response) {
      setAuthCat(response.data)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }, [id]) 

  return (
    <div className={`addBooks ${theme}`}>
      <div className="addBooksr">
        <div className="addBooks-inner">
          <div className="addBooks-imgDiv">
              <img className="addBooks-contentImg" src={Img} alt="book" width={350} height={266} />
              <h2 className="addBooks-name">Dunyoning Ishlari</h2>
              <button className="addBooks-button" type="submit">Upload image</button>
          </div>
          
          <form className="addBooks-form" onSubmit={handleUserRegister}>
          <h2 className="addBooks-heading">Add book</h2>

            
              <input className="addBooks-input" type="text" name="title" placeholder="Title"  required/>

            
              <input className="addBooks-input" type="number" name="page" placeholder="Pages"  required/>

            
              <input className="addBooks-input" type="number" name="year" placeholder="Year"  required/>


              <input className="addBooks-input" type="text" name="price" placeholder="Price"  required/>


              <select className="addBooks-input" name="genre_id" required>
                <option value={1}>Temuriylar davri </option>
                <option value={2}>Jadid adabiyoti </option>
                <option value={3}>Sovet davri </option>
                <option value={4}>Mustaqillik davri</option>
              </select>

            
              <input className="addBooks-input" name="author_id" type="number" placeholder="Author" required />

            
              <textarea className="addBooks-input" name="description" placeholder="Description"  required/>

              <label className="addBooks-label">Add Books image
                <input className="addBooks-img" type="file" name="image" placeholder="Author image" required/>
              </label>

            <button className="addBooks-button" type="submit">Next step</button>
          </form>
        </div>
      </div>
    </div>
  );
}