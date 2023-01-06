import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Loading() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 42,
      }}
      spin
    />
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <Spin indicator={antIcon} />
    </div>
  );
}
