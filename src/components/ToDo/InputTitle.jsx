
const InputItem = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a new Title"
      />

    </div>

  );
};

export default InputItem;
