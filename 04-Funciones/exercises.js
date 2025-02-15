
function compareArrays(value){
    let lowerCaseValue = value.toLowerCase().split(' ').join('');
    let reversedValue = '';

    lowerCaseValue.split('').forEach((char) => {
        reversedValue = char + reversedValue;
    });

    if(lowerCaseValue === reversedValue){
        return console.log("Es palíndromo:", value); 
    }else{
        return console.log("No es palíndromo:", value);
    }
}

compareArrays("Anita lava la tina");
compareArrays("Hoy es jueves");