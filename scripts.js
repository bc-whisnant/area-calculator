// generating inputs functions to be passed to functions
function generateTriangleInputs() {
    // base input
    var baseInput = document.createElement('div');
    baseInput.id = 'baseInput';
    baseInput.innerHTML = '<input id="baseInputField">';
    document.getElementById('area-contents').appendChild(baseInput);

    // height input
    var heightInput = document.createElement('div');
    heightInput.id = 'heightInput';
    heightInput.innerHTML = '<input id="heightInputField">';
    document.getElementById('area-contents').appendChild(heightInput);

    calculateButtonCreation();

    //calculate area
    var base = document.getElementById('baseInputField').value;
    var height = Number(document.getElementById('heightInputField').value);
    var triangleArea = base + height;


    document.getElementById('calc').addEventListener('click', function() {
        //calculate area
        var base = parseInt(document.getElementById('baseInputField').value);
        var height = parseInt(document.getElementById('heightInputField').value);
        var triangleArea = (base * height) * 0.5;

        var resultsField = document.createElement('div');
        resultsField.id = "resultsField";
        resultsField.innerHTML = '<h2 class="resultsText">The area is: ' + triangleArea + '.</h2>';
        document.getElementById('area-contents').appendChild(resultsField);
    })
}

document.getElementById('triangle').addEventListener('click', generateTriangleInputs);

// this function creates and appends the calculate buttono
function calculateButtonCreation() {
    // calculate button is generated
    var calculateButton = document.createElement('div');
    calculateButton.id = 'calculateButton';
    var calculateButtonButton = '<button id="calc" class="calcButton">Calculate</button>';
    calculateButton.innerHTML = calculateButtonButton;
    calculateButton.style.textAlign = 'center';
    calculateButton.style.marginTop = '4%';

    // append calculate button 
    document.getElementById('area-contents').appendChild(calculateButton);
}