// React.memo的使用
import React from "react";

const ChildCpt = () => {
  console.log("子组件更新了");
  return (
    <div
      style={{
        width: 200,
        height: 50,
        padding: 10,
        marginTop: 50,
        border: "1px solid red",
      }}
    >
      子组件
    </div>
  );
};

// export default ChildCpt;
export default React.memo(ChildCpt);
