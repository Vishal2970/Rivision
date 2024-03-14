import React, { useRef } from "react";

export const Checkboxes = () => {
  const darkLightRef = useRef(null);

  const handleCheckboxChange = () => {
    darkLightRef.current.innerHTML = darkLightRef.current.innerHTML === 'Dark' ? 'Light' : 'Dark';
  };

  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="flexCheckDefault"
          onChange={handleCheckboxChange}
        />
        <label ref={darkLightRef} className="dark_light" htmlFor="flexCheckDefault">
          Dark
        </label>
      </div>
    </>
  );
};
