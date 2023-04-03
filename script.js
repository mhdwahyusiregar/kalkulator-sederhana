// Mengambil semua elemen dengan class "number" dan menambahkan event listener pada setiap elemen ketika di-klik
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value);
  });
});

// Mengambil elemen dengan class "calculator-screen"
const calculatorScreen = document.querySelector(".calculator-screen");

// Fungsi untuk memperbarui layar kalkulator dengan angka terkini
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// Variabel untuk menyimpan angka sebelumnya, operator perhitungan, dan angka saat ini
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

// Fungsi untuk memasukkan angka ke dalam currentNumber
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// Menambahkan event listener pada setiap elemen dengan class "number" untuk memanggil fungsi inputNumber dan updateScreen ketika di-klik
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// Mengambil semua elemen dengan class "operator" dan menambahkan event listener pada setiap elemen ketika di-klik
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

// Fungsi untuk memasukkan operator perhitungan ke dalam calculationOperator
const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

// Mengambil elemen dengan class "equal-sign" dan menambahkan event listener ketika di-klik untuk memanggil fungsi calculate dan updateScreen
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

// Fungsi untuk melakukan perhitungan berdasarkan operator perhitungan yang telah dimasukkan
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

// Mengambil elemen dengan kelas "all-clear" dan menambahkan event listener ketika tombol tersebut diklik
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

// Menghapus semua data yang ada pada kalkulator
const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

// Mengambil elemen dengan kelas "decimal" dan menambahkan event listener ketika tombol tersebut diklik
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

// Menambahkan titik desimal pada angka saat ini
const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

// Mengambil elemen dengan kelas "percentage" dan menambahkan event listener ketika tombol tersebut diklik
const percentageBtn = document.querySelector(".percentage");
percentageBtn.addEventListener("click", () => {
  calculatePercentage();
  updateScreen(currentNumber);
});

// Menghitung persentase dari angka saat ini
const calculatePercentage = () => {
  currentNumber = parseFloat(currentNumber) / 100;
};
