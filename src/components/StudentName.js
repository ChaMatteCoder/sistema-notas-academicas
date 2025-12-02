import React from 'react';

const StudentName = ({ name, index, total }) => {
  return (
    <div className="text-center mb-4">
      <div className="card shadow-sm border-primary">
        <div className="card-body">
          <h2 className="card-title display-5 text-primary d-flex align-items-center justify-content-center">
            <i className="bi bi-person-badge-fill me-3"></i>
            {name}
          </h2>
          <p className="text-muted mb-0 d-flex align-items-center justify-content-center">
            <i className="bi bi-journal-text me-2"></i>
            Boletim Acadêmico - Estudante {index + 1} de {total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentName;