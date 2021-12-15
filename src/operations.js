export function equals(input) {
    let inputAsArray;

    if (input.includes('+')) {
        inputAsArray = input.split('+');
        let result = Number(inputAsArray[0]) + Number(inputAsArray[1]);
        return displayResult(result)
    }

    if (input.includes('-')) {
        inputAsArray = input.split('-');
        let result = Number(inputAsArray[0]) - Number(inputAsArray[1]);
        return displayResult(result)
    }

    if (input.includes('*')) {
        inputAsArray = input.split('*');
        let result = Number(inputAsArray[0]) * Number(inputAsArray[1]);
        return displayResult(result)
    }

    if (input.includes('/')) {
        inputAsArray = input.split('/');
        if (inputAsArray[1] == '0') {
            alert('You can\'t divide by zero!');
            return displayResult(inputAsArray[0]);
        }

        let result = Number(inputAsArray[0]) / Number(inputAsArray[1]);
        return displayResult(result)
    }
}

function displayResult(result) {
    if (result == Math.round(result)) {
        return result
    }
    else {
        return result.toFixed(2);
    }
}