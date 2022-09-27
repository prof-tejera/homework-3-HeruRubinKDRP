import "./LoginForm.css";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const LoginForm = ({inputsList, actionPath }) => {

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
      <form className="login-container" action={actionPath}>
        {getInputslist()}
       <div>
         <input name="rememberMe" type="checkbox"/>
         <label htmlFor="rememberMe" >Remember Me</label>
       </div>
        <input type="submit" value="Submit"/>
    </form>
  );
};

export default LoginForm;
