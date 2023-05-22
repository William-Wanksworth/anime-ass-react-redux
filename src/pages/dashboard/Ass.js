import React, { useEffect } from "react";

export const Ass = () => {
  useEffect(() => {
    document.querySelector(".dashboard").style.opacity = 0.2;

    return () => {
      document.querySelector(".dashboard").style.opacity = 1;
    };
  }, []);
  return <div></div>;
};
