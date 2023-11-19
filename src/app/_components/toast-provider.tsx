'use client';
import React, { useState, useEffect, createContext, useContext } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
}

interface ToastContext {
  showToast: (props: ToastProps) => void;
}

const ToastContext = createContext<ToastContext>({
  showToast: () => { },
});

function ToastProvider({
  children,
  initialToastProps,
}: { children: React.ReactNode, initialToastProps?: ToastProps }) {
  const [toastProps, setToastProps] = useState<ToastProps | null>(initialToastProps ?? null);
  const [showToast, setShowToast] = useState(!!initialToastProps?.message);

  const showToastHandler = async (props: ToastProps) => {
    setToastProps(props);
    setShowToast(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timer;

    if (showToast) {
      timeout = setTimeout(() => setShowToast(false), toastProps?.duration || 4000);
    }

    return () => clearTimeout(timeout);
  }, [showToast, toastProps]);

  return (
    <ToastContext.Provider value={{ showToast: showToastHandler }}>
      {children}
      <div
        className={`fixed z-50 right-4 md:right-8 lg:right-12 bottom-4 m-4 p-4 bg-cyan-700 text-cyan-100 font-semibold text-sm md:text-base lg:text-lg rounded shadow-lg border border-cyan-800 transform transition-all duration-300 ease-in-out ${
showToast ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
}`}
      >
        {toastProps?.message}
      </div>
    </ToastContext.Provider>
  );
}

const useToast = () => {
  return useContext(ToastContext);
};

export { ToastProvider, useToast };
