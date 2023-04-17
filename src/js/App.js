import { infaceComanods, operationCommands, simpleCommands } from "./Commands.js";

export function App(){
    

    const input = document.getElementById('ComandConsole');
    const arrayInput = input.value.split('');

    switch(arrayInput[0]){
        case '$':
            infaceComanods.Return(input);
        break;
        case '/':
            operationCommands.Return(input);
        break;
        default:
            simpleCommands.Return(input);
        break;
    }
}






