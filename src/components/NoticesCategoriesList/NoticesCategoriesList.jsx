import React from 'react';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import css from './NoticesCategoriesList.module.css';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function NoticesCategoriesList({notice}) {
  const [dataElem, setDataElem] = useState(null);
  const [isActive, setIsActive] = useState(false);


  const openModal = (elem) => {
      setDataElem(elem)
      setIsActive(true);
    document.body.style.overflow = 'hidden'; 
  }
  

  const closeModal = () => {
    setIsActive(false);
    document.body.style.overflow = 'auto';
  }
  return (
    <>
       <ul className={css.categories_list}>
              {notice.map(elem => (
                <NoticeCategoryItem elem={elem} openModal={openModal} />
              ))}
      </ul>
       {dataElem && (
        <Modal isActive={isActive} closeModal={closeModal}>
          <div className={css.modal_container}>
            <div className={css.content_container}>
              <div className={css.positional_container}>
                <div className={css.category_container}>
                  <p className={css.category_text}>{dataElem.category}</p>
                </div>
                  <div className={css.img_container}>
                   <img src={dataElem.avatarURL} alt="img_pet" className={css.img} />
                  </div>
              </div>
             
              <div className={css.info_container}>
                <h1 className={css.title}>{dataElem.title}</h1>

                <ul className={css.list_info}>
                  <li className={css.list_info__item}>
                    <span className={css.characteristics}>
                      Name:
                    </span>
                    <span className={css.value}>
                       {dataElem.name}
                    </span>
                  </li>
                  <li className={css.list_info__item}>
                     <span className={css.characteristics}>
                      Birthday:
                    </span>
                     <span className={css.value}>
                       {dataElem.birthday}
                    </span>
                  </li>
                  <li className={css.list_info__item}>
                     <span className={css.characteristics}>
                      Type:
                    </span>
                    <span className={css.value}>
                       {dataElem.type}
                    </span>
                    
                  </li>
                  <li className={css.list_info__item}>
                     <span className={css.characteristics}>
                      Place:
                    </span>
                    <span className={css.value}>
                       {dataElem.location}
                    </span>
                  </li>
                  <li className={css.list_info__item}>
                     <span className={css.characteristics}>
                      The sex:
                    </span>
                    <span className={css.value}>
                      {dataElem.sex}
                    </span>
                    
                  </li>
                  <li className={css.list_info__item}>
                     <span className={css.characteristics}>
                      Email:
                    </span>
                    <a href="user@email.com" className={css.link}>
                       user@email.com
                    </a>
                     
                  </li>
                  <li className={css.list_info__item}>
                     <span className={css.characteristics}>
                      Phone:
                    </span>
                    <a href="+380970632424" className={css.link}>+380970632424</a>
                  </li>
                </ul>
               </div>
            </div>
            <p className={css.comments}><b>Comments:</b> {dataElem.name} would be the perfect addition to an active
              family that loves to play and go on walks.
              I bet he would love having a doggy playmate too! </p>
            
            <div className={css.buttons_container}>
              <button className={css.button_add}>
                Add to 
                <FavoriteBorderIcon className={css.icon} />
              </button>
              <button className={css.button_contact}>
                Contact
              </button>
            </div>
          </div>
        </Modal>
      )}
        
    </>     
  )
}
