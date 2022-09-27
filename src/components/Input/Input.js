import "./Input.css"

// props : label name, input name,
const Input = ({inputName, labelCopy, inputType }) => {

  return (
      <div className="input-container">
        <label htmlFor={inputName}>{labelCopy}</label>
        <input className="input-item" type={inputType} />
      </div>
  );
};

export default Input;
