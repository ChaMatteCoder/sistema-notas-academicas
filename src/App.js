import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentName from './components/StudentName';
import SubjectGrade from './components/SubjectGrade';
import FinalResult from './components/FinalResult';
import StudentNavigation from './components/StudentNavigation';

function App() {
  // Lista de todos os estudantes
  const allStudents = [
    {
      id: 1,
      name: "Maria Eduarda Santos",
      subjects: [
        { name: "Matemática", grade: 8.5 },
        { name: "Português", grade: 7.0 },
        { name: "História", grade: 6.5 },
        { name: "Geografia", grade: 9.0 },
        { name: "Ciências", grade: 5.5 }
      ]
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      subjects: [
        { name: "Matemática", grade: 4.2 },
        { name: "Português", grade: 5.0 },
        { name: "História", grade: 6.8 },
        { name: "Geografia", grade: 3.5 },
        { name: "Ciências", grade: 4.0 }
      ]
    },
    {
      id: 3,
      name: "Ana Beatriz Lima",
      subjects: [
        { name: "Matemática", grade: 9.8 },
        { name: "Português", grade: 9.5 },
        { name: "História", grade: 8.7 },
        { name: "Geografia", grade: 9.2 },
        { name: "Ciências", grade: 9.0 }
      ]
    },
    {
      id: 4,
      name: "Pedro Henrique Costa",
      subjects: [
        { name: "Matemática", grade: 7.0 },
        { name: "Português", grade: 7.2 },
        { name: "História", grade: 7.5 },
        { name: "Geografia", grade: 6.9 },
        { name: "Ciências", grade: 7.1 }
      ]
    },
    {
      id: 5,
      name: "Juliana Ferreira",
      subjects: [
        { name: "Matemática", grade: 5.0 },
        { name: "Português", grade: 5.3 },
        { name: "História", grade: 5.7 },
        { name: "Geografia", grade: 4.9 },
        { name: "Ciências", grade: 5.2 }
      ]
    }
  ];

  // Estado para controlar o estudante atual
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const currentStudent = allStudents[currentStudentIndex];

  // Função para alternar entre estudantes
  const handleStudentChange = (index) => {
    setCurrentStudentIndex(index);
  };

  // Função para calcular a média
  const calculateAverage = () => {
    const sum = currentStudent.subjects.reduce((total, subject) => total + subject.grade, 0);
    return sum / currentStudent.subjects.length;
  };

  const average = calculateAverage();
  const isApproved = average >= 7;

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          
          {/* Barra de Navegação */}
          <StudentNavigation 
            allStudents={allStudents}
            currentStudentIndex={currentStudentIndex}
            onStudentChange={handleStudentChange}
          />

          {/* Nome do Aluno */}
          <StudentName 
            name={currentStudent.name}
            index={currentStudentIndex}
            total={allStudents.length}
          />
          
          {/* Lista de Matérias */}
          <div className="mb-4">
            <div className="card shadow">
              <div className="card-header bg-light d-flex align-items-center">
                <i className="bi bi-journal-bookmark-fill me-2"></i>
                <h4 className="mb-0">Notas por Disciplina</h4>
              </div>
              <div className="card-body">
                {currentStudent.subjects.map((subject, index) => (
                  <SubjectGrade
                    key={index}
                    subject={subject.name}
                    grade={subject.grade}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Resultado Final */}
          <FinalResult 
            grades={currentStudent.subjects.map(s => s.grade)}
            average={average}
            isApproved={isApproved}
          />
        </div>
      </div>
    </div>
  );
}

export default App;