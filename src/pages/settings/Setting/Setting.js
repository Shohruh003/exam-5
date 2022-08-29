import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import './setting.css';

export const Setting = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className={`setting  ${theme}`}>
      <div className="container">
        <div className="setting-inner">
          
          <form className="setting-form">
              <div className="setting-content">
                <h2 className="setting-heading">Settings</h2>

                <select className="setting-select">
                  <option className="setting-option" value="un">EN</option>
                  <option className="setting-option" value="uz">UZ</option>
                  <option className="setting-option" value="rus">RUS</option>
                </select>

                <select className="setting-select" defaultValue={theme} onChange={(evt) => setTheme(evt.target.value)}>
                  <option className="setting-option" value="dark">Dark</option>
                  <option className="setting-option" value="light">Light</option>
                </select>

                <hr className="setting-hr"/>

                <button className="setting-button" type="submit">Save Changes</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}