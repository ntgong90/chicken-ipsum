import { useState } from "react";

const defaultVerbiage = 'Lorem ipsum motherfu..',
      [output, setVulgar] = useState(defaultVerbiage);

//sets output back to defualt state
const clearOutputText = () => {
    setVulgar(defaultVerbiage);
}

export const ClearText = () => {
    return (
        <button onClick={() => clearOutputText()}>Clear</button>
    );

}