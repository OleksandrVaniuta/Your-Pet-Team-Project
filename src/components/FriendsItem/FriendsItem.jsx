import React from "react";
import css from './Friends.module.css';

const FriendsItem = ({ item }) => {

    const renderWorkHours = () => {
      const weekDays = ['MU', 'TU', 'WE','TH', 'FR', 'SA', 'SU']

      if (item.workDays && Array.isArray(item.workDays)) {
        return item.workDays.map((workDay, index) => (
          <li key={index}>
            {workDay.isOpen ? `${weekDays[index]} : ${workDay.from} - ${workDay.to}` : ''}
          </li>
        ));
      }
      return null;
    };
  
    return (
      <li>
        <div className={css.item_container}>
          <div className={css.title_div}>
            <a href={item.url} target="blank" className={css.item_title}>
              {item.title}
            </a>
          </div>
          <div>
            <img src={item.imageUrl} alt="friends-avatar" className={css.item_img} />
            {item.workDays === null || !item.workDays ? ('') : 
            <> 
            <p>Time:</p>
            <ul>
               {renderWorkHours()}
            </ul>
            </> }
          </div>
        </div>
      </li>
    );
  };
  
  export default FriendsItem;