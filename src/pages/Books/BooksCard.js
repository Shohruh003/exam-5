import Books from '../../Images/book-img.jpg'
import { Link } from 'react-router-dom';
import './books.css';

export const BooksCard = ({item}) => {

  return (
    <li className="books-card">
      <Link className='books-cardLink' to={'/books/' + item.id}>
          <img className='books-img' src={`https://book-service-layer.herokuapp.com/book/genreId/${item.image}`}
            onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = Books}} 
            alt={item.title}
            width='164'
            height='246'/>

          <p className="books-cardTitle">{item.title}</p>
      </Link>
    </li>
  )
}