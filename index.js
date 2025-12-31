function calculateSum() {
    // Get values from the input fields
    const num1String = document.getElementById("firstNumber").value;
    const num2String = document.getElementById("secondNumber").value;

    // Convert the input strings to floating-point numbers
    const num1 = parseFloat(num1String);
    const num2 = parseFloat(num2String);

    // Perform the calculation
    const sum = num1 + num2;

    // Display the result in the 'result' span
    // Check if the result is a valid number (e.g., handles empty inputs resulting in NaN)
    if (!isNaN(sum)) {
        document.getElementById("result").innerHTML = sum;
    } else {
        document.getElementById("result").innerHTML = "Invalid input";
    }
}
