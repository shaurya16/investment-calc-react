import { useState } from "react";
import Input from "./Input";

const initialState = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null,
};

export default function InputGroup() {
  const [state, setState] = useState(initialState);

  const handleInitialInvestment = (initialInvestmentValue) => {
    setState((state) => {
      const updatedState = state;
      updatedState.initialInvestment = initialInvestmentValue;
      return updatedState;
    });
  };

  return (
    <div id="user-input">
      <span className="input-group">
        <Input
          title="Initial Investment"
          handleChange={handleInitialInvestment}
        />
        <Input title="Annual Investment" />
      </span>
      <span className="input-group">
        <Input title="Expected Return" />
        <Input title="Duration" />
      </span>
    </div>
  );
}
