import { useState } from "react";
import { GithubLogo } from "./GithubLogo";
import { Title } from "./components/Title"
import { ClearText } from "./components/ClearText";
import { CopyToClipboard } from "./components/CopyClipboard";
import { GenerateWords } from "./components/GenerateWords";
import { WordSelection } from "./components/WordSelection";
import "./App.css"; //import before or after component imports?
import { Censor } from "./components/CensoredTitle";
import { Checkbox } from "./components/CensoredCheckBox";

//Main component - no added components
function App() {

  //define defualt states for useState 
  const defaultVerbiage = 'Lorem ipsum motherfu..',
		defaultSelection = '1',
		defaultCensor = false;

  const [vulgar, setVulgar] = useState(defaultVerbiage),
    [selection, setSelection] = useState(defaultSelection),
    [censored, setCensored] = useState(defaultCensor);


  //DEBUGGING:debugging method
  const consoleLogFile = () => {
		console.log(selection);
	}

  return (
    <div className="App">
	  <Title title="Vulgar Ipsum"/>
    <GithubLogo/>
		{/* DEGUGGING:This button is for debugging  */}
		{/* <button className="button1" id='displayDataButton' onClick={consoleLogFile}>
			Console Log 
        </button> */}
      <table id="table">
				<tbody>
					<tr id='dropDown'>
						<td>
							<WordSelection 
                onSelectChange={setSelection}/>
						</td>
						<td>
              <Censor 
                censorTitle="Censored"/>
						</td>
						<td>
              <Checkbox 
                checkBoxMarked={setCensored}/>
						</td>
					</tr>
					<tr id='navigationButtons'>
						<td>
							<GenerateWords 
								randomWordSet={setVulgar} 
                isCensored={censored}
                wordSelection={selection}/>
						</td>
						<td>
							<ClearText 
								clearTextToDefault={setVulgar} 
								defaultVerbiage={defaultVerbiage}/>
						</td>
						<td>
							<CopyToClipboard 
								vulgarOutput={vulgar}/>
						</td>
					</tr>
					<tr id="outputBox">
						<td id="outputText">
							{vulgar}
						</td>
					</tr>
				</tbody>
      </table>
    </div>
  );
}
export default App;
