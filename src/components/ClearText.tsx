export function ClearText({setVulgar, defaultVerbiage}:{setVulgar:Function, defaultVerbiage:String}){
    return (
        <button onClick={() => setVulgar(defaultVerbiage)}>Clear</button>
    );
};
