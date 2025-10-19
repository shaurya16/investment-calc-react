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

  const handleUpdate = (updatedValue, investmentType) => {
    setState((prevState) => {
      return {
        ...prevState,
        [investmentType]: +updatedValue,
      };
    });
  };

  return (
    <div>
      <Header />
      <UserInput state={state} handleChange={handleUpdate} />
      <Results input={state} />
    </div>
  );
}

export default App;
