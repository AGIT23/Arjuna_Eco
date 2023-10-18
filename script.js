document.getElementById("back-button").addEventListener("click", function () {
    // Anda dapat menambahkan kode di sini untuk mengarahkan pengguna kembali ke halaman sebelumnya atau melakukan tindakan lain sesuai kebutuhan.
    alert("Anda kembali ke halaman sebelumnya.");
});

document.getElementById("community-form").addEventListener("submit", function (e) {
    if (!document.getElementById("accept-terms").checked || !document.getElementById("acknowledge-consequences").checked) {
        alert("Anda harus menyetujui syarat pengguna dan memahami konsekuensinya.");
        e.preventDefault(); // Menghentikan pengiriman formulir jika syarat tidak terpenuhi.
    } else {
        // Anda dapat menambahkan kode di sini untuk mengirim data formulir ke server atau melakukan tindakan lainnya setelah pengguna mengklik tombol "Kirim".
        alert("Data berhasil dikirim!");
    }
});


