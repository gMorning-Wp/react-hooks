import useCount from "./useCountState";
import useCountRef from "./useCountRef";

const Comp1 = () => {
  const { count, setCount } = useCount();
  return (
    <div>
      <span>{count} </span>
      <button onClick={setCount}>add 1</button>
    </div>
  );
};

const Comp2 = () => {
  const { count, setCount } = useCount();
  return (
    <div>
      <span>{count} </span>
      <button onClick={setCount}>add 1</button>
    </div>
  );
};

const CompRef1 = () => {
  const { count, setCount } = useCountRef();
  return (
    <div>
      <span>{count} </span>
      <button onClick={setCount}>add 1</button>
    </div>
  );
};

const CompRef2 = () => {
  const { count, setCount } = useCountRef();
  return (
    <div>
      <span>{count} </span>
      <button onClick={setCount}>add 1</button>
    </div>
  );
};

export default function Example3() {
  return (
    <div className="App">
      <p>假设需求：编写一个自定义 Hook，该 Hook 作用是一个计数器，每次 +1。</p>
      <div>
        <h2>1. 使用变量方法（不推荐）</h2>
        <p>
          该方法的问题在于，当有多个组件实例使用了这个自定义
          Hook，其使用的变量都是同一个引用，导致冲突。
        </p>
        <Comp1 />
        <br />
        <Comp2 />
      </div>

      <div>
        <h2>
          2. 使用 <code>useRef</code> 方法（推荐）
        </h2>
        <p>
          使用 useRef 会在每个实例中都生成一个
          ref，独立于其他实例，互不干扰，不会出现冲突。
        </p>
        <CompRef1 />
        <br />
        <CompRef2 />
      </div>
    </div>
  );
}
