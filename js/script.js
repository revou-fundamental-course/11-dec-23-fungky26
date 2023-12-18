function submitForm(event) {
    event.preventDefault(); // Mencegah formulir untuk melakukan submit

    // Mengambil nilai dari input nama
    var nameInput = document.getElementById('nama-input');
    var name = nameInput.value;

    // Memeriksa apakah input nama tidak kosong
    if (name.trim() !== '') {
        // Mengganti teks di elemen dengan id 'name' dengan nama yang dimasukkan
        document.getElementById('name').textContent = name;

        // Mengosongkan input nama dan pesan kesalahan (jika ada)
        nameInput.value = '';
        document.getElementById('error-name').textContent = '';
    } else {
        // Menampilkan pesan kesalahan jika input nama kosong
        document.getElementById('error-name').textContent = 'Nama tidak boleh kosong';
    }
}
