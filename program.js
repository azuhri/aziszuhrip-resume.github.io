// var bintang = '';
// var batang = '';
// for( var i = 0; i < 10; i++) {
//     for(var b = 0; b <= i; b++) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// for( var i = 0; i < 10; i++){
//     for( var b = 0; b < 3; b++){
//         batang += '*'
//     }
//     batang += '\n'
// }
// console.log(bintang)
// console.log(batang);
// console.log(bintang)
// var angka = parseInt(prompt('masukan angka...'));
// var kosong = angka.length;
// if( kosong === '0' ){
//     alert('nilai kosong');
//     var cobaLagi = confirm('coba lagi?');
//     if( cobaLagi === true ){
//         window.location.href = 'index.html';
//     }
// }   


// if( angka % 2 === 0){
//     alert('Bilangan genap');
// }else if( angka % 2 === 1 ){
//     alert('Bilangan ganjil')
// }else if( kosong === '0' ){
//     alert('Tolong isi dengan angka')
// }else {
//     alert('Bukan sebuah angka')
// }

// // console.log(test)

// // object
// var namaKu = {
//     panjang:'Azis Zuhri Pratomo',
//     depan:'Azis',
//     tengah:'Zuhri',
//     belakang:'Pratomo'
// };

// console.log(kosong);
// console.log(typeof(kosong));

//Program luas persegi
// var p = prompt('Masukan panjang');
// var l = prompt('Masukan lebar');

// function luasPersegi(p, l) {
//     luas = p*l;
//     // alert('Luas Persegi adalah: ' + luas);
//     return luas;
// }

// alert(luasPersegi(p,l));

//program pembelian alat tulis
// alert('Daftar alat tulis: \n -Buku : Rp. 5000 \n -Pencil Rp. 3000 \n -Penghapus: Rp. 2000 ' 
// +'\n\n Klik ok untuk memilih');
// var buku = '5000';
// var pensil = '3000';
// var penghapus = '2000';

// var pilihanPembeli = prompt('mau beli apa ?').toLowerCase();
// var banyakBarang = prompt('Berapa banyak ' + pilihanPembeli).toLowerCase();


// // jika yang dibeli tidak ada
// if( pilihanPembeli != 'buku' && pilihanPembeli != 'pensil' && pilihanPembeli != 'penghapus' ){
//     alert('barang tidak tersedia')
//     cobaLagi = confirm('mau coba lagi?');
//     if(cobaLagi === true) {
//         location.reload();
//     }
// }


// switch(pilihanPembeli) {
//     case 'buku':
//         harga = buku;
//         totalHarga = buku * banyakBarang;
//         alert('Harga buku: ' + harga + '\n' + 'Banyak barang: ' 
//         + banyakBarang + '\n' + 'Total harga: ' + totalHarga );
//         break;
//     case 'pensil':
//             harga = pensil;
//             totalHarga = pensil * banyakBarang;
//             alert('Harga pensil: ' + harga + '\n' + 'Banyak barang: ' 
//             + banyakBarang + '\n' + 'Total harga: ' + totalHarga );
//             break;
//     case 'penghapus':
//         harga = penghapus;
//         totalHarga = penghapus * banyakBarang;
//         alert('Harga penghapus: ' + harga + '\n' + 'Banyak barang: ' 
//         + banyakBarang + '\n' + 'Total harga: ' + totalHarga );
//         break;
//     default:
//         alert('Terimkasih sudah berkunjung')
// }

// belajar Array 
