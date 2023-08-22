import React from 'react'
import { categoriesLog, categoriesNoLog } from 'components/NoticesCategoriesList/petsBd';
import { NavLink } from 'react-router-dom';
import css from './NotiesCategoriesNav.module.css';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';

function NotiesCategoriesNav() {
  return (
    <nav className={css.categoriesList_nav}>
      <ul className={css.categoriesList}>
        {selectIsLoggedIn === true ? categoriesLog.map((category) => (
          <li key={category.name}>
             <NavLink to={`/notices/${category.name}`} className={css.list_item}>
              {category.label} 
            </NavLink>
          </li>
        ))
          :
          categoriesNoLog.map((category) => (
           <li key={category.name}>
             <NavLink to={`/notices/${category.name}`} className={css.list_item}>
              {category.label}
            </NavLink>
          </li>
          ))
      }
      </ul>
    </nav>
  );
};

export default NotiesCategoriesNav