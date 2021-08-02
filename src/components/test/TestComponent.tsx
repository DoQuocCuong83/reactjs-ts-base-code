import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectStatus, selectValue } from "../../redux/test/index";
import { useAppDispatch } from "../../helper/hooks/useAppDispatch";
import { addValueAsync } from "../../redux/test/async-action";

const TestComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  const value = useSelector(selectValue);
  const status = useSelector(selectStatus);

  const [valueInput, setValueInput] = useState<string>("");

  const handleChangeValue = (e: any) => {
    setValueInput(e.target.value);
  };

  return (
    <>
      <form>
        <input onChange={handleChangeValue} value={valueInput} type="text" />
        <button
          type="button"
          onClick={() => dispatch(addValueAsync(valueInput))}
        >
          Add Value
        </button>
      </form>
      <div>{status === "loading" ? "loading ..." : value}</div>
    </>
  );
};

export default TestComponent;
