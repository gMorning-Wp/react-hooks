import { useEffect, useState } from "react";

/**
 * 使用变量方式记录状态
 */

let tempCount = 0;

function useCount() {
  const [count, setCount] = useState(0);

  const _setCount = () => {
    tempCount += 1;
    setCount(tempCount);
  };

  useEffect(() => {
    console.log("var:", tempCount);
  }, [count]);

  return {
    count,
    setCount: _setCount,
  };
}
export default useCount;
