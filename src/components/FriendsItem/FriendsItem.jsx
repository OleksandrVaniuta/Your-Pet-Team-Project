import React from "react";
import Modal from 'components/Modal/Modal';
import { useState, useRef, useLayoutEffect } from "react";
import css from './Friends.module.css';

const FriendsItem = ({ item }) => {
   const [modalOpen, setModalOpen] = useState(false);
   const [modalSize, setModalSize] = useState({width: '', height: ''});
   const contentRef = useRef(null);

   const openModal = (evn) => {
    evn.preventDefault()
    setModalOpen(true);
   }

   const closeModal = () => {
    if(modalOpen){
      setModalOpen(false);
    };
   };

   useLayoutEffect(() => {
    if (modalOpen && contentRef.current) {
        const contentWidth = contentRef.current.offsetWidth;
        const contentHeight = contentRef.current.offsetHeight;

        setModalSize({ width: `${contentWidth}px`, height: `${contentHeight}px` });
    }
}, [modalOpen]);


   const renderWorkHoursModal = () => {
    const weekDays = ['MU', 'TU', 'WE','TH', 'FR', 'SA', 'SU']

    if (item.workDays && Array.isArray(item.workDays)) {
      return item.workDays.map((workDay, index) => (
        <li key={index} className={css.modal_li}>
          {workDay.isOpen ? `${weekDays[index]} : ${workDay.from} - ${workDay.to}` : ''}
        </li>
      ));
    }
    return null;
  };


  const formatTime = (time) => {
    return time.padStart(5, '0');
  };

  const renderWorkHours = () => {
    if (item.workDays && Array.isArray(item.workDays)) {
      const workDay = item.workDays.find(workDay => workDay.isOpen);
      if (workDay) {
        const formattedFrom = formatTime(workDay.from);
        const formattedTo = formatTime(workDay.to);
        return ` ${formattedFrom} - ${formattedTo}`;
      }
    }
    return null;
  };
  
    return (
    <li>
      <div className={css.item_container}>
          <div className={css.title_div}><h3>
             <a href={item.url} target="blank" className={css.item_title}>
              {item.title}
            </a>
          </h3>
          </div>

          <div className={css.main_info}>

           <div className={css.info_img}>
            <img src={item.imageUrl} alt="friends-avatar" className={css.item_img} />
          </div>

          <div className={css.items_info}>
            <ul className={css.info_list}>
              
              {item.workDays !== null  && (
              <li className={css.info_list_item}> Time:
            <a href="#" className={css.info_main} onClick={openModal}>{renderWorkHours()}</a>
            </li>
            )}
             {modalOpen && (
              <Modal isActive={modalOpen} closeModal={closeModal}>
                <div className={css.modal} style={{width: modalSize.width, height: modalSize.height}}>
                    <ul className={css.modal_content} ref={contentRef}>{renderWorkHoursModal()}
                </ul>
                </div>
               
              </Modal>
             )}

              {item.addressUrl && (
              <li className={css.info_list_item}>Adress:
              <a href={item.addressUrl} className={css.info_main} target="blank">{item.address}</a>
            </li>
            )}
            
              {item.email && (
              <li className={css.info_list_item}>Email:
              <a href={`mailto:${item.email}`} className={css.info_main} target="blank">{item.email}</a>
            </li>
            )}
            

            {item.phone && (
            <li className={css.info_list_item}>Phone:
              <a href={`tel:${item.phone}`} className={css.info_main} target="blank">{item.phone}</a>
            </li>
            )}
            </ul> 
          </div>
        </div>
      </div>
    </li>
    );
  };
  
  export default FriendsItem;