export default function Input({ title, investmentType, handleChange }) {
  return (
    <p>
      <label>{title}</label>
      <input
        type="number"
        onChange={(event) => handleChange(event.target.value, investmentType)}
      ></input>
    </p>
  );
}
