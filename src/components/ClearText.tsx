export const ClearText = ({clearText, defaultVerbiage}:Readonly<{clearText:Function, defaultVerbiage:string}>) => {
    return (
        <button onClick={() => clearText(defaultVerbiage)}>Clear</button>
    );
};
