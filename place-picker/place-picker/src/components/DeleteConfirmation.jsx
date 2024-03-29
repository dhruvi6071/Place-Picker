import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  useEffect(() => {
    console.log('TIMER SET');
  
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000); // sTime is in milliseconds

    return() => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
     }
  }, [onConfirm]);

  // when we use this approach then in app.jsx handleremove function will be created again and again every time function is run therefore try to use new hook "useCallback".
 

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={3000}/>
    </div>
  );
}
