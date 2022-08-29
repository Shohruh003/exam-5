import { Link } from "react-router-dom"
import './author.css';
export const AuthorCard = ({item}) => {

  return (
    <li className={`author-card`}>
      <Link className="author-cardLink" to={'/author/' + item.id}>

        <img className="author-CardImg" src={`https://book-service-layer.herokuapp.com/${item.image}`} 
          onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpK6TUoN45wegVKWvmBywudI9nQd9p9jVaQ&usqp=CAU";
            }}  
          alt={item.first_name} 
          width='173' 
          height='132'/>

        <p className="author-CardName">
          <span>{item.first_name}</span> - <span>{item.last_name}</span>
        </p>

        <p className="author-CardYear">
          <span>{item.date_of_birth}</span> - <span>{item.date_of_death}</span>
        </p>
      </Link> 
    </li>
  )
}