import React from "react";

type CounterButtonProps = {
  editCount: () => void;
  editValue: string;
};

// props로 내려온 editcount함수를 onClick으로 가지고, props로 내려온 editValue를 텍스트 값으로 가지는 atom Component
function CounterButton(props: CounterButtonProps) {
  return <button onClick={props.editCount}>{props.editValue}</button>;
}

export default CounterButton;
