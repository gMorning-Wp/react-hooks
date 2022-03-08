import "./App.css";
// import Example1 from "./pages/example1";
import Example2 from "./pages/example2";

function App() {
  return (
    <div className="App">
      {/* 例子1  使用React.memo */}
      {/* <Example1 /> */}
      {/* 例子2  直接使用变量替代useRef的局限性 */}
      <Example2 />
    </div>
  );
}

export default App;
