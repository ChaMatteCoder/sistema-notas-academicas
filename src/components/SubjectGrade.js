import React from 'react';
import GradeStatus from './GradeStatus';

const SubjectGrade = ({ subject, grade, index }) => {
  return (
    <div className="mb-3">
      <div className="card hover-shadow">
        <div className="card-body">
          <div className="row align-items-center">
            {/* Nome da Matéria */}
            <div className="col-md-5">
              <h5 className="card-title mb-0 d-flex align-items-center">
                <span className="badge bg-secondary me-2">{index + 1}</span>
                <i className="bi bi-book me-2"></i>
                {subject}
              </h5>
            </div>
            
            {/* Nota (Círculo) */}
            <div className="col-md-3">
              <div className="d-flex justify-content-center">
                <div className="grade-circle">
                  <span className="grade-value">{grade.toFixed(1)}</span>
                </div>
              </div>
            </div>
            
            {/* Status */}
            <div className="col-md-4">
              <GradeStatus grade={grade} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectGrade;