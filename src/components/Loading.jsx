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
    <div className="flex justify-center items-center h-screen bg-white/50">
      <Spin indicator={antIcon} />
    </div>
  );
}
