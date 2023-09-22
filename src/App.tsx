import { useState,useRef, useEffect} from "react";
import "./App.css";
import { generateWords, clearOutputText, copyText } from "./utils";
import { GithubLogo } from "./GithubLogo";

function App() {
  const [output, setVulgar] = useState<string | null>('Lorem ipsum motherfu..');
  const ref = useRef(null);
  //still don't understand useEffect but will discuss with Mike
  useEffect(() => {
    const element = ref.current;
	console.log(ref.current.value);
  }, []);
  
  return (
    <div className="App">
      <h1>Vulgar Ipsum</h1>
      <GithubLogo />
      <table id="table">
			<tbody>
      <tr id='dropDown'>
					<td>

						<form id="dropDownForm">
							<label htmlFor='selectionDropDown' id="dropDownTitle"> {/* React uses htmlFor istead of for  */}
								<strong> Word Count: </strong>
								{/* Drop down selection here to pick an option out of specified list */}
									<select ref={ref} id='selectionDropDown'>
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
					<td><button onClick={() => setVulgar(clearOutputText())}>Clear</button></td>
					<td><button onClick={() => setVulgar(copyText())}>Copy to Clipboard</button></td>
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
