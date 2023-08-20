import React from 'react'
import { categories } from 'components/NoticesCategoriesList/petsBd';
import { NavLink } from 'react-router-dom';
import css from './NotiesCategoriesNav.module.css';

function NotiesCategoriesNav() {
  return (
    <nav className={css.categoriesList_nav}>
      <ul className={css.categoriesList}>
        {categories.map((category) => (
          <li key={category.name}>
            <NavLink to={`/notices/${category.name}`} className={css.list_item}>
              {category.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NotiesCategoriesNav