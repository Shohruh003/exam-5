
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { AuthContext } from "../../context/authContext";
import { ThemeContext } from "../../context/ThemeContext";
import HeroImg from '../../Images/hero-img.png';
import { AuthCategories } from "./AuthCategories/AuthCategories";
import './author.css';

export const Author = () => {
  const {token} = useContext(AuthContext);
  const {theme} = useContext(ThemeContext)

  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
    .get('https://book-service-layer.herokuapp.com/genre',{
      headers:{
          Authorization:token.token,
      }
  })
    .then(function (response) {
      setAuthor(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [author, token]) 

  return (
    <div className={`author ${theme}`}>
      <Header/>
      <div className="container">
        <div className="author-inner">
          <img className="author-heroImg" src={HeroImg} alt="hero-img" width='1262' height='347'/>

            <div className="searchAuthor">
              <h2 className="search-heading">Qidirish</h2>
              <form>
                <input className="search-authInput" type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
                <button className="search-authButton" type="submit">Izlash</button>
              </form>
            </div>

            <div className="categories-auth">
              <h2 className="categories-authHeading">Asosiy kategriyalar</h2>

              {author?.length && (
                <ul className="categories-authList">
                  {author.map((e) => <Link className="categories-authLink" to={`/${e.id}`} key={e.id}>{e.name}</Link>)}
                </ul>
              )}

              <Routes>
                <Route path="/:id" element={<AuthCategories/>}/>
              </Routes>
            </div>
        </div>
      </div>
    </div>
  )
}