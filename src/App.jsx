import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./componets/counterSlice";
import { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleIncAmountClick = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>-</button>
      <br />
      <br />
      <input
        type="Number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleIncAmountClick}> Inc by amount</button>
    </div>
  );
};

export default App;
