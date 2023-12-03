import { useState } from 'react'
import { CardCircuit } from '../CardCircuit/CardCircuit'
import './GaleriaReducidaCircuits.css'
import React from 'react'


export const GaleriaReducidaCircuits = ({galeriaItems}) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const sportPath = `/motogp/circuits/`
    const currentItems = galeriaItems?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    // Calcular el número total de páginas
    const totalPages = Math.ceil((galeriaItems?.length || 0) / itemsPerPage);
    const nextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    return (
      <>
      <div className="galeriaReducidaCircuits">
          <button
            className={`previewButton ${currentPage === 1 ? "disabled" : ""}`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
  <span class="material-symbols-outlined arrow">
  arrow_back
  </span>
          </button>
        <div className="noSe">
        {currentItems?.map((item) => (
            <CardCircuit
              image={item?.image}
              key={item?._id}
              id={item?._id} 
              sportPath={sportPath}
            />
          ))}
        </div>
  
          <button
            className={`previewButton ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
  <span class="material-symbols-outlined arrow">
  arrow_forward
  </span>
          </button>
        </div>
      </>
    );
}
