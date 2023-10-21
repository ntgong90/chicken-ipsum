import { useState } from "react";
import "./App.css";
import { generateWords } from "./components";
import { GithubLogo } from "./GithubLogo";

//beginning of application 
function App() {

  //define defualt states for useState 
  const defaultVerbiage = 'Lorem ipsum motherfu..',
		defaultSelection = '1';

  const [output, setVulgar] = useState(defaultVerbiage);
  const [selection, setSelection] = useState(defaultSelection)

	//sets output back to defualt state
	const clearOutputText = () => {
		setVulgar(defaultVerbiage);
	}
  
	//copyText component: copies text to clipboard
	const copyText = () => {
		navigator.clipboard.writeText(output);
		alert('Copied to Clipboard');
		return output;
	}

	const setValue = (event) => {
		setSelection(event.target.value);
	}


    //DEBUGGING:debugging method
    const consoleLogFile = () => {
		console.log(selection);
	}





  return (
    <div className="App">
      <h1>Vulgar Ipsum</h1>
      <GithubLogo />
		{/*DEGUGGING:This button is for debugging */}
		<button className="button1" id='displayDataButton' onClick={consoleLogFile}>
			Console Log 
        </button>
      <table id="table">
			<tbody>
      <tr id='dropDown'>
					<td>
						<form id="dropDownForm">
							<label htmlFor='selectionDropDown' id="dropDownTitle">
								<strong> Word Count: </strong>
								{/* Drop down selection here to pick an option out of specified list */}
									<select id='selectionDropDown' onChange={setValue} >
										<option value='1'>0-50</option>
										<option value='2'>51-200</option>
										<option value='3'>201-500</option>
										<option value='4'>501-1500</option>
										<option value='5'>1500+</option>
										
									</select>
							</label>
						</form>
					</td>
					<td>
						<label htmlFor='censoredCheck' id="censoredTitle">
							<strong> Censored </strong>
						</label>
					</td>
					<td>
						<div className="container">
							<label className="switch" htmlFor="censoredCheck">
							  <input type="checkbox" id="censoredCheck" />
							  <div className="slider round"></div>
							</label>
						  </div>
					</td>
				</tr>
				<tr id='navigationButtons'>
					<td><button onClick={() => setVulgar(generateWords())}>Generate</button></td>
					<td><button onClick={() => clearOutputText()}>Clear</button></td>
					<td><button onClick={() => copyText()}>Copy to Clipboard</button></td>
				</tr>
				<tr id="outputBox">
					<td id="outputText">{output}</td>
				</tr>
        <tr>
        </tr>
			</tbody>
      </table>
    </div>
  );
}



export default App;
