// DelayedLoader.js
import React, { useState, useEffect } from "react";

const DelayedLoader = ({isLoading, delay = 300, slowLoadingThreshold = 2000 }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [isSlowLoading, setIsSlowLoading] = useState(false);

  useEffect(() => {
    let delayTimer, slowTimer;

    if (isLoading) {
      delayTimer = setTimeout(() => setShowLoader(true), delay);
      slowTimer = setTimeout(() => setIsSlowLoading(true), slowLoadingThreshold);
    } else {
      setShowLoader(false);
      setIsSlowLoading(false);
      clearTimeout(delayTimer);
      clearTimeout(slowTimer);
    }

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(slowTimer);
    };
  }, [isLoading, delay, slowLoadingThreshold]);

  return (
    showLoader && (
      <div className="flex flex-col items-center justify-center h-[80vh]">

      <div
        className={`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-lightColor1  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
      </div>
    )
  );
};

export default DelayedLoader;
