import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const initialState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 5.2,
  duration: 24,
};

function App() {
  const [state, setState] = useState(initialState);

  const inputIsValid = state.duration > 0;

  const handleUpdate = (updatedValue, investmentType) => {
    setState((prevState) => {
      return {
        ...prevState,
        [investmentType]: +updatedValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput state={state} handleChange={handleUpdate} />
      {!inputIsValid && (
        <p className="center">
          Please enter a duration that is greater than zero.
        </p>
      )}
      {inputIsValid && <Results input={state} />}
    </>
  );
}

export default App;
