import "./RadioButtons.css";

const RadioButtons = ({radioGroupName, radioBtnList}) => {


    const getRadioButtons = () => {
        let listOfRadioButtons = []
        for (let i = 0; i < radioBtnList.length; i++) {
            listOfRadioButtons.push(
                <li >
                    <input
                        type="radio"
                        id={radioBtnList[i].id}
                        name={radioGroupName}
                        value={radioBtnList[i].value}
                    />
                    <label>{radioBtnList[i].value}</label>
                </li>
            )
        }
        return listOfRadioButtons;
    }

    return (
        <ul className="radio-button-container">
            {getRadioButtons()}
        </ul>


    );
};

export default RadioButtons;
