'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import DiscordIcon from '../icons/discord';

type TDiscordButton = {
  text: string;
  callbackUrl: string;
};

function DiscordButton({
  text = 'Login with Discord',
  callbackUrl = '/',
}: TDiscordButton) {
  return (
    <button
      onClick={() => signIn('discord', { callbackUrl })}
      className="text-white bg-[#5865f2] text-sm sm:text-xl hover:bg-[#5865f2]/90 cursor-pointer touch-manipulation gap-2 flex flex-col sm:flex-row justify-center items-center leading-5 min-w-[10rem] max-w-md whitespace-nowrap relative text-center text-ellipsis select-none align-middle py-3 px-7 rounded border-0 border-[#5865f2] overflow-hidden"
    >
      <DiscordIcon
        className="w-6 h-6 sm:w-7 sm:h-7 p-1 rounded bg-white mr-2"
      />
      <span>{text}</span>
    </button>
  );
}

export default DiscordButton;
