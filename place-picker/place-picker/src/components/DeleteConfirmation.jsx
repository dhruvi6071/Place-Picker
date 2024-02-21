import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const[remainingTime, setRemainingTime] = useState(3000);
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('INTERVAL');
      setRemainingTime((prevTime) => prevTime-10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
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
      <progress value={remainingTime}  max={3000}></progress>
    </div>
  );
}
