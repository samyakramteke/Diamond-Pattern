const rows = 5;
let output = '';

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= rows - i; j++) {
    output += ' ';
  }

  for (let k = 1; k <= i * 2 - 1; k++) {
    output += '*';
  }

  output += '\n';
}

for (let i = rows - 1; i >= 1; i--) {
  for (let j = 1; j <= rows - i; j++) {
    output += ' ';
  }

  for (let k = 1; k <= i * 2 - 1; k++) {
    output += '*';
  }

  output += '\n';
}

console.log(output);
