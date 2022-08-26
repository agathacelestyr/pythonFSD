function count(arr) {
  return arr.filter((w) => w === true).length;
}

console.log(count([true, false, false, true, false]) + " True values");
