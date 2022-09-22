import "./LoginForm.css";
import Input from "../components/Input/Input";

const LoginForm = ({inputsList }) => {

  const getInputslist = ()=>{
    let inputs = [];
    for(let i=0; i < inputsList.length; i++){
    inputs.push(
        <Input
            inputName={inputsList[i].inputName}
            labelCopy={inputsList[i].labelCopy}
        />
    )

    }
    return inputs;
  }

  return (
      <div className="login-container">
        {getInputslist()}
    </div>
  );
};

export default LoginForm;
