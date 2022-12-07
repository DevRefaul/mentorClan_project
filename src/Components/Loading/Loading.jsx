import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Triangle
        height="200"
        width="200"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
