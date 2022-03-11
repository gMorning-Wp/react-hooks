import React, { useState, useCallback } from "react";

import ChildCpt from "./childCpt";
/**
 * 
 *记住 handleClick 是否有意义？

没有，因为调用 useCallback() 需要很多工作，每次渲染 MyComponent 时，都会调用 useCallback() Hook。

从内部来讲，React确保返回相同的对象函数。即便如此，内联函数仍然在每次渲染时创建，useCallback() 只是跳过了它。

即使用 useCallback() 返回相同的函数实例，也不会带来任何好处，因为优化要比没有优化花费更多。

不要忘记增加的代码复杂性，你必须确保 useCallback() 的 deps 与您在 memoized 回调中使用的 deps 保持同步。

 */
const FatherCpt = () => {
  console.log("父组件更新了");
  const [count, setCount] = useState(0);
  // 1.推荐使用这个
  // const handleIncrement = () => console.log("回调被执行");
  // 2. 此时不推荐使用callback
  const handleIncrement = useCallback(() => console.log("回调被执行"), []);

  return (
    <>
      <button
        style={{
          marginTop: 20,
          marginLeft: 20,
        }}
        onClick={() => setCount(Math.random())}
      >
        改变父组件数据
      </button>
      <div
        style={{
          padding: 10,
          width: 300,
          height: 500,
          margin: 20,
          border: "1px solid skyblue",
        }}
      >
        {count}
        <ChildCpt handleIncrement={handleIncrement} />
      </div>
    </>
  );
};

export default FatherCpt;
