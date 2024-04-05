document.getElementById(formBuku).addEventListener("submit", function(event) {event.preventDefault});

// untuk mengambil nilai dari jumlah dan select option
let jumlah = parseInt(document.getElementById("jumlah").value);
let bukuDipilih = document.getElementById("buku").value;