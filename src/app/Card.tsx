import React, { useState } from 'react';
import classNames from 'classnames';


interface CardProps {
  id: number;
  onHover: (id: number) => void;
  isBouncing: boolean;
}

const Card: React.FC<CardProps> = ({ id, onHover, isBouncing }) => {
  return (
    <>
    <div
      className={classNames('w-64 h-40 bg-white shadow-lg card-hover m-4', { 'card-bounce': isBouncing })}
      onMouseEnter={() => onHover(id)}
    >
      <div className="flex items-center justify-center h-full">
        Card {id}
      </div>
    </div>
    
    </>
  );
};

export default Card;