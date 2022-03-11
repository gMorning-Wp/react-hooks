import React, { useState, useEffect } from "react";

function Example6() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    console.log("count:", count); //第一次结果0，第二次结果1，第三次结果2，第四次结果3，第五次结果4
    console.log("纯log sum + count:", sum + count); //第一次结果0，第二次结果1，第三次结果3，第四次结果6，第五次结果10
    // setSum(sum + count);
    // log日志不应该在此输出，解决此问题有俩种方式
    console.log("❌ sum:", sum); //第一次结果0，第二次结果0，第三次结果1，第四次结果3，第五次结果6。 得到的是上一次sum的值

    //方式1:
    setSum((sum) => {
      console.log("✅ setSum函数中-sum + count:", sum + count);
      return sum + count;
    });
  }, [count]); // 如果我们将sum这个状态也加进来就会形成递归。 其实eslint的hooks只是起到辅助作用。

  useEffect(() => {
    console.log("✅ useEffect函数中-sum + count:", sum);
  }, [sum]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example6;
