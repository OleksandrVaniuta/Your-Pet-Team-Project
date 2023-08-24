import React from 'react';
import {
  categoriesLog,
  categoriesNoLog,
} from 'components/NoticesCategoriesList/petsBd';
import { NavLink } from 'react-router-dom';
import css from './NotiesCategoriesNav.module.css';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';

function NotiesCategoriesNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.categoriesList_nav}>
      <ul className={css.categoriesList}>
        {isLoggedIn
          ? categoriesLog.map(category => (
              <li key={category.name}>
                <NavLink
                  to={`/notices/${category.name}`}
                  className={css.list_item}
                >
                  {category.label}
                </NavLink>
              </li>
            ))
          : categoriesNoLog.map(category => (
              <li key={category.name}>
                <NavLink
                  to={`/notices/${category.name}`}
                  className={css.list_item}
                >
                  {category.label}
                </NavLink>
              </li>
            ))}
      </ul>
    </nav>
  );
}

export default NotiesCategoriesNav;
