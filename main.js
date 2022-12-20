let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (items of buttons){
    items.addEventListner('click', (e) => {
       let buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.Value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.Value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.Value = screenValue;
        }
    })
}