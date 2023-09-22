export const generateWords = () => {
  //create list of words
  const vulgarWords = ['fuck you', 'bitch','cunt','motherfucker','shitstain','ogre','limpdick','gumby','paperhanded bitch','ass whipe', 'plonker'],
      censoredWords = ['f**k you', 'b**ch','cunt','motherf***er','sh**stain','ogre','limpd**k','gumby','paperhanded b**ch','a*s whipe', 'plonker'];

  let numberOfOutputWords = 0;

    function numberInterval(min:number, max:number){
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function makesParagraphs(listOfWords:any[]){
      const chunkedArray = [];
        for(let i = 0; i< listOfWords.length; i+= 150){
          const chunk = listOfWords.slice(i, i + 150)
          chunkedArray.push(chunk);
        }
      return chunkedArray.map(wordGroup => wordGroup.join(' '));
    }
    

    if(document.getElementById('selectionDropDown').value == '1'){
      numberOfOutputWords = numberInterval(0,50);
      console.log(numberOfOutputWords)
    }
    if(document.getElementById('selectionDropDown').value == '2'){
      numberOfOutputWords = numberInterval(51,200);
      console.log(numberOfOutputWords)
    }
    if(document.getElementById('selectionDropDown').value == '3'){
      numberOfOutputWords = numberInterval(201,500);
      console.log(numberOfOutputWords)
    }
    if(document.getElementById('selectionDropDown').value == '4'){
      numberOfOutputWords = numberInterval(501,1500);
      console.log(numberOfOutputWords)
    }
    if(document.getElementById('selectionDropDown').value == '5'){
      numberOfOutputWords = numberInterval(1500,3000);
      console.log(numberOfOutputWords)
    }



    function generateWords(numberOfWords:number){
      const outputWords = [];
    
      for(let i = 0; i < numberOfWords; i++){
        let randomIndex = Math.floor(Math.random()*censoredWords.length);
        outputWords.push(censoredWords[randomIndex]);
        if(document.getElementById('selectionDropDown').value == '1'){
          let randomIndex = Math.floor(Math.random()*censoredWords.length);
          outputWords.push(vulgarWords[randomIndex]);
        }
        if(document.getElementById('selectionDropDown').value == '2'){
          let randomIndex = Math.floor(Math.random()*censoredWords.length);
          outputWords.push(vulgarWords[randomIndex]);
        }
      }
      return outputWords;
    }
    console.log(document.getElementById('selectionDropDown').value)





    return generateWords(numberOfOutputWords).length > 150 ?  makesParagraphs(generateWords(numberOfOutputWords)).join('\n\n') : 'test';
    
    ;
  //return generateWords();

};

////clears randomly by outputing defaultText string
export const clearOutputText = () => {
  const defualtText = 'Lorem ipsum motherfu..';
  return defualtText;
}

//copies text to clipboard
export const copyText = () => {
  let copiedText = document.getElementById('outputText').innerText || 'Nothing copied';
				navigator.clipboard.writeText(copiedText);
				alert('Copied to Clipboard');
        return copiedText;
}
