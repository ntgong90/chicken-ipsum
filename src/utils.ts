export const generateWords = () => {
  //create list of words
  const vulgarWords = ['fuck you', 'bitch','cunt','motherfucker','shitstain','ogre','limpdick','gumby','paperhanded bitch','ass whipe', 'plonker'],
      censoredWords = ['f**k you', 'b**ch','cunt','motherf***er','sh**stain','ogre','limpd**k','gumby','paperhanded b**ch','a*s whipe', 'plonker'],
    PARAGRAPH_SIZES = [15, 30, 75];

  const numberOfWords =
    PARAGRAPH_SIZES[Math.floor(Math.random() * PARAGRAPH_SIZES.length)];

  // generate paragraph, with random words, capitalization, and punctuation.
  let paragraph = "";
  let previousWordHadPunctuation = false;
  for (let i = 0; i < numberOfWords; i++) {
    // pick a random word
    let word = vulgarWords[Math.floor(Math.random() * vulgarWords.length)];

    const shouldAddPunctuation = i === numberOfWords - 1 || Math.random() > 0.9;

    // preserve info for next iteration
    previousWordHadPunctuation = shouldAddPunctuation;

    // add word to paragraph
    paragraph = paragraph + word;

    // if not last one, add a space
    paragraph = i === numberOfWords - 1 ? paragraph : paragraph + " ";
  }
  return paragraph;
};

export const clearOutputText = () => {
  const defualtText = 'Lorem ipsum motherfu..';
  return defualtText;
}

export const copyText = () => {
  let copiedText = document.getElementById('outputText').innerText || 'Nothing copied';
				navigator.clipboard.writeText(copiedText);
				alert('Copied to Clipboard');
        return copiedText;
}
