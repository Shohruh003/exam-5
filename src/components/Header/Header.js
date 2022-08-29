
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Images/badiiyat-logo.svg';
import './header.css'
import ManImg from '../../Images/man.jpg'
export const Header = () => {

  const [btn, setBtn] = useState()

  return (
    <div className="header">
        <div className="container">
        <div className="header-inner">
          <img className='logo' src={Logo} alt="site-logo" width='96' height='36'/>
          <nav>
            <ul className='header-list'>
              <li>
                <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/'>Bosh sahifa</NavLink>
              </li>

              <li>
                <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/books'>Kitoblar</NavLink>
              </li>
            </ul>
          </nav>
          <button onClick={()=>{
                setBtn(!btn);
                }} className="header-btn">
           <img className="header-img" alt="image" width={50} height={50} src={ManImg} />
        </button>
        <dialog open={btn} className="header-navigate">
        <NavLink className={({isActive})=>isActive ? "navSet ":"set"} to="AddBooks">Add Books</NavLink>    
        <NavLink className={({isActive})=>isActive ? "navSet":"set"} to="AddAuthor">Add Author</NavLink>    
        <NavLink className={({isActive})=>isActive ? "navSet":"set"} to="setAccaunt">My Accaunt</NavLink>
        <NavLink className={({isActive})=>isActive ? "navSet":"set"} to="login">Log out</NavLink>     
        </dialog>
        </div>
        </div>
      </div>
  )
}