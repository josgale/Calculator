const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//event listeners 

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


//functions defined below

function getUserInput(){
    return parseFloat(userInput.value);
}

function createWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription) //from vendor file
}

function writeToLog(
    opIdentifier,
    prevResult,
    opNumber,
    newResult
    ){
        const logEntry = {
            operation: opIdentifier,
            prevResult: prevResult,
            number: opNumber,
            result: newResult

    };
    logEntries.push(logEntry);
    console.log(logEntries);
};

function add(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createWriteOutput('+', initialResult, enteredNumber );
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
    };
    
function subtract(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createWriteOutput('-', initialResult, enteredNumber );
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
};

function multiply(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createWriteOutput('*', initialResult, enteredNumber );
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
};

function divide(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createWriteOutput('/', initialResult, enteredNumber );
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
};