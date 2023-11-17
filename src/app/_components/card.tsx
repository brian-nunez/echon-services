'use client';
import React from 'react';
import TrashIcon from './icons/trash';

type TCardProps = {
  title?: string;
  description?: string;
  linkText?: string;
  showDelete?: boolean;
  onDelete?: () => void;
};

function Card({
  title = '',
  description = '',
  linkText = '',
  showDelete = false,
  onDelete,
}: TCardProps) {
  let cardTitle = !!title ? title : 'View';
  cardTitle = cardTitle.length >= 30 ? `${cardTitle.slice(0, 30)}...` : cardTitle;

  return (
    <React.Fragment>
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>
      <div
        className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
      >
        <div
          className="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mr-4 icon-document-notes fill-cyan-600">
            <path className="primary" d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm2 11a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H8z"></path>
            <polygon className="secondary" points="14 2 20 8 14 8"></polygon>
          </svg>

          <h2 className="mt-4 text-2xl font-medium">{cardTitle}</h2>
        </div>
        <button
          className="absolute top-2 right-2 p-2 rounded hover:bg-gray-200 cursor-pointer"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            onDelete?.();
          }}
        >
          {showDelete && <TrashIcon className="w-8 h-8 fill-red-700 hover:fill-red-900" />}
        </button>
        <div
          className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
        >
          <h3 className="mt-4 text-2xl font-medium">{cardTitle}</h3>

          <p className="mt-4">
            {description.slice(0, 80)}
          </p>

          <p className="mt-8 font-bold text-cyan-700">{linkText}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
