import React from 'react'
import css from './NoticeCategoryItem.module.css';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { pawprint } from 'components/NoticesCategoriesList/img';



function NoticeCategoryItem({ elem }) {
  return (
    <li key={elem.id} className={css.category_item}>
          <div className={css.category_item__content}>
              <div className={css.category_info__container}>
                  <p className={css.category_text}>{elem.category}</p>
                  <div className={css.icon_box}>
                      <FavoriteBorderIcon className={css.icon} />
                      <FavoriteRoundedIcon className={css.icon_hidden}/>
                  </div>
                 
                </div>
              <div className={css.info_pet__container}>
                 
           <ul className={css.info_pet__list}>
             <li key='1' className={css.info_pet__item}>
                <FmdGoodOutlinedIcon className={css.icon} />
               {elem.infoPet.city}
             </li>
             <li key='2' className={css.info_pet__item}>
                <QueryBuilderIcon className={css.icon} />             
               {elem.infoPet.age}
             </li>
             <li key='3' className={css.info_pet__item}>
                <FemaleIcon className={css.icon} />             
               {elem.infoPet.sex}
             </li>
            </ul>
         </div>
         <div className={css.img_container}>
           <img src={elem.img} alt="pet_img" className={css.img_pet} />
         </div>
       </div>
     <div className={css.text_container}>
       <p className={css.title}>{elem.title}</p>
              <button className={css.button_more}>Learn more
                  <img src={pawprint} alt="icon_dog" className={css.icon_button} /> 
            </button>
     </div>
    </li>
  )
}

export default NoticeCategoryItem