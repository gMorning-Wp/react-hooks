import "./App.css";
// import Example1 from "./pages/example1";
// import Example2 from "./pages/example2";
// import Example3 from "./pages/example3";
// import Example4 from "./pages/example4";
// import Example5 from "./pages/example5";
// import Example6 from "./pages/example6";
import Example7 from "./pages/example7";
function App() {
  return (
    <div className="App">
      {/* 例子1  使用React.memo */}
      {/* <Example1 /> */}
      {/* 例子2  使用
        const handleIncrement = useCallback(() => setCount(count + 1), [count]);
        const handleIncrement = useCallback(() => setCount(q => q + 1), []);
        的性能区别
      */}
      {/* <Example2 /> */}
      {/* 例子3  直接使用变量替代useRef的局限性 */}
      {/* <Example3 /> */}
      {/* 例子4  避免过度使用callback，何时不用callback */}
      {/* <Example4 /> */}
      {/* 例子5  useState中初始值设置不要用一个函数调用 */}
      {/* <Example5 /> */}
      {/* 例子6  useState中异步更新问题 */}
      {/* <Example6 /> */}
      {/* 例子7  useLayoutEffect 和useEffect的区别 */}
      <Example7 />
    </div>
  );
}

export default App;
