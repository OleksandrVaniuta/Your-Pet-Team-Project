import React from 'react';
import {
  categoriesLog,
  categoriesNoLog
} from 'components/NoticesCategoriesList/petsBd';
import {
  Link,
  useLocation
} from 'react-router-dom';
import css from './NotiesCategoriesNav.module.css';
import { selectIsLoggedIn } from 'redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';

function NotiesCategoriesNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { pathname } = useLocation();

  const isActiveLink = (category) => {
    if (pathname.includes(category)) {
        return `${css.list_item} ${css.active}`
    }
    else {
      return `${css.list_item}`
    }
  }
  return (
    <nav className={css.categoriesList_nav}>
      <ul className={css.categoriesList}>
        {isLoggedIn
          ? categoriesLog.map(category => (
              <li key={category.name}>
                <Link
                  to={`/notices/${category.name}`}
                  className={isActiveLink(category.name)}
                >
                  {category.label}
                </Link>
              </li>
            ))
          : categoriesNoLog.map(category => (
              <li key={category.name}>
                <Link
                 to={`/notices/${category.name}`}
                 className={isActiveLink(category.name)}
                >
                  {category.label}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  );
}

export default NotiesCategoriesNav;
