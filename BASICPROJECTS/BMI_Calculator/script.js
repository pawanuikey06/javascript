function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.innerHTML = "Please enter valid weight and height!";
        return;
    }

    const bmi = (weight / (height * height)) * 10000;;
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}
