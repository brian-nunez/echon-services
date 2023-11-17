import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-800 p-4 relative bottom-0 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-sm">
          Made by Brian Nunez
        </div>
        <div className="flex">
          <a target="_blank" href="https://twitter.com/brianjoelnunez" className="px-2 py-1 rounded text-white hover:bg-gray-700">Twitter</a>
          <a target="_blank" href="https://www.linkedin.com/in/brian-nunez-767409149/" className="px-2 py-1 rounded text-white hover:bg-gray-700">LinkedIn</a>
          <a target="_blank" href="https://github.com/brian-nunez" className="px-2 py-1 rounded text-white hover:bg-gray-700">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
