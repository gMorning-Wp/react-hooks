import { useEffect, useRef, useState } from "react";

/**
 *  用ref的方式记录状态
 */

export default function useCountRef() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const _setCount = () => {
    ref.current += 1;
    setCount(ref.current);
  };
  useEffect(() => {
    console.log("ref:", ref.current);
  }, [count]);

  return {
    count,
    setCount: _setCount,
  };
}
