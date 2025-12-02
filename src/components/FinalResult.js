import React from 'react';

const FinalResult = ({ grades, average, isApproved }) => {
  const totalPoints = grades.reduce((total, grade) => total + grade, 0);
  const subjectsAbove = grades.filter(g => g >= 7).length;
  const subjectsAverage = grades.filter(g => g >= 5 && g < 7).length;
  const subjectsBelow = grades.filter(g => g < 5).length;

  return (
    <div className={`card ${isApproved ? 'border-success' : 'border-danger'}`}>
      <div className={`card-header ${isApproved ? 'bg-success text-white' : 'bg-danger text-white'} d-flex align-items-center`}>
        <i className="bi bi-graph-up-arrow me-2"></i>
        <h4 className="mb-0">Resultado Final</h4>
        <span className="ms-auto badge bg-light text-dark d-flex align-items-center">
          <i className={`bi ${isApproved ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'} me-1`}></i>
          {isApproved ? 'APROVADO' : 'REPROVADO'}
        </span>
      </div>
      <div className="card-body">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="p-3">
              <h6 className="text-muted d-flex align-items-center justify-content-center">
                <i className="bi bi-calculator me-2"></i>
                Média Final
              </h6>
              <div className="average-circle mx-auto">
                <span className={`average-value ${isApproved ? 'text-success' : 'text-danger'}`}>
                  {average.toFixed(1)}
                </span>
              </div>
              <div className="mt-2">
                <small className="text-muted d-flex align-items-center justify-content-center">
                  <i className="bi bi-flag-fill me-1"></i>
                  Mínima: 7.0
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <h6 className="text-muted d-flex align-items-center justify-content-center">
                <i className="bi bi-plus-circle me-2"></i>
                Total de Pontos
              </h6>
              <h3 className="text-primary">{totalPoints.toFixed(1)}</h3>
              <div className="mt-2">
                <small className="text-muted d-flex align-items-center justify-content-center">
                  <i className="bi bi-list-ol me-1"></i>
                  Soma de todas as notas
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <h6 className="text-muted d-flex align-items-center justify-content-center">
                <i className="bi bi-clipboard-check me-2"></i>
                Situação
              </h6>
              <h2 className={isApproved ? 'text-success' : 'text-danger'}>
                <i className={`bi ${isApproved ? 'bi-trophy-fill' : 'bi-exclamation-triangle-fill'} me-2`}></i>
                {isApproved ? 'APROVADO' : 'REPROVADO'}
              </h2>
              <div className="mt-2">
                <small className={isApproved ? 'text-success' : 'text-danger'}>
                  <i className={`bi ${isApproved ? 'bi-hand-thumbs-up-fill' : 'bi-lightbulb-fill'} me-1`}></i>
                  {isApproved ? 'Desempenho satisfatório' : 'Necessita de reforço'}
                </small>
              </div>
            </div>
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card bg-light">
              <div className="card-body p-3">
                <h6 className="text-muted mb-2 d-flex align-items-center">
                  <i className="bi bi-bar-chart-line-fill me-2"></i>
                  Estatísticas das Notas
                </h6>
                <div className="row text-center">
                  <div className="col-4">
                    <div className="d-flex flex-column align-items-center">
                      <span className="badge bg-success mb-1">
                        <i className="bi bi-arrow-up-circle me-1"></i>
                        {subjectsAbove} matérias
                      </span>
                      <small className="text-success">Acima da Média</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex flex-column align-items-center">
                      <span className="badge bg-warning text-dark mb-1">
                        <i className="bi bi-dash-circle me-1"></i>
                        {subjectsAverage} matérias
                      </span>
                      <small className="text-warning">Na Média</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex flex-column align-items-center">
                      <span className="badge bg-danger mb-1">
                        <i className="bi bi-arrow-down-circle me-1"></i>
                        {subjectsBelow} matérias
                      </span>
                      <small className="text-danger">Abaixo da Média</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalResult;