import React from 'react';
import { PetList } from './petsBd';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import css from './NoticesCategoriesList.module.css';

export default function NoticesCategoriesList() {
  return (
      <>
          <ul className={css.categories_list}>
              {PetList.map(elem => (
                  <NoticeCategoryItem elem={elem} />
              ))}
          </ul>
      </>
  )
}
