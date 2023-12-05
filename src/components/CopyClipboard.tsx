export const CopyToClipboard = ({copy,vulgarOutput}:Readonly<{copy:Function,vulgarOutput:string}>) => {
  return (
    <button onClick={() => copy(vulgarOutput)}>Copy to Clipboard</button>
  );
}