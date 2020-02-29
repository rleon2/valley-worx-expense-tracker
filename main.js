var total = 0;
const ENTER_KEY_CODE = 13;

function handleInputKeyup(e) {
    
        if (e.keyCode === ENTER_KEY_CODE) {
            addInputBox();
        }
}

function init() {
    window.addEventListener('keyup', (event) => {
        calculateTotal();
    })

    document.getElementById('expense-item').addEventListener('keyup', (e) => {
        handleInputKeyup(e);
    });
}

// function filterNumber(){
//     const currentValue = document.getElementById('expense-item').value;
//     const filteredValue = currentValue.replace(/[^0-9.]+/gim, '');
//     document.getElementById('expense-item').value= filteredValue;
// }
function addInputBox(){
    const newInputBox = document.createElement('input');
    newInputBox.classList.add('form-control', 'my-1');
    newInputBox.type = 'number';
    newInputBox.addEventListener('keyup', (e) => {handleInputKeyup(e);});

    const list = document.getElementById('input-boxes');
    list.appendChild(newInputBox);
}

function calculateTotal(){
    total = document.getElementById('expense-item').value;
    document.getElementById('total').innerText = '$' + total;
}
