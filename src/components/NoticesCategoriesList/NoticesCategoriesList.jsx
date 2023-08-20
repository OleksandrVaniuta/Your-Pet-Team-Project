import React from 'react';
import { PetList } from './petsBd';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import css from './NoticesCategoriesList.module.css';
import NotiesCategoriesNav from 'components/NoticesCategoriesNav/NotiesCategoriesNav';

export default function NoticesCategoriesList() {
  return (
      <>
        <NotiesCategoriesNav/>
          <ul className={css.categories_list}>
              {PetList.map(elem => (
                  <NoticeCategoryItem elem={elem} />
              ))}
          </ul>
      </>
  )
}
