function hitungBarang(kualitas,jumlah){
//keva
  const validate = {kualitasRules: ['A','B','C']}
  const hargaBarang = {a:{harga:3000,diskon:jumlah >= 10 ? (500*jumlah) : 0},b:{harga:3500,diskon:jumlah >= 5 ? 0.5 : 0},c:{harga:5000,diskon:0}}
  let hasil = '',totalHarga = 0,totalBayar = 0

  kualitas = kualitas.toString().toUpperCase()

  // validasi inputan kualitas
  if(!validate.kualitasRules.includes(kualitas)) return `kualitas '${kualitas}' tidak tersedia\nhanya tersedia A,B dan C`
  // validasi inputan jumlah harus angka/number
  if(typeof jumlah !== 'number') return 'Quantity Harus berupa angka'
  
  if(kualitas === 'A'){
    const {a} = hargaBarang
    if(jumlah >= 10){
      totalHarga = a.harga * jumlah
      totalBayar = totalHarga - a.diskon
      hasil = `
      - Total Harga Barang       : Rp.${totalHarga}
      - Potongan                 : Rp.${a.diskon}
      - Total yang harus dibayar : Rp.${totalBayar}
      `
    } else {
      totalHarga = a.harga * jumlah
      totalBayar = totalHarga
      hasil = `
      - Total Harga Barang       : Rp.${totalHarga}
      - Potongan                 : Rp.${a.diskon}
      - Total yang harus dibayar : Rp.${totalBayar}
      `
    }
    return hasil
  } else if(kualitas === 'B'){
    const {b} = hargaBarang
    if(jumlah >= 5){
      totalHarga = b.harga * jumlah
      totalBayar = totalHarga - (totalHarga * b.diskon)
      hasil = `
      - Total Harga Barang       : Rp.${totalHarga}
      - Potongan                 : ${b.diskon*100}%
      - Total yang harus dibayar : Rp.${totalBayar}
      `
    } else {
      totalHarga = b.harga * jumlah
      totalBayar = totalHarga
      hasil = `
      - Total Harga Barang       : Rp.${totalHarga}
      - Potongan                 : ${b.diskon}%
      - Total yang harus dibayar : Rp.${totalBayar}
      `
    }
    return hasil
  } else {
    const {c} = hargaBarang
    
      totalHarga = c.harga * jumlah
      totalBayar = totalHarga
      hasil = `
      - Total Harga Barang       : Rp.${totalHarga}
      - Potongan                 : Tidak Ada Potongan
      - Total yang harus dibayar : Rp.${totalBayar}
      `
    
    return hasil
  }
}

hitungBarang('A',11)