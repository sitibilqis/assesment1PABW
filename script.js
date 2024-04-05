let buku = [
    {"nama": "sherlock", "jumlah":2},
    {"nama": "lupin", "jumlah":2},
    {"nama": "aladdin", "jumlah":2},
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

// jika buku ditemukan dan jumlah yang diminta lebih banyak
if (jumlah > bukuDitemukan.jumlah) {
    alert("Jumlah buku tidak tersedia.");
    return;
}

// jika jumlah buku yang diinputkan sama atau kurang dari stock jumlah array
alert("Silahkan ambil buku Anda.");
});