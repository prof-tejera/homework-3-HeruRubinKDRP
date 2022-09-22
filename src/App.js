import MediaButtons from "MediaButtons/MediaButtons";
import LoginForm from "LoginForm/LoginForm";
import Pager from "Pager/Pager";
import RadioButtons from "RadioButtons/RadioButtons";
import "./App.css";

const App = () => {
    return (
        <div>
            <h1>Student Name: Heru Rubin</h1>
            <div className="App-component">
                <header className="App-header">
                    Media Buttons Component (Example)
                </header>
                <div className="App-content">
                    <MediaButtons/>
                </div>
            </div>

            <div className="App-component">
                <header className="App-header">Login form component </header>
                <div className="App-content">
                    <LoginForm
                        actionPath="/login"
                        inputsList={
                            [
                                {
                                    inputName: "userName",
                                    labelCopy: "User Name:",
                                    inputType: "text"
                                },
                                {
                                    inputName: "password",
                                    labelCopy: "Password:",
                                    inputType: "password"
                                }
                            ]
                        }
                    />
                </div>
            </div>

            <div className="App-component">
                <header className="App-header">Pager component</header>
                <div className="App-content">
                    <Pager pages={6}/>
                </div>
            </div>

            <div className="App-component">
                <header className="App-header">Radio Buttons component (TODO)</header>
                <div className="App-content">
                    <RadioButtons
                        formAction={"/someAction"}
                        radioGroupName="fruits"
                        radioBtnList={[
                            {
                                id: "fruitApple",
                                value: "Apple"
                            },
                            {
                                id: "fruitOrange",
                                value: "Orange"
                            },
                            {
                                id: "fruitGrape",
                                name: "grape",
                                value: "Grapes"
                            }
                        ]
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
