export const WordSelection = () => {

    return (
    <form id="dropDownForm">
        <label htmlFor='selectionDropDown' id="dropDownTitle">
            <strong> Word Count: </strong>
            <select id='optionList' onChange={setValue}>
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
//real tabs for two spacing for tabs is a gumby move!