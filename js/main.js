/* ==========================================================
   GoPlafon.id — Script halaman
   1. Menu hamburger (HP)
   2. Lightbox galeri (klik foto untuk memperbesar)
   3. Tempat pemasangan pelacakan klik WhatsApp (Pixel/GA4)
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- 1. MENU HAMBURGER ---------- */
    var tombolMenu = document.querySelector('.tombol-menu');
    var nav = document.querySelector('.nav');

    if (tombolMenu && nav) {
        tombolMenu.addEventListener('click', function () {
            var terbuka = nav.classList.toggle('buka');
            tombolMenu.setAttribute('aria-expanded', terbuka ? 'true' : 'false');
        });

        // tutup menu setelah salah satu link diklik
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('buka');
                tombolMenu.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ---------- 2. LIGHTBOX GALERI ---------- */
    var tombolGaleri = Array.prototype.slice.call(document.querySelectorAll('.galeri-item'));
    var lightbox = document.getElementById('lightbox');

    if (tombolGaleri.length && lightbox) {
        var gambarBesar = lightbox.querySelector('img');
        var indexAktif = 0;

        function bukaLightbox(i) {
            indexAktif = (i + tombolGaleri.length) % tombolGaleri.length;
            var sumber = tombolGaleri[indexAktif].querySelector('img');
            gambarBesar.src = sumber.src;
            gambarBesar.alt = sumber.alt;
            lightbox.classList.add('tampil');
            document.body.style.overflow = 'hidden';
        }

        function tutupLightbox() {
            lightbox.classList.remove('tampil');
            document.body.style.overflow = '';
        }

        tombolGaleri.forEach(function (tombol, i) {
            tombol.addEventListener('click', function () { bukaLightbox(i); });
        });

        lightbox.querySelector('.lb-tutup').addEventListener('click', tutupLightbox);
        lightbox.querySelector('.lb-prev').addEventListener('click', function (e) {
            e.stopPropagation();
            bukaLightbox(indexAktif - 1);
        });
        lightbox.querySelector('.lb-next').addEventListener('click', function (e) {
            e.stopPropagation();
            bukaLightbox(indexAktif + 1);
        });

        // klik area gelap = tutup
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) tutupLightbox();
        });

        // tombol keyboard: Esc tutup, panah kiri/kanan ganti foto
        document.addEventListener('keydown', function (e) {
            if (!lightbox.classList.contains('tampil')) return;
            if (e.key === 'Escape') tutupLightbox();
            if (e.key === 'ArrowLeft') bukaLightbox(indexAktif - 1);
            if (e.key === 'ArrowRight') bukaLightbox(indexAktif + 1);
        });
    }

    /* ---------- 3. PELACAKAN KLIK WHATSAPP ----------
       Semua tombol WhatsApp punya class "lacak-wa".
       Setelah Meta Pixel / Google Ads / GA4 dipasang di index.html,
       hapus tanda komentar pada baris yang sesuai di bawah ini.
       Sebelum itu, klik hanya dicatat di Console browser.            */
    document.querySelectorAll('.lacak-wa').forEach(function (tombol) {
        tombol.addEventListener('click', function () {
            var asal = tombol.dataset.asal || 'tidak diketahui';

            // Meta Pixel (Facebook / Instagram Ads):
            // if (typeof fbq === 'function') fbq('track', 'Contact', { content_name: asal });

            // Google Analytics 4:
            // if (typeof gtag === 'function') gtag('event', 'klik_whatsapp', { asal: asal });

            // Google Ads konversi (ganti AW-XXXX/label sesuai akun):
            // if (typeof gtag === 'function') gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/LabelAnda' });

            console.log('Klik WhatsApp dari:', asal);
        });
    });

});
