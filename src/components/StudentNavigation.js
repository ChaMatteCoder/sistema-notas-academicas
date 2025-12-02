import React from 'react';

const StudentNavigation = ({ allStudents, currentStudentIndex, onStudentChange }) => {
  return (
    <div className="student-navigation mb-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white d-flex align-items-center">
          <i className="bi bi-people-fill me-2"></i>
          <h4 className="mb-0">Selecione o Estudante</h4>
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap gap-2">
            {allStudents.map((student, index) => (
              <button
                key={student.id}
                className={`btn ${currentStudentIndex === index ? 'btn-success' : 'btn-outline-primary'} btn-sm d-flex align-items-center`}
                onClick={() => onStudentChange(index)}
              >
                <i className="bi bi-person-circle me-2"></i>
                {student.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNavigation;