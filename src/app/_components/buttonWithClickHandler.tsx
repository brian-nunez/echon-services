'use client';
import React from 'react';

function ButtonWithClickHandler(props: React.PropsWithChildren<HTMLButtonElement>) {
  return (
    <button {...props} />
  );
}

export default ButtonWithClickHandler;
