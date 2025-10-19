export default function UserInput({ state, handleChange }) {
  return (
    <section id="user-input">
      <span className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={state.initialInvestment}
            onChange={(event) =>
              handleChange(event.target.value, "initialInvestment")
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={state.annualInvestment}
            onChange={(event) =>
              handleChange(event.target.value, "annualInvestment")
            }
          ></input>
        </p>
      </span>
      <span className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={state.expectedReturn}
            onChange={(event) =>
              handleChange(event.target.value, "expectedReturn")
            }
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={state.duration}
            onChange={(event) => handleChange(event.target.value, "duration")}
          ></input>
        </p>
      </span>
    </section>
  );
}
