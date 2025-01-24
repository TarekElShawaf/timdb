import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className={"loadingContainer"}>
      <div className={"spinner"}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
