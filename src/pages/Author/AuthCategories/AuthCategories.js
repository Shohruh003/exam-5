import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AuthorCard } from "../AuthorCard";

export const AuthCategories = () => {

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
    <>
      {authCat?.length && (
        <ul className="categories-authCatList">
          {authCat.map((e) => (
            <AuthorCard key={e.id} item={e}/>
          ))}
        </ul>
      )}
    </>
    
  )
}