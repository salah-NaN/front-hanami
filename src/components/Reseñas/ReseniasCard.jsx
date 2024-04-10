import React from 'react';

const ReseniasCard = ({ name, review, rating, date }) => {
  // Función para generar las estrellas de calificación
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>); // Estrella llena
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Estrella vacía
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md px-4 py-3 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <div className="font-medium">{name}</div>
        <div className="text-gray-500 text-sm">{date}</div>
      </div>
      <div className="flex items-center mb-1">
        {renderStars()}
      </div>
      <div className="text-gray-700">{review}</div>
    </div>
  );
};

export default ReseniasCard;
