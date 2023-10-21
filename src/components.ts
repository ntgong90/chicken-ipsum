export const generateWords = () => {
  //Locally stored lists of words to randomly generate: one vulgar list, one censored list
  const vulgarWords = ['fuck you', 'bitch','cunt','motherfucker','shitstain','ogre','limpdick','gumby','paperhanded bitch','ass whipe', 'plonker'],
      censoredWords = ['f**k you', 'b**ch','cunt','motherf***er','sh**stain','ogre','limpd**k','gumby','paperhanded b**ch','a*s whipe', 'plonker'];

  //define number of defualt words
  let numberOfOutputWords = 0;

  //status of Censored button
  const isChecked = document.getElementById('censoredCheck').checked;

    function numberInterval(min:number, max:number){
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //chunks an array input and outputs chunked array 
    function makesParagraphs(listOfWords:any[]){
      const chunkedArray = [];
        for(let i = 0; i< listOfWords.length; i+= 150){
          const chunk = listOfWords.slice(i, i + 150)
          chunkedArray.push(chunk);
        }
      return chunkedArray.map(wordGroup => wordGroup.join(' '));
    }
    
    //sets value of numberOfOutputWords based on selectionDropDown value
    //hacky way selecting DOM
    switch(document.getElementById('selectionDropDown').value){
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
      default: 0;
    }

    //generates array of random length with number input for vulgar words
    function generateVulgarWords(numberOfWords:number){
      const outputWords = [];
    
      for(let i = 0; i < numberOfWords; i++){
        let randomIndex = Math.floor(Math.random()*vulgarWords.length);
        outputWords.push(vulgarWords[randomIndex]);
      }
      return outputWords;
    }

    //for censored words
    function generateCensoredWords(numberOfWords:number){
      const outputWords = [];
    
      for(let i = 0; i < numberOfWords; i++){
        let randomIndex = Math.floor(Math.random()*censoredWords.length);
        outputWords.push(censoredWords[randomIndex]);
      }
      return outputWords;
    }

    return isChecked ? makesParagraphs(generateCensoredWords(numberOfOutputWords)).join('\n\n') : 
    makesParagraphs(generateVulgarWords(numberOfOutputWords)).join('\n\n');
};
