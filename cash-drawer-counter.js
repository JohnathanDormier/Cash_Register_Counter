const denominations = [
  { id: 'pennies', value: 0.01 },
  { id: 'nickels', value: 0.05 },
  { id: 'dimes', value: 0.10 },
  { id: 'quarters', value: 0.25 },
  { id: 'half-dollars', value: 0.50 },
  { id: 'ones', value: 1.00 },
  { id: 'fives', value: 5.00 },
  { id: 'tens', value: 10.00 },
  { id: 'twenties', value: 20.00 },
  { id: 'fifties', value: 50.00 },
  { id: 'hundreds', value: 100.00 }
];

function updateTotal() {
  let total = 0;
  denominations.forEach(denom => {
    const count = parseInt(document.getElementById(denom.id).value, 10) || 0;
    total += count * denom.value;
  });
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

denominations.forEach(denom => {
  document.getElementById(denom.id).addEventListener('input', updateTotal);
});


document.getElementById('reset-btn').addEventListener('click', () => {
  denominations.forEach(denom => {
    document.getElementById(denom.id).value = "";
  });
  updateTotal();
});
