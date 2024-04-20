import React, { useEffect, useState } from "react";


const Test1 = () => {
  const [flag, setFlag] = useState(false);
  const [timer, setTimer] = useState(0);

//   pa
  useEffect(() => {
    let id ;
    if (flag) {
       id = setInterval(() => {
        setTimer((prev) => {
            return prev + 1;
        });
      }, 1000);
    }else if(!flag && timer !== 0){
        clearInterval(id);
    }

    return () => {
        clearInterval(id);
    }
  }, [flag]);

  const startTimer = (e) => {
    setFlag(true);
  };

  const stopTimer = () => {
    setFlag(false);
  }

  const resumeTimer = () => {
    setFlag(true);
  }
  return (
    <>
      <p> {timer} </p>
      <button type="button" onClick={startTimer}>
        {" "}
        Start{" "}
      </button>
    <button type='button' onClick={stopTimer}> stop </button>
    <button type='button' onClick={resumeTimer}> resume </button>
    </>
  );
};

export default Test1;
