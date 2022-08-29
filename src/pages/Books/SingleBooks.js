import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { QuoteAuth, QuoteBook, ReviewBook } from "./QuoteAuthor";
import { BooksCategories } from "./BooksCategories/BooksCategories";
import { Header } from "../../components/Header/Header";
import Books from '../../Images/book-img.jpg'
import { ThemeContext } from "../../context/ThemeContext";

export const SingleBooks = () => {
  const {theme} = useContext(ThemeContext)
  
  const {token} = useContext(AuthContext);
  
  const {id} = useParams()
  const [singleBook, setSingleBook] = useState({})

  useEffect(() => {
    axios.get(`https://book-service-layer.herokuapp.com/book/bookId/` + id,{
        headers:{
            Authorization:token.token,
        }
    })
    .then(function (response) {
      setSingleBook(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [id, token])
  return (
    <div className={`singleBook ${theme}`}>
      <Header/>
      <div className="container">
        <div className="singleBook-inner">
          <div className="singleBook-about">
            <img className="singleBook-img" src={`https://book-service-layer.herokuapp.com/book/bookId/${singleBook.image}`}
              onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = Books}} 
              alt={singleBook.title} width='519' height='810'/>
            <div className="singleBook-content">

              <h2 className="singleBook-title">{singleBook.title}</h2>

              <p className="about">Sahifalar soni: <span className="info">{singleBook.page}</span></p>

              <p className="about">Chop etilgan: <span className="info">{singleBook.year}</span></p>

              <p className="about">Janri: <span className="info">{singleBook.genre_id}</span></p>

              <p className="about">Nashriyot: <span className="info">Nihol nashr</span></p>

              <p className="information">To'liq ma'lumotlar 
                <svg className="bootom-icon icon" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72959 0.566895V10.8795L1.40116 8.55106C1.2059 8.3558 0.889316 8.3558 0.694054 8.55106C0.498792 8.74632 0.498792 9.06291 0.694054 9.25817L3.87603 12.4401C4.0713 12.6354 4.38788 12.6354 4.58314 12.4401L7.76512 9.25817C7.96038 9.06291 7.96038 8.74632 7.76512 8.55106C7.56986 8.3558 7.25328 8.3558 7.05801 8.55106L4.72959 10.8795V0.566895H3.72959Z" fill="white"/>
                </svg>
              </p>

              <p className="singleBook-description">{singleBook.description}</p>

              <div className="singleBook-formats">
              <p className="formats-head">Mavjud formatlar</p>
                <div className="formats-inner">
                  <div className="formats">
                    <div className="format">
                      <svg className="format-icon icon" width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.750977 3.70569V6.70569V12.7057V15.7057V17.7057C0.750977 19.9067 2.54498 20.7057 3.75098 20.7057H18.751V18.7057H3.76298C3.30098 18.6937 2.75098 18.5117 2.75098 17.7057C2.75098 16.8997 3.30098 16.7177 3.76298 16.7057H16.751H17.751H18.751V15.7057V13.7057V2.70569C18.751 1.60269 17.854 0.705688 16.751 0.705688H3.75098C2.54498 0.705688 0.750977 1.50469 0.750977 3.70569Z" fill="white"/>
                      </svg>
                      <span className="format-name">Qog'oz kitob</span>
                      <span className="format-price">{singleBook.price}$</span>
                    </div>

                    <div className="format">
                      <svg className="format-icon icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.251 12.7056V10.9986C20.251 6.55663 16.772 2.83763 12.496 2.70863C10.292 2.65763 8.24498 3.44463 6.67998 4.96463C5.11298 6.48463 4.25098 8.52363 4.25098 10.7056V12.7056C3.14798 12.7056 2.25098 13.6026 2.25098 14.7056V18.7056C2.25098 19.8086 3.14798 20.7056 4.25098 20.7056H6.25098V10.7056C6.25098 9.06863 6.89698 7.53963 8.07198 6.39963C9.24598 5.25963 10.807 4.66063 12.435 4.70863C15.643 4.80463 18.251 7.62663 18.251 10.9986V20.7056H20.251C21.354 20.7056 22.251 19.8086 22.251 18.7056V14.7056C22.251 13.6026 21.354 12.7056 20.251 12.7056Z" fill="white"/>
                      <path d="M7.25098 12.7057H9.25098V20.7057H7.25098V12.7057ZM15.251 12.7057H17.251V20.7057H15.251V12.7057Z" fill="white"/>
                      </svg>
                      <span className="format-name">Audio kitob</span>
                      <span className="format-price">17$</span>
                    </div>

                    <div className="format">
                      <svg className="format-icon icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75098 2.70569C5.64798 2.70569 4.75098 3.60269 4.75098 4.70569V20.7057C4.75098 21.8087 5.64798 22.7057 6.75098 22.7057H18.751C19.854 22.7057 20.751 21.8087 20.751 20.7057V4.70569C20.751 3.60269 19.854 2.70569 18.751 2.70569H6.75098ZM6.75098 17.7057V5.70569H18.751L18.753 17.7057H6.75098Z" fill="white"/>
                      </svg>
                      <span className="format-name">Elektron</span>
                      <span className="format-price">15$</span>
                    </div>
                  </div>
                  <button className="formats-button" type="button">Javonga qo’shish </button>
                </div>
              </div>
            </div>
          </div>

          <div className="aboutAuth">
            <div className="aboutAuth-header">
              <ul className='aboutAuth-list'>
                <li>
                  <NavLink className={({Active}) => (Active ? 'aboutAuth-active aboutAuth-link' : 'aboutAuth-link')} to=''>Muallif haqida</NavLink>
                </li>

                <li>
                  <NavLink className={({Active}) => (Active ? 'aboutAuth-active aboutAuth-link' : 'aboutAuth-link')} to=''>Kitobdan iqtiboslar</NavLink>
                </li>

                <li>
                  <NavLink className={({Active}) => (Active ? 'aboutAuth-active aboutAuth-link' : 'aboutAuth-link')} to=''>Kitobxonlar taqrizi</NavLink>
                </li>
              </ul>
            </div>
            <Routes>
              <Route index element={<QuoteAuth/>}/>
              <Route path="/booksQuote" element={<QuoteBook/>}/>
              <Route path="/booksReview" element={<ReviewBook/>}/>
            </Routes>
          </div>

          <div className="liked-boook">
            <div className="leked-header">
              <p className="liked-text">Sizga yoqishi mumkin</p>
              <Link className="liked-link" to="/books">Barchasini ko’rish</Link>
            </div>
            <BooksCategories/>
          </div>
        </div>
      </div>
    </div>
  )
}