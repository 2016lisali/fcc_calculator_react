const Key = ({ keyData: { id, value, classname }, handleInput }) => (
  <button id={id} className={classname} onClick={() => handleInput(value)}>
    {value}
  </button>
);

export default Key;