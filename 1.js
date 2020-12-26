function hitungGaji(nama,gapok,bulan,tunjangan){
  let flatTunj = (tunjangan ? 500000 : 0);
  let bpjs = (gapok * (3/100)); // 3% gaji
  let pajak = (gapok * (5/100)); //5% gaji
  let totalBersih = ((gapok + flatTunj - (bpjs+pajak)));
  let totalGaji = totalBersih * bulan;
  let formatOut = `
    ===============================
    Nama Karyawan: ${nama}
    Gaji Pokok: ${gapok}
    Tunjangan: ${flatTunj}
    BPJS: ${bpjs}
    Pajak: ${pajak}
    ===============================
    Gaji bersih: ${totalBersih} / bulan
    ===============================
    Total Gaji: ${totalGaji}

  `;
  return formatOut;

}

hitungGaji("andi",1500000,2,true);