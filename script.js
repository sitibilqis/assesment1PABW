let buku = [
    {"nama": "sherlock", "jumlah":2},
    {"nama": "lupin", "jumlah":2},
  ]

document.getElementById("formBuku").addEventListener("submit", function(event) {
    event.preventDefault();

// untuk mengambil nilai dari jumlah dan select option
let jumlah = parseInt(document.getElementById("jumlah").value);
let bukuDipilih = document.getElementById("buku").value;

// mengecek apakah textfield kosong atau tidak
if (isNaN(jumlah) || jumlah <=0) {
    alert("Masukkan jumlah.");
    return;
}

// jika jumlah tidak kosong, melakukan pencarian array
let bukuDitemukan = buku.find(item => item.nama === bukuDipilih);

// jika buku tidak ditemukan
if (!bukuDitemukan) {
    alert("Buku tidak ditemukan.");
    return;
}

});