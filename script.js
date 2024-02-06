function multiplyMatrices() {
  const rows1 = parseInt(document.getElementById("rows1").value);
  const cols1 = parseInt(document.getElementById("cols1").value);
  const rows2 = parseInt(document.getElementById("rows2").value);
  const cols2 = parseInt(document.getElementById("cols2").value);

  if (cols1 !== rows2) {
    alert(
      "The number of columns in Matrix 1 must be equal to the number of rows in Matrix 2 for multiplication."
    );
    return;
  }

  const matrix1 = [];
  const matrix2 = [];

  // Populate matrix 1
  for (let i = 0; i < rows1; i++) {
    matrix1.push([]);
    for (let j = 0; j < cols1; j++) {
      matrix1[i].push(
        parseInt(prompt(`Enter element ${i + 1}-${j + 1} of Matrix 1:`))
      );
    }
  }

  // Populate matrix 2
  for (let i = 0; i < rows2; i++) {
    matrix2.push([]);
    for (let j = 0; j < cols2; j++) {
      matrix2[i].push(
        parseInt(prompt(`Enter element ${i + 1}-${j + 1} of Matrix 2:`))
      );
    }
  }

  // Multiply matrices
  const result = [];
  for (let i = 0; i < rows1; i++) {
    result.push([]);
    for (let j = 0; j < cols2; j++) {
      let sum = 0;
      for (let k = 0; k < cols1; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i].push(sum);
    }
  }

  // Display result
  let output = "<h2>Result:</h2><table>";
  for (let i = 0; i < rows1; i++) {
    output += "<tr>";
    for (let j = 0; j < cols2; j++) {
      output += "<td>" + result[i][j] + "</td>";
    }
    output += "</tr>";
  }
  output += "</table>";
  document.getElementById("result").innerHTML = output;
}
