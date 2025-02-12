/*Problem: Count how many items belong to each data type, return an object where the keys are the data types and
the values are the counts*/

function processData(array){
    const dataTypeCount = {};
    for(const element of array){
        const type = typeof element;
        if(dataTypeCount.hasOwnProperty(type)){
            dataTypeCount[type]++;
        }else{
            dataTypeCount[type] = 1;
        }
    }
    return dataTypeCount;
}


function impressData(array){
    for (let element in array) {
        console.log(`${array[element]} -> ${element}`);
    }
} 

const inputArray = [24, 42, 99, "hello", "yellow", true, false, 10n, null, Symbol("id")];
const dataTypeCount = processData(inputArray);

impressData(dataTypeCount);
console.table(processData(inputArray));

