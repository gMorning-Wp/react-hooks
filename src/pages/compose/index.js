// compose

// 1. 累加器

const arr = [1, 2, 3, 4, 5];
const accumulator = arr.reduce((accumulator, currentValue) => {
  console.log("累加器-数字:", { accumulator, currentValue });
  return accumulator + currentValue;
});

console.log(accumulator);

// 多次执行函数  ,第一次执行的函数的结果作为第二个函数的入参

function fn1(arg) {
  console.log("fn1", arg);
  return arg;
}

function fn2(arg) {
  console.log("fn2", arg);
  return arg;
}

function fn3(arg) {
  console.log("fn3", arg);
  return arg;
}

// console.log(fn3(fn2(fn1("kkkkk"))));

// 能不能优雅一点写出来呢?

// function compose1(...funs) {
//   funs.reduce((a, b) => {
//     return (...args) => {
//       a(b(...args));
//     };
//   });
// }

// function compose2(...funs) {
//   if (funs.length === 0) {
//     return (args) => args;
//   }
//   return funs.reduce(
//     (a, b) =>
//       (...args) =>
//         a(b(...args))
//   );
// }

// 最终版
function compose3(...funs) {
  // 要考虑边界情况 当函数数组为0 的时候
  if (funs.length === 0) {
    return (args) => args;
  }

  if (funs.length === 1) {
    return funs[0];
  }
  // 这里是一个聚合函数
  return funs.reduce((accumulator, currentValue, currentIndex, arr) => {
    console.log({ accumulator, currentValue, currentIndex, arr });
    return (...args) => {
      return currentValue(accumulator(...args));
    };
  });
}
// 0: fn2(fn1('kkk'))  a:fn1  b:fn2
// 1: fn3(fn2(fn1('kkk')))

console.log(compose3(fn1, fn2, fn3)("kkkkk"));
