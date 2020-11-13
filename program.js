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

//function rekursif
// function angkot(a){
//     if(a >= 100) {
//         return;
//     }

//     console.log('banyak angkot : '+ a)
//     return angkot(a+1)

// }

// angkot(10);


// belajar Array 
// var alatTulis = ['Buku','Pensil','Penghapus','Penggaris']
// var jumlahAtk = alatTulis.length;
// console.log(jumlahAtk);

// var alatTulisUtama = alatTulis[1]
// console.log(alatTulisUtama);

// pertama = prompt('Kamu sedang apa ?');
// kedua = prompt('Lalu nanti ngapain?');
// ketiga = prompt('Terus ngapain?');


// var toDoList = [pertama, kedua, ketiga];

// console.log(toDoList[0])
// console.log(toDoList[1])
// console.log(toDoList[2])

// var myArray = ['1',['nama','umur'],'cita-cita']
// console(myArray[2][0]);

// var myArray = ['nama','usia','profesi',['adek','kakak'] ];
// console.log(myArray[3][0]);

//manipulasi array 
var namaSiswa = ['azis','indah','bagas']
var data = true
var valueAwal = 0;
// while(data === true) {
//     namaSiswa.push(prompt('Masukan data siswa'));
//     data = confirm('Mau tambah lagi ?');
// }

// for( var i = 0; i <= namaSiswa.length; i++) {
//     console.log('Mahasiswa ' + (i+1) + ':' + namaSiswa[i])
// }

// var siswa8 = namaSiswa[8];
// console.log(siswa8);

// while(valueAwal <= namaSiswa.length) {
//     console.log(namaSiswa[valueAwal]);
// valueAwal++
// }

// var cetak = function(e) {
//   console.log(e)
// }

// namaSiswa.forEach(cetak);

//filter pada array 
// var angka = [1,2,3,4,5,6,7,8,9,88,66,89,12,45,56,67]
// var angka2 = angka.filter(function(x) {
//     return x %2 == 0
// })

// console.log(angka2.join('\n'));

var nilaiAwal = true;
while(nilaiAwal == true){
    var nama = prompt('Siapakah perempuan tercantik di dunia ?').toLowerCase();
    if(nama == 'ajeng'){
        alert('SALAH!!! AJENG JELEK')
    } else if ( nama == 'ibu' || nama == 'mamah' || nama == 'mama' || nama == 'bunda'){
        alert('TEPAT! SEKALI!!!!!! MEREKA WANITA TERCANTIK DIDUNIA :)')
    } else {
        alert("LUMAYAN CAKEP :')")
    }
    nilaiAwal = confirm('Mau coba lagi ?')
}