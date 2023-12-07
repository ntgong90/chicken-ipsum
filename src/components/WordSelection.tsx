export const WordSelection = ({setOption, selection}:Readonly<{setOption:Function, selection:string}>) => {
    return (
    <form id="dropDownForm">
        <label htmlFor='selectionDropDown' id="dropDownTitle">
            <strong> Word Count Test: </strong>
            <select id='optionList' onChange={() => setOption}>
							<option value='1'>0-50</option>
							<option value='2'>51-200</option>
							<option value='3'>201-500</option>
							<option value='4'>501-1500</option>
							<option value='5'>1500+</option>
            </select>
        </label>
    </form>
    );
}