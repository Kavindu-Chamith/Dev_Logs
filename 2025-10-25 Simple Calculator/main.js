const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = calculator.querySelector('.calculator-screen');

// Listen for button clicks
keys.addEventListener('click', event => {
  if (!event.target.matches('button')) return;

  const key = event.target;
  const action = key.dataset.action;
  const keyValue = key.value;

  // If it's a number or decimal
  if (!action) {
    // Prevent starting with multiple zeros
    if (display.value === '0') {
      display.value = keyValue;
    } else {
      display.value += keyValue;
    }
  }

  // Clear (AC)
  else if (action === 'clear') {
    display.value = '';
  }

  // Calculate (=)
  else if (action === 'calculate') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }

  // Operators (+, -, *, /)
  else {
    display.value += keyValue;
  }
});

