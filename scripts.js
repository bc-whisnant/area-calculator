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

// generating inputs functions to be passed to functions
function generateSquareInputs() {
    // base input
    var sideInput = document.createElement('div');
    sideInput.id = 'baseInput';
    sideInput.innerHTML = '<input id="sideInputField">';
    document.getElementById('area-contents').appendChild(sideInput);

    calculateButtonCreation();

    document.getElementById('calc').addEventListener('click', function() {
        //calculate area
        var side = parseInt(document.getElementById('sideInputField').value);
        var squareArea = Math.pow(side, 2);

        var resultsField = document.createElement('div');
        resultsField.id = "resultsField";
        resultsField.innerHTML = '<h2 class="resultsText">The area is: ' + squareArea + '.</h2>';
        document.getElementById('area-contents').appendChild(resultsField);
    })
}

// generating inputs functions to be passed to functions
function generateRectangleInputs() {
    // base input
    var widthInput = document.createElement('div');
    widthInput.id = 'baseInput';
    widthInput.innerHTML = '<input id="widthInputField">';
    document.getElementById('area-contents').appendChild(widthInput);

    // height input
    var lengthInput = document.createElement('div');
    lengthInput.id = 'lengthInput';
    lengthInput.innerHTML = '<input id="lengthInputField">';
    document.getElementById('area-contents').appendChild(lengthInput);

    calculateButtonCreation();

    document.getElementById('calc').addEventListener('click', function() {
        //calculate area
        var width = parseInt(document.getElementById('widthInputField').value);
        var length = parseInt(document.getElementById('lengthInputField').value);
        var rectangleArea = length * width;

        var resultsField = document.createElement('div');
        resultsField.id = "resultsField";
        resultsField.innerHTML = '<h2 class="resultsText">The area is: ' + rectangleArea + '.</h2>';
        document.getElementById('area-contents').appendChild(resultsField);
    })
}

// generating inputs functions to be passed to functions
function generateCircleInputs() {
    // base input
    var radiusInput = document.createElement('div');
    radiusInput.id = 'radiusInput';
    radiusInput.innerHTML = '<input id="radiusInputField">';
    document.getElementById('area-contents').appendChild(radiusInput);

    calculateButtonCreation();

    document.getElementById('calc').addEventListener('click', function() {
        //calculate area
        var radius = parseInt(document.getElementById('radiusInputField').value);
        var circleArea = Math.PI * radius * radius;

        var resultsField = document.createElement('div');
        resultsField.id = "resultsField";
        resultsField.innerHTML = '<h2 class="resultsText">The area is: ' + circleArea + '.</h2>';
        document.getElementById('area-contents').appendChild(resultsField);
    })
}




document.getElementById('triangle').addEventListener('click', generateTriangleInputs);

document.getElementById('circle').addEventListener('click', generateCircleInputs);

document.getElementById('square').addEventListener('click', generateSquareInputs);

document.getElementById('rectangle').addEventListener('click', generateRectangleInputs);

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