export default function Input({ title, handleChange }) {
  return (
    <ul>
      <li>
        <label>{title}</label>
      </li>
      <li>
        <input
          type="number"
          onChange={() => handleChange(event.target.value)}
        ></input>
      </li>
    </ul>
  );
}
