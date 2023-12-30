export const GenerateWords = ({randomWordSet, wordSelection, isCensored}:Readonly<{randomWordSet:Function, wordSelection:string, isCensored:boolean}>) => {
	
  //Locally stored lists of words to randomly generate: one vulgar list, one censored list
  const vulgarWords = ['fuck you', 'bitch','cunt','motherfucker','shitstain','ogre','limpdick','gumby','paperhanded bitch','ass whipe', 'plonker'],
        censoredWords = ['f**k you', 'b**ch','cunt','motherf***er','sh**stain','ogre','limpd**k','gumby','paperhanded b**ch','a*s whipe', 'plonker'];
  
  //define number of defualt words
  let numberOfOutputWords = 0;
  
  //returns random number between min and max
  function numberInterval(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //chunks an array input and outputs chunked array of length 150 elements
  function makesParagraphs(listOfWords:string[]){
    const chunkedArray = [];

    for(let i = 0; i< listOfWords.length; i+= 150){
      const chunk = listOfWords.slice(i, i + 150);

      chunkedArray.push(chunk);
    }

    return chunkedArray.map(wordGroup => wordGroup.join(' ')).join('\n\n');
  }

  function generateWordsHelper(listOfWords:string[] ,numberOfWords:number){
    const outputWords = [];

    for(let i = 0; i < numberOfWords; i++){
      let randomIndex = Math.floor(Math.random()*listOfWords.length);
      outputWords.push(listOfWords[randomIndex]);
    }

    return outputWords;
  }

  const generateWords = () => {
		//sets value of numberOfOutputWords based on selectionDropDown value
		switch(wordSelection){
			case '1': numberOfOutputWords = numberInterval(0,50);
			break;
			case '2': numberOfOutputWords = numberInterval(51,200);
			break;
			case '3': numberOfOutputWords = numberInterval(201,500);
			break;
			case '4': numberOfOutputWords = numberInterval(501,1500);
			break;
			case '5': numberOfOutputWords = numberInterval(1500,3000);
			break;
		}  
		//checks censored state and returns makesParagraphs method of censored or not method 
		return isCensored ? makesParagraphs(generateWordsHelper(censoredWords,numberOfOutputWords)) : makesParagraphs(generateWordsHelper(vulgarWords,numberOfOutputWords));
	};
  
  return(
		<button onClick={() => randomWordSet(generateWords())}>
      Generate
    </button>
	);
}