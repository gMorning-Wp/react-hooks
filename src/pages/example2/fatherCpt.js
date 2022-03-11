import React, { useState, useCallback } from "react";

import ChildCpt from "./childCpt";

const FatherCpt = () => {
  console.log("父组件更新了");
  const [count, setCount] = useState(0);

  /**
   * 都会重新创建函数，在使用子组件使用memo时，1会产生不必要刷新，2.能书写方式能解决这个问题。 原因：
   * 确实后者是更好的写法，因为 handleIncrement 不会每次在 count 变化时都使用新的。
   * 从而接收这个函数的组件 props 就认为没有变化，避免可能的性能问题。但是有时候如果 DOM 结构很简单，其实怎么写都没什么影响。
   * 但两种代码实际上都是每次创建函数的，只是第二种写法后面创建的函数是被 useCallback 忽略的。
   * 所以这里也看到了 setState 这个 API 的另外一种用法，就是可以接收一个函数作为参数：setSomeState(previousState => {})。
   * 这样在这个函数中通过参数就可以直接获取上一次的 state 的值了，而无需将其作为一个依赖项。这样做可以减少一些不必要的回调函数的创建。

  */

  // 1.
  const handleIncrement = useCallback(() => setCount(count + 1), [count]);
  // 2.
  // const handleIncrement = useCallback(() => setCount((q) => q + 1), []);

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
          height: 100,
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
