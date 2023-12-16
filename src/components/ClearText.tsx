export const ClearText = ({clearTextToDefault, defaultVerbiage}:Readonly<{clearTextToDefault:Function, defaultVerbiage:string}>) => {
  return (
    <button onClick={() => clearTextToDefault(defaultVerbiage)}>
      Clear
    </button>
  );
};
