
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ThemeContext } from "../../context/ThemeContext";
import HeroImg from '../../Images/hero-img.png'
import './books.css';
import { BooksCategories } from "./BooksCategories/BooksCategories";

export const Books = () => {
  const {theme} = useContext(ThemeContext)
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
    .get('https://book-service-layer.herokuapp.com/genre')
    .then(function (response) {
      setBooks(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [books]) 

  return (
    <div className={`books ${theme}`}>
      <Header/>
      <div className="container">
        <div className="books-inner">
          <img className="books-heroImg" src={HeroImg} alt="hero-img" width='1262' height='347'/>

          <div className="searchBooks">
              <h2 className="search-heading">Qidirish</h2>
              <form>
                <input className="search-booksInput" type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
                <button className="search-booksButton" type="submit">Izlash</button>
              </form>
            </div>

            <div className="categories-books">
              <h2 className="categories-booksHeading">Asosiy kategriyalar</h2>

                {books.length && (
                  <ul className="categories-booksList">
                    {books.map((e) => <Link className="categories-booksLink" to={`books/${e.id}`} key={e.id}>{e.name}</Link>)}
                  </ul>
                )}

              <Routes>
                <Route path="/books/:id" element={<BooksCategories/>}/>
              </Routes>
            </div>
        </div>
      </div>
    </div>
  )
}