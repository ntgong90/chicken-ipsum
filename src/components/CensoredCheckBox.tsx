export const Checkbox = ({checkBoxMarked}:Readonly<{checkBoxMarked:Function}>) => {

  const handleChange = (event:any) => {
    checkBoxMarked(event.target.checked);
  }

  return (
    <div className="container">
      <label className="switch" htmlFor="censoredCheck">
        <input type="checkbox" id="censoredCheck" onChange={handleChange}/>
        <div className="slider round"></div>
      </label>
    </div>
  );
}