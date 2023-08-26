import React from 'react';
import css from './NoticeCategoryItem.module.css';
import { pawprint } from 'components/NoticesCategoriesList/img';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from 'date-fns';
import MaleIcon from '@mui/icons-material/Male';
import { useState } from 'react';

function NoticeCategoryItem({ elem, openModal }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const onClickIconFavorit = () => {
    setIsFavorited(prevState => !prevState);
  };
  const age = inputDate => {
    const currentDate = new Date();
    const [day, month, year] = inputDate.split('-').map(Number);

    const parsedInputDate = new Date(year, month - 1, day);

    const yearsDifference = differenceInYears(currentDate, parsedInputDate);
    const monthsDifference = differenceInMonths(currentDate, parsedInputDate);
    const daysDifference = differenceInDays(currentDate, parsedInputDate);

    if (yearsDifference === 0) {
      if (monthsDifference === 0) {
        if (daysDifference === 1) {
          return daysDifference + 'day';
        }
        return daysDifference + 'days';
      }
      if (monthsDifference === 1) {
        return monthsDifference + 'month';
      }
      return monthsDifference + 'months';
    }
    if (yearsDifference === 1) {
      return yearsDifference + 'yaer';
    }
    return yearsDifference + 'yaers';
  };

  const catWord = word => {
    if (word.length > 6) {
      return word.slice(0, 5) + '...';
    }
    return word;
  };

  const splitWord = word => {
    return word.split('-').join(' ');
  };
  return (
    <li key={elem.id} className={css.category_item}>
      <div className={css.category_item__content}>
        <div className={css.category_info__container}>
          <div className={css.category_info__flexContainer}>
            <p className={css.category_text}>{splitWord(elem.category)}</p>
            <div className={css.icon_box} onClick={onClickIconFavorit}>
              {isFavorited ? (
                <FavoriteRoundedIcon className={css.icon_favorite} />
              ) : (
                <>
                  <FavoriteBorderIcon className={css.icon} />
                  <FavoriteRoundedIcon className={css.icon_hidden} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className={css.info_pet__container}>
          <ul className={css.info_pet__list}>
            <li key="1" className={css.info_pet__item}>
              <FmdGoodOutlinedIcon className={css.icon} />
              {catWord(elem.location)}
            </li>
            <li key="2" className={css.info_pet__item}>
              <QueryBuilderIcon className={css.icon} />
              {catWord(age(elem.birthday))}
            </li>
            <li key="3" className={css.info_pet__item}>
              {elem.sex === 'male' ? (
                <MaleIcon className={css.icon} />
              ) : (
                <FemaleIcon className={css.icon} />
              )}
              {elem.sex}
            </li>
          </ul>
        </div>
        <div className={css.img_container}>
          <img src={elem.avatarURL} alt="pet_img" className={css.img_pet} />
        </div>
      </div>
      <div className={css.text_container}>
        <p className={css.title}>{elem.title}</p>
        <button className={css.button_more} onClick={() => openModal(elem)}>
          Learn more
          <img src={pawprint} alt="icon_pet" className={css.icon_button} />
        </button>
      </div>
    </li>
  );
}

export default NoticeCategoryItem;
