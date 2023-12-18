function sapa() {
    // Mendapatkan nilai dari elemen input dengan id "namaInput"
    var nama = document.getElementById('namaInput').value;

    // Memeriksa apakah nama sudah diisi atau belum
    if (nama.trim() !== '') {
        // Mendapatkan elemen dengan id "hasilSapaan"
        var hasilSapaan = document.getElementById('hasilSapaan');

        // Menampilkan pesan sapaan dengan nama
        hasilSapaan.innerHTML = 'Hai ' + nama + '! Selamat datang!';
    } else {
        // Menampilkan pesan jika nama belum diisi
        alert('Silakan masukkan nama Anda.');
    }
}
