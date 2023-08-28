import React from 'react';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import css from './NoticesCategoriesList.module.css';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import noImageData from './img/no-img.jpg';
import { pawprint } from './img';
import { Link } from 'react-router-dom';

export default function NoticesCategoriesList({ notice }) {
  const [dataElem, setDataElem] = useState(null);
  const [isActiveInfoModal, setIsActiveInfoModal] = useState(false);
  const [isActiveNologModal, setIsActiveNologModal] = useState(false);

  const fetchDataAndOpenModal = async elem => {
    try {
      const response = await fetch(
        `https://your-pet-backend-cmwy.onrender.com/api/notices/notice/${elem._id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const openInfoModal = elem => {
    fetchDataAndOpenModal(elem)
      .then(data => setDataElem(data))
      .catch(error => console.error(error));
    setIsActiveInfoModal(true);
  };

  const openNologModal = () => {
    setIsActiveNologModal(true);
  };

  const closeModal = () => {
    if (isActiveInfoModal) {
      setDataElem(null);
      setIsActiveInfoModal(false);
    } else {
      setIsActiveNologModal(false);
    }
  };
  const splitWord = word => {
    return word.split('-').join(' ');
  };

  return (
    <>
      {notice.length === 0 ? (
        <div className={css.noImg}>
          <img src={noImageData} alt="No Data" />
        </div>
      ) : (
        <ul className={css.categories_list}>
          {notice.map(elem => (
            <NoticeCategoryItem
              elem={elem}
              openInfoModal={openInfoModal}
              openNologModal={openNologModal}
            />
          ))}
        </ul>
      )}
      {dataElem && (
        <Modal isActive={isActiveInfoModal} closeModal={closeModal}>
          <div className={css.modal_container}>
            <div className={css.content_container}>
              <div className={css.positional_container}>
                <div className={css.category_container}>
                  <p className={css.category_text}>
                    {splitWord(dataElem.category)}
                  </p>
                </div>
                <div className={css.img_container}>
                  <img
                    src={dataElem.avatarURL}
                    alt="img_pet"
                    className={css.img}
                  />
                </div>
              </div>

              <div className={css.info_container}>
                <h1 className={css.title}>{dataElem.title}</h1>

                <ul className={css.list_info}>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Name:</span>
                    <span className={css.value}>{dataElem.name}</span>
                  </li>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Birthday:</span>
                    <span className={css.value}>{dataElem.birthday}</span>
                  </li>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Type:</span>
                    <span className={css.value}>{dataElem.type}</span>
                  </li>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Place:</span>
                    <span className={css.value}>{dataElem.location}</span>
                  </li>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>The sex:</span>
                    <span className={css.value}>{dataElem.sex}</span>
                  </li>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>Email:</span>
                    <a href="user@email.com" className={css.link}>
                      {dataElem.owner.email}
                    </a>
                  </li>
                  {dataElem.owner.phone && (
                    <li className={css.list_info__item}>
                      <span className={css.characteristics}>Phone:</span>
                      <a href="+380970632424" className={css.link}>
                        {dataElem.owner.phone}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <p className={css.comments}>
              <b>Comments:</b>{' '}
              {dataElem.comment ? dataElem.comment : <>no comment</>}
            </p>

            <div className={css.buttons_container}>
              <button className={css.button_add}>
                Add to
                <FavoriteBorderIcon className={css.icon} />
              </button>
              <button className={css.button_contact}>Contact</button>
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
    </>
  );
}
