import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";

const initialState = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null,
};

function App() {
  const [state, setState] = useState(initialState);

  const handleUpdate = (updatedValue, investmentType) => {
    setState((prevState) => {
      return {
        ...prevState,
        [investmentType]: updatedValue,
      };
    });
  };

  return (
    <div>
      <Header />
      <section id="user-input">
        <span className="input-group">
          <Input
            title="Initial Investment"
            investmentType="initialInvestment"
            value={state.initialInvestment}
            handleChange={handleUpdate}
          />
          <Input
            title="Annual Investment"
            investmentType="annualInvestment"
            value={state.annualInvestment}
            handleChange={handleUpdate}
          />
        </span>
        <span className="input-group">
          <Input
            title="Expected Return"
            investmentType="expectedReturn"
            value={state.expectedReturn}
            handleChange={handleUpdate}
          />
          <Input
            title="Duration"
            investmentType="duration"
            value={state.duration}
            handleChange={handleUpdate}
          />
        </span>
      </section>
      <Results input={state} />
    </div>
  );
}

export default App;
