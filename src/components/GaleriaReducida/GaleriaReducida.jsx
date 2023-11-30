import React, { useState } from "react";
import { CardInTheGallery } from "../CardInTheGallery/CardInTheGallery";
import"./GaleriaReducida.css"

export const GaleriaReducida = ({ galeriaItems }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);


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
    <button
      className={`previewButton ${currentPage === 1 ? 'disabled' : ''}`}
      onClick={prevPage}
      disabled={currentPage === 1}
    >
      A
    </button>
    {currentItems?.map((item) => (
      <figure key={item.id} className="gallery-item slide-in">
        <CardInTheGallery image={item?.image} />
      </figure>
    ))}
    <button
      className={`previewButton ${currentPage === totalPages ? 'disabled' : ''}`}
      onClick={nextPage}
      disabled={currentPage === totalPages}
    >
      S
    </button>
  </>
  );
};
