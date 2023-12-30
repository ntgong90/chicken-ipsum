export const Censor = ({censorTitle}:{censorTitle:string}) => {
  return(
    <label
		 	htmlFor='censoredCheck' 
		 	id="censoredTitle">
      <strong>
        {censorTitle} 
      </strong>
  </label>
  );
}




