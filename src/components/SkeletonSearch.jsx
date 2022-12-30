import React from "react";
import { Skeleton } from "antd";

const SkeletonSearch = () => {
  return (
    <div className="w-full">
      <div className="flex h-48 shadow-sm bg-gray-100 rounded-xl lg:p-8 p-4 mb-4 lg:mx-20">
        <Skeleton
          avatar
          paragraph={{
            rows: 3,
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
      <div className="flex h-48 shadow-sm bg-gray-100 rounded-xl lg:p-8 p-4 mb-4 lg:mx-20">
        <Skeleton
          avatar
          paragraph={{
            rows: 3,
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
      <div className="flex h-48 shadow-sm bg-gray-100 rounded-xl lg:p-8 p-4 mb-4 lg:mx-20">
        <Skeleton
          avatar
          paragraph={{
            rows: 3,
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
    </div>
  );
};

export default SkeletonSearch;
