'use client';
import { useEffect, useState } from 'react';

type Props = {
  className?: string;
};

const Cursor = ({ className = '' }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof document === 'undefined') return; // Ensure this runs only on the client

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed w-[100%] h-[140%] z-30 transition duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default Cursor;
