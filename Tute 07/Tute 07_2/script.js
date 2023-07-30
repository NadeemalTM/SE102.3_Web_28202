function calculateGrade() {
    const num1 = parseFloat(prompt('Enter the first number:'));
    const num2 = parseFloat(prompt('Enter the second number:'));
  
    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers.');
      return;
    }
  
    const sum = num1 + num2;
    const average = (num1 + num2) / 2;
  
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Sum: ${sum}, Average: ${average.toFixed(2)}`;
  
    if (average > 30) {
      alert('Congrats! You passed.');
    } else {
      alert('Better luck next time.');
    }
  }
  
  