import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Ijod from '../../Images/ijod.png'
import { Works } from "./Works/Works"
import './author.css'
import { Header } from "../../components/Header/Header"
import { UseAuth } from "../../Hooks/UseAuth"
import {ThemeContext} from '../../context/ThemeContext'

export const SingleAuth = () => {
  const {theme} = useContext(ThemeContext)

  const {token} = UseAuth()
  
  const id = useParams()
  const [singAuth, setSingAuth] = useState([])

  useEffect(() => {
    axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${id.id}`,{
        headers:{
            Authorization:token.token,
        }
    })
    .then(function (response) {
      setSingAuth(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [id.id])

  return (
    <div className={`singleAuth ${theme}`}>
      <Header/>
      <div className="container">
        <div className="singleAuth-inner">
            <div className="singleAuth-content">
              <img className="singleAuth-img" src={`https://book-service-layer.herokuapp.com/${singAuth.image}`}
                onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpK6TUoN45wegVKWvmBywudI9nQd9p9jVaQ&usqp=CAU";
                  }}  
                alt={singAuth.first_name}
                width='582'
                height='779' />
              <p className="singleAuth-year">
              <span>{singAuth.date_of_birth}</span> - <span>{singAuth.date_of_death}</span>
              </p>
            </div>
          <div className="singleAuth-about">
            <h2 className="singleAuth-name">
              <span>{singAuth.first_name} </span>
              <span>{singAuth.last_name}</span>
            </h2>
            <p className="singleAuth-bio">{singAuth.bio}</p>

            <p className="creativity">
              <img className="creativity-icon" src={Ijod} alt="creativity" width='14' height='20'/>
              <span className="creativity-text">Ijodi</span>
            </p>

            <p className="singleAuth-creativity">Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</p>

            <div className="singleAuth-works">
              <div className="works-header">
                <h3 className="works-heading">Asarlari</h3>
                <Link className="works-link" to='/books'>Barchasini ko’rish</Link>
              </div>

              <Works/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}