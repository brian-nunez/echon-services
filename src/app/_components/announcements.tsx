import React from 'react';

function Announcements({ children }: { children:  }): JSX.Element {
  return (
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        {children}
      </p>
    </div>
  );
}

export default Announcements;
