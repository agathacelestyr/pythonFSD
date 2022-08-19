for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 5; j > i; j--) {
    str += " ";
  }
  for (let k = 0; k <= i; k++) {
    str += "*";
  }
  for (let l = 1; l <= i; l++) {
    str += "*";
  }
  console.log(str);
}
for (let i = 5; i >= 0; i--) {
  let str = "";
  for (let j = 5; j > i; j--) {
    str += " ";
  }
  for (let k = 0; k <= i; k++) {
    str += "*";
  }
  for (let l = 1; l <= i; l++) {
    str += "*";
  }
  console.log(str);
}

function addnum(add, target) {
  let array = [];
  for (let i = 0; i < add.length; i++) {
    for (let j = 0; j < add.length; j++) {
      if (add[i] + add[j] === target) {
        array = [i, j];
      }
    }
  }
  return array;
}
console.log(addnum([1, 2, 3, 4, 5, 6], 5));

// palindrome
function Palin(str) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      alert("Not a Palindrome");
    }
  }
  alert("Palindrome");
}
const string = prompt("Enter string or number: ");
const value = Palin(string);
console.log(value);

// roman no
function romanInt(str1) {
  if (str1 == null) return -1;
  var num = charint(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = charint(str1.charAt(i));
    pre = charint(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

function charint(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}
console.log(romanInt(C));
