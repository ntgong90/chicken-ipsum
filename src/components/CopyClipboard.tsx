export const CopyToClipboard = ({vulgarOutput}:{vulgarOutput:string}) => {

	const copyText = (vulgar:string) => {
		navigator.clipboard.writeText(vulgar);
		alert('Copied to Clipboard');
		return vulgar;
	}
  
  return (
    <button onClick={() => copyText(vulgarOutput)}>
      Copy to Clipboard
    </button>
  );
}