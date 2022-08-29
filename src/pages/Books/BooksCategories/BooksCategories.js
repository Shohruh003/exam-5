import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BooksCard } from "../BooksCard";

export const BooksCategories = () => {

  const {id} = useParams()

  const [booksCat, setBooksCat] = useState([]);

  useEffect(() => {
    axios
    .get('https://book-service-layer.herokuapp.com/book/genreId/' + id)
    .then(function (response) {
      setBooksCat(response.data)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }, [id]) 
  return (
    <>
      {booksCat.length && (
        <ul className="categories-booksCatList">
          {booksCat.map((e) => (
            <BooksCard key={e.id} item={e}/>
          ))}
        </ul>
      )}
    </>
    
  )
}