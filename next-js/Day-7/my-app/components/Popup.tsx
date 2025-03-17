"use client";

import { useEffect } from "react";

interface popupProps {
  onClose: () => void;
}

 const Popup: React.FC<popupProps> = ({ onClose }) => {
//   
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-semibold">Hello!</h2>
        <p className="mt-2 text-gray-600">
          This is a dynamically imported pop-up.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default Popup;