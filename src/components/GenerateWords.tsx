export const GenerateWords = ({randomWordSet, generate}:Readonly<{randomWordSet:Function, generate:Function}>) => {
	return(
		<button onClick={() => randomWordSet(generate())}>Generate</button>
	);
}