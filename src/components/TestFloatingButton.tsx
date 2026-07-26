import React from 'react';

const TestFloatingButton: React.FC = () => {
  return (
    <div className="fixed left-4 bottom-4 z-[9999]">
      <button
        className="flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-lg"
        aria-label="تست"
      >
        TEST
      </button>
    </div>
  );
};

export default TestFloatingButton;