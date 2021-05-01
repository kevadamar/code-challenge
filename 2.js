function transpose(array) {
  let height = array.length;
  let width = array[0] instanceof Array ? array[0].length : 0;
  let arrTranspose = [];

  if (height == 0 || width == 0) return "Data bukan array multi dimensi";

  // loop1 untuk set baris / tinggi
  for (let i = 0; i < height; i++) {
    // set baris / tinggi
    arrTranspose[i] = [];
    // loop2 untuk set column / lebar
    for (let j = 0; j < width; j++) {
      // set isi column berdasarkan baris i/dari loop1
      arrTranspose[i][j] = array[j][i];
    }
  }
  return arrTranspose;
}

const input = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

console.log(transpose(input));
