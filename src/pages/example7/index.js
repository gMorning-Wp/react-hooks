// https://blog.csdn.net/qq_38164763/article/details/113532855

import React, { useEffect, useLayoutEffect, useState } from "react";

function Example7() {
  const [state, setState] = useState("hello world");

  useEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    }
    setState("world hello");
  }, []);

  // useLayoutEffect(() => {
  //   let i = 0;
  //   while (i <= 100000000) {
  //     i++;
  //   }
  //   setState("world hello");
  // }, []);

  return (
    <>
      <div>{state}</div>
    </>
  );
}

export default Example7;
