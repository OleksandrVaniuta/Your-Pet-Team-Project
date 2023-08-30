import React from "react";

const WorkDaysList = ({workDays}) => {
     

    const renderWorkHours = () => {
      const weekDays = ['MU', 'TU', 'WE','TH', 'FR', 'SA', 'SU']

      if (workDays && Array.isArray(workDays)) {
        return workDays.map((workDay, index) => (
          <li key={index}>
            {workDay.isOpen ? `${weekDays[index]} : ${workDay.from} - ${workDay.to}` : ''}
          </li>
        ));
      }
      return null;
    };

    return(
        <div>
            {renderWorkHours()}
        </div>
    )
};

export default WorkDaysList;