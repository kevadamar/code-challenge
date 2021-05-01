function hitungVoucher(pKodeVoucher, pUangHarga) {
  let hargaBayar = 0;
  let kembalian = 0;
  let totalDiskon = 0;
  const kodeVoucher = [
    {
      namaVoucher: "DumbWaysJos",
      minBelanja: 50000,
      maxDiskon: 20000,
      diskon: 0.211,
    },
    {
      namaVoucher: "DumbWaysMantap",
      minBelanja: 80000,
      maxDiskon: 40000,
      diskon: 30 / 100,
    },
  ];

  kodeVoucher.forEach((e) => {
    if (e.namaVoucher === pKodeVoucher) {
      if (pUangHarga >= e.minBelanja) {
        if (pUangHarga * e.diskon >= e.maxDiskon) {
          totalDiskon = e.maxDiskon;
          hargaBayar = pUangHarga - e.maxDiskon;
          kembalian = pUangHarga - hargaBayar;
        } else {
          totalDiskon = pUangHarga * e.diskon;
          hargaBayar = pUangHarga - totalDiskon;
          kembalian = pUangHarga - hargaBayar;
        }
      } else {
        hargaBayar = pUangHarga;
      }
    }
  });
  return `Uang yang harus dibayar : ${hargaBayar}\nDiskon : ${totalDiskon}\nKembalian : ${kembalian}`;
}
hitungVoucher("DumbWaysJos", 100000);
