import { App } from "./src/js/App.js";


document.getElementById('exec').addEventListener('click', () =>{
    App();
});
document.addEventListener('keypress', ({key}) => {
    switch(key){
        case 'Enter':
            App();
        break
    };
});
