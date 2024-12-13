import React from 'react';

const EmployeeCard = ({ employee }) => {

    return (
        <div>
            <img src={employee.picture.medium} alt="photo de profile de"  />
            <h2>{employee.name.first} {employee.name.last}</h2>
            <p>{employee.email}</p>
        </div>
    );
};

export default EmployeeCard;