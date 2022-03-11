// React.memo的使用
import React, { useState } from "react";

const ChildCpt = ({ handleIncrement }) => {
  console.log("子组件更新了");
  const [childState, setChildState] = useState(0);
  return (
    <div
      style={{
        width: 200,
        height: 100,
        padding: 10,
        marginTop: 50,
        border: "1px solid red",
      }}
    >
      子组件的状态：
      {childState}
      <button
        style={{
          marginTop: 20,
          marginLeft: 20,
        }}
        onClick={handleIncrement}
      >
        子组件调用父组件回调函数
      </button>
    </div>
  );
};

// export default ChildCpt;
export default ChildCpt;
