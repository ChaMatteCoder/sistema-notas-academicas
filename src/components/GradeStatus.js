import React from 'react';

const GradeStatus = ({ grade }) => {
  const getStatus = (grade) => {
    if (grade >= 7) return { 
      text: "Acima da Média", 
      color: "success", 
      icon: "bi-arrow-up-circle-fill" 
    };
    if (grade >= 5) return { 
      text: "Na Média", 
      color: "warning", 
      icon: "bi-dash-circle-fill" 
    };
    return { 
      text: "Abaixo da Média", 
      color: "danger", 
      icon: "bi-arrow-down-circle-fill" 
    };
  };

  const status = getStatus(grade);

  return (
    <div className={`alert alert-${status.color} mb-0 p-2 d-flex align-items-center justify-content-center`}>
      <i className={`bi ${status.icon} me-2`}></i>
      <strong>{status.text}</strong>
    </div>
  );
};

export default GradeStatus;