let input = document.getElementById('input_inline');
let buttons = document.querySelectorAll('button');

let string = ""; 


let arr = Array.from(buttons);


arr.forEach(button => {
    button.addEventListener('click', (e) => {
        
        const buttonValue = e.target.textContent.trim();

        if (buttonValue === '=') {
            try {
                
                string = string.replace(/÷/g, '/');
                string = string.replace(/×/g, '*');
                string = string.replace(/−/g, '-');
                string = string.replace(/\+/g, '+');
                string = string.replace(/%/g, '%');

              
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error"; 
                string = "";
            }
        } else if (buttonValue === 'AC') {
            
            string = "";
            input.value = string;
        } else if (buttonValue === 'C') {
            
            string = string.slice(0, -1);
            input.value = string;
        } else {
            
            string += buttonValue;
            input.value = string;
        }
    });
});
