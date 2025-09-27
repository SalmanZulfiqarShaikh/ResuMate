import React from 'react';

function AddButton({ onClick}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-32 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition"
    >
      + Add another 
    </button>
  );
}

export default AddButton;
