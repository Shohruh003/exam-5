import React, { useContext } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { MyAccaunt } from "./MyAccaunt/MyAccaunt";
import { Security } from "./Security/Security";
import './setAccaunt.css'
import { Setting } from "./Setting/Setting";

export const SetAccaunt = () => {

  const {theme} = useContext(ThemeContext);
  
  return (
    <div className={`setAccaunt ${theme}`}>
      <div className="container">
        <div className="setAccaunt-inner">
              <ul className='setAccaunt-list'>
                <li>
                  <NavLink className={({isActive}) => (isActive ? 'setAccaunt-active setAccaunt-link' : 'setAccaunt-link')} to='/setAccaunt'><span>1</span>My account</NavLink>
                </li>

                <li>
                  <NavLink className={({isActive}) => (isActive ? 'setAccaunt-active setAccaunt-link' : 'setAccaunt-link')} to='security'><span>2</span> Security</NavLink>
                </li>

                <li>
                  <NavLink className={({isActive}) => (isActive ? 'setAccaunt-active setAccaunt-link' : 'setAccaunt-link')} to='setting'><span>3</span>Settings</NavLink>
                </li>

                <li>
                  <NavLink className={({isActive}) => (isActive ? 'setAccaunt-active setAccaunt-link' : 'setAccaunt-link')} to='/'><span>4</span>Home Page</NavLink>
                </li>
              </ul>
              <Routes>
                <Route index element={<MyAccaunt/>}/>
                <Route path="/security" element={<Security/>}/>
                <Route path="/setting" element={<Setting/>}/>
              </Routes>
        </div>
      </div>
    </div>
  );
}