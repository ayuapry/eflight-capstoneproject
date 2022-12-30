import React from "react";
import { Skeleton } from "antd";

const SkeletonSearch = (props) => {
  const sklSrc = (i) => {
    return (
      <div
        key={i}
        className="flex md:h-48 h-32 shadow-sm bg-gray-100 rounded-xl lg:p-8 p-4 mb-4 lg:mx-20"
      >
        <Skeleton
          avatar
          paragraph={{
            rows: 2,
          }}
          active
        />
        <div className="hidden lg:block ml-8">
          <Skeleton.Button
            active
            size={"large"}
            shape={"default"}
            style={{ width: "10rem" }}
          />
        </div>
      </div>
    );
  };

  const comp = [];

  for (let index = 0; index < props.length; index++) {
    comp.push(sklSrc(index));
  }
  return <div className="w-full">{comp}</div>;
};

export default SkeletonSearch;
