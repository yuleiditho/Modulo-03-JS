
document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector('#slider');
    let numberOutput = document.querySelector('#character-length');
    let passwordArea = document.querySelector('.pwd-container p');
    let copyButton = document.querySelector('#copy-btn');
    let form = document.querySelector('#form-action');

    let uppercaseCheckbox = document.querySelector('#uppercase');
    let lowercaseCheckbox = document.querySelector('#lowercase');
    let numbersCheckbox = document.querySelector('#numbers');
    let symbolsCheckbox = document.querySelector('#symbols');
    let errorMessage = document.querySelector('.msg-error');
    let bars = document.querySelector('.msg-bars');

    let tooWeak = document.querySelector('#too-weak');
    let weak = document.querySelector('#weak');
    let medium = document.querySelector('#medium');
    let strong = document.querySelector('#strong');

    const uppercaseArray = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    const lowercaseArray = 'abcdefghijklmnñopqrstuvwxyz'.split('');
    const numbersArray = '0123456789'.split('');
    const symbolsArray = '!@#$%^&*()¿?/+-'.split('');

    slider.addEventListener('input', function () {
        numberOutput.textContent = this.value;
    });

    function getPasswordArray() {
        let passwordArray = [];
        
        let options = [
            { checkbox: uppercaseCheckbox, array: uppercaseArray },
            { checkbox: lowercaseCheckbox, array: lowercaseArray },
            { checkbox: numbersCheckbox, array: numbersArray },
            { checkbox: symbolsCheckbox, array: symbolsArray }
        ];
    
        options.forEach(option => {
            if (option.checkbox.checked) {
                passwordArray = passwordArray.concat(option.array);
            }
        });
    
        return passwordArray;
    }

    function generatePassword(length) {
        let passwordArray = getPasswordArray();
        if (passwordArray.length === 0) return null;

        return Array.from({ length }, () => 
            passwordArray[Math.floor(Math.random() * passwordArray.length)]
        ).join('');
    }

    function checkPasswordStrength(password) {
        let length = password.length;
        resetBars();

        bars.style.display = "none";

        if (length < 6) {
            tooWeak.textContent = "TOO WEAK 😡";
            tooWeak.classList.add('too-weak-color');
        } else if (length >= 6 && length <= 9) {
            weak.textContent = "WEAK 👎";
            weak.classList.add('weak-color');
        } else if (length >= 10 && length <= 12) {
            medium.textContent = "MEDIUM 👍";
            medium.classList.add('medium-color');
        } else if (length >= 13) {
            strong.textContent = "STRONG ✅";
            strong.classList.add('strong-color');
        }
    }

    function resetBars() {
        const bars = [tooWeak, weak, medium, strong];
        for (const bar of bars) {
            bar.textContent = "";
            bar.classList.remove('too-weak-color', 'weak-color', 'medium-color', 'strong-color');
        }
    }
    

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const checkedCheckboxes = [uppercaseCheckbox, lowercaseCheckbox, numbersCheckbox, symbolsCheckbox].filter(checkbox => checkbox.checked);

        if (checkedCheckboxes.length === 0) {
            errorMessage.style.display = 'block';
            return;
        }

        errorMessage.style.display = 'none';

        let password = generatePassword(slider.value);
        if (password) {
            passwordArea.textContent = password;
            passwordArea.removeAttribute("style"); // Elimina estilos inline si los hay
            passwordArea.className = 'password-style'; // Restablece la clase correctamente
            checkPasswordStrength(password);
        }
        
    });

    copyButton.addEventListener('click', function () {
        let textToCopy = passwordArea.textContent;
        // Verificar si la contraseña generada es diferente a "P4$5W0rD!" o cualquier valor predeterminado
        if(textToCopy !== '' && textToCopy !== 'P4$5W0rD!'){
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Password copied to clipboard!');
            });
        }else{
            alert('No password generated yet!');
        }
    });

});
