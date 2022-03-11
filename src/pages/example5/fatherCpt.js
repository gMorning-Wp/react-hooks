import React, { useState } from "react";

import ChildCpt from "./childCpt";
/**
 * useState中初始值设置不要用一个函数调用
 */
let kk = 0;

const FatherCpt5 = () => {
  console.log("父组件更新了");
  //1. 不要这么写
  const [count, setCount] = useState(calc());
  // 2. 可以这么写
  // const [count, setCount] = useState(calc);
  function calc() {
    console.log("calc执行了");
    kk++;
    console.log(kk); // ?为啥每次加2
    // 情况1. 每次此组件重新刷新的时候，calc都会被执行。如果此函数中有一个副作用，会导致不可预估的bug
    return 5;
  }

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
        <div> count:{count}</div>
        <div>kk:{kk}</div>

        <ChildCpt />
      </div>
    </>
  );
};

export default FatherCpt5;
