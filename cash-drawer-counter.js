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
    document.getElementById(`${denom.id}-total`).textContent = `$${(count * denom.value).toFixed(2)}`;
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



function saveAsPdf() {
  const doc = new jsPDF();
  const data = {};
  denominations.forEach(denom => {
    data[denom.id] = parseInt(document.getElementById(denom.id).value, 10) || 0;
  });
  doc.text('Cash Drawer Report', 10, 10);
  doc.text('Denomination', 10, 20);
  doc.text('Quantity', 50, 20);
  doc.text('Total', 90, 20);
  let y = 30;
  denominations.forEach(denom => {
    doc.text(denom.name, 10, y);
    doc.text(data[denom.id].toString(), 50, y);
    doc.text('$' + (data[denom.id] * denom.value).toFixed(2), 90, y);
    y += 10;
  });
  doc.save('cash_drawer_report.pdf');
}

document.getElementById('save-as-pdf-button').addEventListener('click', saveAsPdf);