function drawImage(paramGanjil) {
  if (paramGanjil % 2 === 0) return "Nilai Parameter harus ganjil";

  const pattern1 = "*";
  const pattern2 = "#";
  let arrTemp = [];
  const hasilBagi = Math.floor(paramGanjil / 2);

  for (let i = 0; i < paramGanjil; i++) {
    arrTemp[i] = [];
    for (let j = 0; j < paramGanjil; j++) {
      // Cetak * baris pertama dan terakhir, Setiap nilai i dan j adalah 0 , nilai parameter - 1 sama dengan nilai akhir iterasi j, dan nilai j sama dengan nilai parameter dibagi 2
      if (
        (i == 0 && j == 0) ||
        (i == 0 && j == hasilBagi) ||
        (i == 0 && j == paramGanjil - 1)
      ) {
        arrTemp[i][j] = pattern1;
      }
      // Cetak # baris i sama dengan nilai parameter dibagi 2 dan column j sama dengan nilai parameter sama dengan 2
      else if (i == hasilBagi && j == hasilBagi) {
        arrTemp[i][j] = pattern2;
      }
      // Cetak * baris i sama dengan nilai parameter dibagi 2 atau column j sama dengan nilai parameter sama dengan 2
      else if (i == hasilBagi || j == hasilBagi) {
        arrTemp[i][j] = pattern1;
      }
      // Cetak * baris i sama dengan nilai parameter - 1 dan column pertama atau baris i sama dengan nilai parameter - 1 dan column j sama dengan nilai parameter dibagi 2 atau baris i sama dengan nilai parameter - 1 dan column j sama dengan nilai parameter - 1
      else if (
        (i == paramGanjil - 1 && j == 0) ||
        (i == paramGanjil - 1 && j == hasilBagi) ||
        (i == paramGanjil - 1 && j == paramGanjil - 1)
      ) {
        arrTemp[i][j] = pattern1;
      }
      // Cetak # baris dan column pada nilai array yang masih kosong atau selain kondisi di atas
      else {
        arrTemp[i][j] = pattern2;
      }
    }
  }
  return arrTemp.join("\n").split(",").join(" ");
}

console.log(drawImage(5));
console.log("\n");
console.log(drawImage(7));
