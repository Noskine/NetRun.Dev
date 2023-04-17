function ClearConsole(i){      
    i.value = '';
}
function CreatePrint(){
    const print = document.querySelector('main');
    const div = document.createElement('section');

    return print.appendChild(div);
}

export const infaceComanods = {  
    Return(index){
        const arrayComanods = index.value.split(' ');
        console.log(arrayComanods);
        switch(arrayComanods[0]){
            case '$color': case'$cor':
                this.ComandColor(index, arrayComanods);
            break;
            case '$rl': case'$load':
                this.ComandReload(index);
            break; 
        }
    },
    ComandColor(index, array){
        const style = document.documentElement.style;
        switch(array[1]){
            case 'verde': case 'a':
                style.setProperty('--color-terminal', '#0dcc2d');
                ClearConsole(index)
            break;
            case 'azul': case 'b':
                console.log('chamando o color')
                style.setProperty('--color-terminal', '#0d76cc');
                ClearConsole(index)
            break;
            case 'vermelhor': case 'c':
                style.setProperty('--color-terminal', '#cc0d0d');
                ClearConsole(index)
            break;
        }
    },
    ComandReload(i){
        location.reload();
        ClearConsole(i)
    },
}

export const operationCommands = {
    
    Return(index){
        const arrayComanods = index.value.split(' ');
        console.log(arrayComanods);
        switch(arrayComanods[0]){
            case '/soma': case'/s++':
                this.somaFunct(index, arrayComanods);
            break;
            case '/subtrair': case'/s--':
                this.subFunct(index, arrayComanods);
            break;
            case '/multiplicar': case'/m**':
                this.multFunct(index, arrayComanods);
            break;
            case '/dividir': case'/d//':
                this.divFunct(index, arrayComanods);
            break;
        }
    },
    somaFunct(i, array){
        let oneValue = new Number(array[1]);
        let twovalue = new Number(array[3]);
        
        if(array[2] == '+'){
            CreatePrint().innerHTML = `<p>${oneValue + twovalue} </p>`;
        
        } else {
            CreatePrint().innerHTML = '<p>Operador não encontrado ou errado : tente "+" </p>';
        }
        ClearConsole(i);
    },
    subFunct(i, array){
        let oneValue = new Number(array[1]);
        let twovalue = new Number(array[3]);
        
        if(array[2] == '-'){
            CreatePrint().innerHTML = `<p>${oneValue - twovalue} </p>`;
        
        } else {
            CreatePrint().innerHTML = '<p>Operador não encontrado ou errado : tente "-" </p>';
        }
        ClearConsole(i);
    },
    multFunct(i, array){
        let oneValue = new Number(array[1]);
        let twovalue = new Number(array[3]);
        
        if(array[2] == 'x' || '*'){
            CreatePrint().innerHTML = `<p>${oneValue * twovalue} </p>`;
        
        } else {
            CreatePrint().innerHTML = '<p>Operador não encontrado ou errado : tente "-" </p>';
        }
        ClearConsole(i);
    },
    divFunct(i, array){
        let oneValue = new Number(array[1]);
        let twovalue = new Number(array[3]);
        
        if(array[2] == '/'){
            CreatePrint().innerHTML = `<p>${oneValue / twovalue} </p>`;
        
        } else {
            CreatePrint().innerHTML = '<p>Operador não encontrado ou errado : tente "-" </p>';
        }
        ClearConsole(i);
    },
}

export const simpleCommands = {
     
    Return(index){
        const arrayComanods = index.value.split(' ');
        console.log(arrayComanods);
        switch(arrayComanods[0]){
            case 'help': case'ajuda':
                this.CommandHelp(index);
            break;
            case 'Hello': case 'hello': case 'Olá': case 'olá':
                this.CommandOlaMundo(index, arrayComanods);
            break;
            default:
            break;
        }
    },
    CommandHelp(i){
        CreatePrint().innerHTML = '';
        ClearConsole(i);
    },
    CommandOlaMundo(i, array){
        switch(array[1]){
            case 'mundo': case 'world':
                CreatePrint().innerHTML = '<h3>Você deve ser um programador</h3><p>Olá, Bem vindo a meu primeiro projeto que saiu da cabeça e veio pra o GitHub;</p><p>Tente usar "help" ou "ajuda" para aprender os comandos do terminal (Espero que goste!);</p><h4>Porquê criar um terminal?</h4><p>De maneira resumida: Eu não tinha ideias boas, foi o que primeiro veio na mente;</p><hr>';
            break
            default:
                CreatePrint().innerHTML = '<p>Erro!</p>'
            break
        };
    },
}