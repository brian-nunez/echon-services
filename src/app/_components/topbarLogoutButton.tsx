'use client';
import React from 'react';
import type { HTMLAttributes } from 'react';
import { signOut } from 'next-auth/react';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

function ButtonWithClickHandler(props: ButtonProps) {
  return (
    <button
      onClick={() => signOut()} 
      {...props}
    />
  );
}

export default ButtonWithClickHandler;
