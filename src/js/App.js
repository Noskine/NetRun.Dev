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

const infaceComanods = {
    ClearConsole(i){
        
        i.value = '';
    },
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
                this.ClearConsole(index)
            break;
            case 'azul': case 'b':
                console.log('chamando o color')
                style.setProperty('--color-terminal', '#0d76cc');
                this.ClearConsole(index)
            break;
            case 'vermelhor': case 'c':
                style.setProperty('--color-terminal', '#cc0d0d');
                this.ClearConsole(index)
            break;
        }
    },
    ComandReload(i){
        location.reload();
        this.ClearConsole(i)
    },
}

const operationCommands = {
    CreatePrint(){
        const print = document.querySelector('main');
        const div = document.createElement('section');

        return print.appendChild(div);
    },
    ClearConsole(i){
        i.value = '';
    },
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
            this.CreatePrint().innerHTML = `<p>${oneValue + twovalue} </p>`;
        
        } else {
            this.CreatePrint().innerHTML = '<p>Operador não encontrado ou errado : tente "+" </p>';
        }
        this.ClearConsole(i);
    },
    subFunct(i, array){
        let oneValue = new Number(array[1]);
        let twovalue = new Number(array[3]);
        
        if(array[2] == '-'){
            this.CreatePrint().innerHTML = `<p>${oneValue - twovalue} </p>`;
        
        } else {
            this.CreatePrint().innerHTML = '<p>Operador não encontrado ou errado : tente "-" </p>';
        }
        this.ClearConsole(i);
    },
    multFunct(i, array){
        let oneValue = new Number(array[1]);
        let twovalue = new Number(array[3]);
        
        if(array[2] == 'x' || '*'){
            this.CreatePrint().innerHTML = `<p>${oneValue * twovalue} </p>`;
        
        } else {
            this.CreatePrint().innerHTML = '<p>Operador não encontrado ou errado : tente "-" </p>';
        }
        this.ClearConsole(i);
    },
    divFunct(i, array){
        let oneValue = new Number(array[1]);
        let twovalue = new Number(array[3]);
        
        if(array[2] == '/'){
            this.CreatePrint().innerHTML = `<p>${oneValue / twovalue} </p>`;
        
        } else {
            this.CreatePrint().innerHTML = '<p>Operador não encontrado ou errado : tente "-" </p>';
        }
        this.ClearConsole(i);
    },
}

const simpleCommands = {
    CreatePrint(){
        const print = document.querySelector('main');
        const div = document.createElement('section');

       return print.appendChild(div)
    },
    ClearConsole(i){
        i.value = '';
    },
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
        this.CreatePrint().innerHTML = '';
        this.ClearConsole(i);
    },
    CommandOlaMundo(i, array){
        switch(array[1]){
            case 'mundo': case 'world':
                this.CreatePrint().innerHTML = '<h3>Você deve ser um programador</h3><p>Olá, Bem vindo a meu primeiro projeto que saiu da cabeça e veio pra o GitHub;</p><p>Tente usar "help" ou "ajuda" para aprender os comandos do terminal (Espero que goste!);</p><h4>Porquê criar um terminal?</h4><p>De maneira resumida: Eu não tinha ideias boas, foi o que primeiro veio na mente;</p><hr>';
            break
            default:
                this.CreatePrint().innerHTML = '<p>Erro!</p>'
            break
        };
    },
}


