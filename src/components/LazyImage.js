import React, { useRef, useState } from "react";

const LazyImage = () => {
  const [isloading, setIsloading] = useState(true);
  const placeHolderRef = useRef(null);

  return (
    <>
      {isloading && (
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--6K6DrPH5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bu3wz0j5alt3ou5lvtfk.PNG"
          width="200"
          height="200"
          ref={placeHolderRef}
        />
      )}
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--djd2aHB8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/48jl9uzo4cxr8t2nko1x.png"
        width="200"
        height="200"
        style={isloading ? {display: "none"} : {display: 'block'}}
        onLoad={() => setIsloading(false)}
      />
    </>
  );
};

export default LazyImage;
