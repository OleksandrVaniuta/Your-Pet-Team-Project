import React from 'react';
import css from './NoticeCategoryItem.module.css';
import { pawprint } from 'components/NoticesCategoriesList/img';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from 'react-router-dom';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { selectIsFavorite } from 'redux/notices/selectors';
import { selectUserId } from 'redux/Auth/AuthSelectors';
// import { deleteNotice } from 'redux/notices/operations';
import DltUserAddBtn from 'components/DeleteMyAdd/DeleteMyAdd';

import CloseIcon from '@mui/icons-material/Close';
// import { Link } from 'react-router-dom';
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from 'date-fns';
import Modal from 'components/Modal/Modal';
import MaleIcon from '@mui/icons-material/Male';
import {
  selectIsLoggedIn,
  // selectToken
} from 'redux/Auth/AuthSelectors';
import { useState } from 'react';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataAndOpenModal } from 'redux/notices/operations';
import { addToFavorite } from 'redux/notices/operations';
import { selectNotice } from 'redux/notices/selectors';

function NoticeCategoryItem({ notice }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userId = useSelector(selectUserId);
  const [isActiveInfoModal, setIsActiveInfoModal] = useState(false);
  const [isActiveNologModal, setIsActiveNologModal] = useState(false);
  const dispatch = useDispatch();
  const [togle, setTogle] = useState(
    notice.usersAddToFavorite.includes(userId)
  );

  const noticeItem = useSelector(selectNotice);

  const openInfoModal = async () => {
    try {
      await dispatch(fetchDataAndOpenModal(notice._id));
      // console.log(notice.owner)
      setIsActiveInfoModal(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const openNologModal = () => {
    setIsActiveNologModal(true);
  };

  const closeModal = () => {
    if (isActiveInfoModal) {
      setIsActiveInfoModal(false);
    } else {
      setIsActiveNologModal(false);
    }
  };

  const onClickIconFavorite = () => {
    if (isLoggedIn) {
      dispatch(addToFavorite(notice._id));
      setTogle(!togle);
    } else {
      openNologModal();
    }
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
        return monthsDifference + 'mo.';
      }
      return monthsDifference + 'mos.';
    }
    if (yearsDifference === 1) {
      return yearsDifference + 'yr.';
    }
    return yearsDifference + 'yrs.';
  };

  const catWord = word => {
    if (word.length > 6) {
      return word.slice(0, 5) + '...';
    }
    return word;
  };

  const splitWord = word => {
    if (noticeItem) {
      return word.split('-').join(' ');
    }
  };
  console.log(notice);

  const splitWordCategory = word => {
    if (noticeItem) {
      return word.split('-').join('/');
    }
  };

  return (
    <li key={notice._id} className={css.category_item}>
      <div className={css.category_item__content}>
        {notice.owner === userId && (
          <DltUserAddBtn id={notice._id} title={notice.title} />
        )}
        <div className={css.category_info__container}>
          <div className={css.category_info__flexContainer}>
            {noticeItem && (
              <p className={css.category_text}>
                {notice.category === 'lost-found'
                  ? splitWordCategory(notice.category)
                  : splitWord(notice.category)}
              </p>
            )}
            <div
              className={css.icon_box}
              onClick={() => onClickIconFavorite(notice._id)}
            >
              {togle ? (
                <FavoriteRoundedIcon
                  className={css.icon_favorite}
                  color="#54ADFF"
                />
              ) : (
                <>
                  <FavoriteBorderIcon className={css.icon} />
                  <FavoriteRoundedIcon className={css.icon_hidden} />
                </>
              )}
              {notice.usersAddToFavorite.length !== 0 && (
                <div className={css.favority_number}>
                  <p>{notice.usersAddToFavorite.length}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={css.info_pet__container}>
          <ul className={css.info_pet__list}>
            <li key="1" className={css.info_pet__item}>
              <FmdGoodOutlinedIcon className={css.icon} />
              {catWord(notice.location)}
            </li>
            <li key="2" className={css.info_pet__item}>
              <QueryBuilderIcon className={css.icon} />
              {catWord(age(notice.birthday))}
            </li>
            <li key="3" className={css.info_pet__item}>
              {noticeItem.sex === 'male' ? (
                <MaleIcon className={css.icon} />
              ) : (
                <FemaleIcon className={css.icon} />
              )}
              {notice.sex}
            </li>
          </ul>
        </div>
        <div className={css.img_container}>
          <img src={notice.avatarURL} alt="pet_img" className={css.img_pet} />
        </div>
      </div>
      <div className={css.text_container}>
        <p className={css.title}>{notice.title}</p>
        <button
          className={css.button_more}
          onClick={() => openInfoModal(notice._id)}
        >
          Learn more
          <img src={pawprint} alt="icon_pet" className={css.icon_button} />
        </button>
      </div>
      {isActiveInfoModal && noticeItem && (
        <Modal isActive={isActiveInfoModal} closeModal={closeModal}>
          <div className={css.modal_container}>
            <div className={css.content_container}>
              <div className={css.positional_container}>
                <div className={css.category_container}>
                  <p className={css.category_text}>
                    {splitWord(notice.category)}
                  </p>
                </div>
                <div className={css.img_container}>
                  <img
                    src={noticeItem.avatarURL}
                    alt="img_pet"
                    className={css.img}
                  />
                </div>
              </div>

              <div className={css.info_container}>
                <h1 className={css.title}>{noticeItem.title}</h1>

                <ul className={css.list_info}>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Name:</span>
                    <span className={css.value}>{noticeItem.name}</span>
                  </li>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Birthday:</span>
                    <span className={css.value}>{noticeItem.birthday}</span>
                  </li>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Type:</span>
                    <span className={css.value}>{noticeItem.type}</span>
                  </li>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Place:</span>
                    <span className={css.value}>{noticeItem.location}</span>
                  </li>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>The sex:</span>
                    <span className={css.value}>{noticeItem.sex}</span>
                  </li>
                  {noticeItem.price && (
                    <li className={css.list_info__item}>
                      <span className={css.characteristics}> Price:</span>
                      <span className={css.value}>{noticeItem.price}</span>
                    </li>
                  )}
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Email:</span>
                    <a href="mailto:user@email.com" className={css.link}>
                      {noticeItem.owner.email}
                    </a>
                  </li>
                  {noticeItem.owner.phone && (
                    <li className={css.list_info__item}>
                      <span className={css.characteristics}>Phone:</span>
                      <a href="tel:+380970632424" className={css.linkTel}>
                        {noticeItem.owner.phone}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <p className={css.comments}>
              <b>Comments:</b>{' '}
              {noticeItem.comment ? noticeItem.comment : <>no comment</>}
            </p>
            <div className={css.buttons_container}>
              {!togle ? (
                <button
                  className={css.button_add}
                  onClick={() => onClickIconFavorite(notice._id)}
                >
                  {' '}
                  Add to
                  <FavoriteBorderIcon className={css.icon_like} />
                </button>
              ) : (
                <button
                  className={css.button_remove}
                  onClick={() => onClickIconFavorite(notice._id)}
                >
                  {' '}
                  Remove from <FavoriteBorderIcon className={css.icon_remove} />
                </button>
              )}
             {noticeItem.owner.phone && (
               <button className={css.button_contact}>
                <a href={`tel: ${noticeItem.owner.phone}`} className={css.button_contacn_link}>
                Contact</a>
              </button>
             )}
            </div>
            <button
              type="button"
              className={css.close_modal_button}
              onClick={closeModal}
            >
              <CloseIcon className={css.icon_close} />
            </button>
          </div>
        </Modal>
      )}
      <Modal isActive={isActiveNologModal} closeModal={closeModal}>
        <div className={css.modal_container_log_reg}>
          <h1 className={css.title_modal}>Attention</h1>
          <p className={css.text_modal}>
            We would like to remind you that certain functionality is available
            only to authorized users. If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
          <div className={css.buttons__container}>
            <Link to="/login" className={css.button_reg_log}>
              Log IN
              <img src={pawprint} alt="img" className={css.icon_modal} />
            </Link>
            <Link
              to="/register"
              className={`${css.button_white} ${css.button_reg_log}`}
            >
              Registration
            </Link>
          </div>
          <button className={css.button_close_modal} onClick={closeModal}>
            <CloseIcon className={css.icon_close} />
          </button>
        </div>
      </Modal>
    </li>
  );
}

export default NoticeCategoryItem;
