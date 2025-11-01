// INI ADALAH FILE js/guest.js YANG SUDAH BERSIH DAN FINAL
// ---------------------------------------------------

// Baris import HARUS selalu ada di paling atas
import { guest } from './app/guest/guest.js';

// Ini adalah fungsi pembungkus (IIFE)
((w) => {

    // Baris 1: Inisialisasi 'guest' (ini kode asli Anda)
    w.undangan = guest.init(); 

    // Baris 2: Tambahkan fungsi floating alert ke 'w.undangan'
    // ==================================
    // === Floating Alert Utility ===
    // ==================================
    w.undangan.util = w.undangan.util || {};

    /**
     * Menampilkan alert mengambang di atas layar.
     * @param {string} message Pesan yang ingin ditampilkan.
     * @param {'success'|'danger'|'warning'|'info'} type Jenis alert (mempengaruhi warna).
     */
    w.undangan.util.showFloatingAlert = function (message, type = 'danger') {
        
        // Hapus alert lama jika ada
        const existing = document.getElementById('floating-alert');
        if (existing) {
            existing.remove();
        }

        // Buat elemen alert baru
        const alert = document.createElement('div');
        alert.id = 'floating-alert';
        // Menggunakan kelas Bootstrap untuk styling
        alert.className = `position-fixed top-0 start-50 translate-middle-x mt-3 alert alert-${type} shadow rounded-4 text-center px-4 py-2 fade show`;
        alert.style.zIndex = '2000'; // Pastikan tampil di atas segalanya
        alert.textContent = message;

        // Tambahkan ke body
        document.body.appendChild(alert);

        // Hapus alert setelah 3 detik
        setTimeout(() => {
            alert.classList.remove('show');
            // Beri waktu 0.5d untuk animasi fade-out sebelum dihapus
            setTimeout(() => alert.remove(), 500); 
        }, 3000);
    };
    // ==================================
    // === Akhir Floating Alert Utility ===
    // ==================================

})(window);