import React from "react";
import CounterButton from "../atoms/basicCounterButton";

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

// 3개의 basicCounterButton AtomComponent를 가지는 molecule Component
function Counter(props: CounterProps) {
  return (
    <div>
      <h1>{props.count}</h1>
      <CounterButton
        editCount={props.onIncrease}
        editValue="+1"
      ></CounterButton>
      <CounterButton
        editCount={props.onDecrease}
        editValue="-1"
      ></CounterButton>
      <CounterButton
        editCount={() => props.onIncreaseBy(5)}
        editValue="+5"
      ></CounterButton>
    </div>
  );
}

export default Counter;
