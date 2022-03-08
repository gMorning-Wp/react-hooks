import React, { useState } from "react";

import ChildCpt from "./childCpt";

const FatherCpt = () => {
  console.log("父组件更新了");
  const [data, setData] = useState("父组件数据没有改变之前");
  const [childData] = useState("子组件数据");

  return (
    <>
      <button
        style={{
          marginTop: 20,
          marginLeft: 20,
        }}
        onClick={() => setData(`父组件数据改变之后${Math.random()}`)}
      >
        改变父组件数据
      </button>
      <div
        style={{
          padding: 10,
          width: 300,
          height: 100,
          margin: 20,
          border: "1px solid skyblue",
        }}
      >
        父组件：
        <p>data: {data}</p>
        <ChildCpt childData={childData} />
      </div>
    </>
  );
};

export default FatherCpt;
