import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import '../author.css';
import { UseAuth } from "../../../Hooks/UseAuth";
import Books from '../../../Images/book-img.jpg'

export const Works = () => {
  const {token} = UseAuth()

  const id = useParams()

  const [work, setWork] = useState([]);

  useEffect(() => {
    axios
    .get(`https://book-service-layer.herokuapp.com/author/books/${id.id}`, {
      headers:{
          Authorization:token.token,
      }
  })
    .then(function (response) {
      setWork(response.data)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }, [id.id]) 
  return (
    <>
      {work?.length && (
        <ul className="works-list">
          {work.map((e) => (
            <li key={e.id} className="work-card">
            <Link className='work-cardLink' to={`/books/${e.id}`}>
              <img className='work-img' src={`https://book-service-layer.herokuapp.com/author/books/${e.image}`}
                onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = Books}} 
              alt={e.title} width='164' height='246'/>
      
              <p className="work-CardTitle">{e.title}</p>
            </Link>
          </li>
          ))}
        </ul>
      )}
    </>
  )
}