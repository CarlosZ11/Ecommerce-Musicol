import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Estadísticas de ventas</h5>
          <iframe 
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
            width: "100%",
            height: "350px",
          }}
          src="https://charts.mongodb.com/charts-musicol-pexcg/embed/charts?id=646415f7-36b3-4610-8147-adc5fc700d0d&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
