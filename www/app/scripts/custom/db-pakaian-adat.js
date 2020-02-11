setTimeout(function(e){
    $('.loader-main').removeClass('loader-inactive');
}, 1)
var db = null;

var dbPakaianAdat = window.localStorage.getItem('dbPakaianAdat');

if(dbPakaianAdat != "true"){
    document.addEventListener('deviceready', function() {
        db = window.sqlitePlugin.openDatabase({
            name: 'seni-indonesia.db',
            location: 'default',
        });

        db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS pakaian_adat (id integer primary key autoincrement, pakaian_adat text, daerah text, konten text, image text)');

            tx.executeSql('DELETE FROM pakaian_adat');
            tx.executeSql('DELETE FROM sqlite_sequence where name="pakaian"');


            // =========================================================================================
            // PROVINSI Nangroe Aceh Darussalam
            // =========================================================================================

            // Pakaian Adat Ulee Balang
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Ulee Balang', 'Nangroe Aceh Darussalam', '../../img/pakaian-adat/aceh/ulee-balang.jpg',`
            <p>
                Nangroe Aceh Darussalam sangat terkenal dengan keanekaragaman budayanya yang khas. Salah satunya adalah pakaian adatnya yang bernama Ulee Balang. Pakaian adat Ulee Balang ini biasanya hanya dipakai oleh para raja Aceh dan keluarga-keluarga kerajaan dalam acara sakral kerajaan ataupun upacara adat tertentu.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Utara
            // =========================================================================================

            // Pakaian Adat Tradisional Ulos
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Tradisional Ulos', 'Sumatera Utara', '../../img/pakaian-adat/sumatera-utara/ulos.jpg',`
            <p>
                Ulos merupakan pakaian adat dari Sumatera Utara . Masyarakat karo menganggap pakaian adat ini sebagai ajimat, karena pakaian adat ini di percaya mempunyai magis yang tinggi.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Barat
            // =========================================================================================

            // Pakaian Adat Bundo Kanduang
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Bundo Kanduang', 'Sumatera Barat', '../../img/pakaian-adat/sumatera-barat/bundo-kanduang.jpg',`
            <p>
                Pakaian adat di Sumatra barat ini dibagi dua macam yaitu pakaian adat dan pakaian penghulu. pakaian adat bundo kanduang biasanya terdapat di daerah minagkabau Sumatera Barat.
            </p>`]);
            // =========================================================================================
            // PROVINSI Riau
            // =========================================================================================

            // Pakaian Adat Melayu
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Melayu', 'Riau', '../../img/pakaian-adat/riau/melayu.jpg',`
            <p>
                Di daerah Riau terdiri dari 3 jenis yaitu Indragiri, Bangkslis Riau, dan Siak .Pakaian adat Riau biasanya disebut pakaian melayu.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kepulauan Riau
            // =========================================================================================

            // Pakaian Adat Belanga
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Belanga', 'Kepulauan Riau', '../../img/pakaian-adat/kepulauan-riau/belanga.jpg',`
            <p>
                Teluk Belanga merupakan Pakaian adat Tradisional yang berasal dari kepulauan Riau. Dalam masyarakat melayu pakaian adat kaum laki-laki pakaian atasnya disebut teluk belanga. yang dimaksud tersebut adalah pakaian ini terdiri dari beberapa yaitu dari kain samping, celana dan songkok yang khas masyarakat  kepulauan Riau.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jambi
            // =========================================================================================

            // Pakaian Adat Melayu Jambi
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Melayu Jambi', 'Jambi', '../../img/pakaian-adat/jambi/melayu.jpg',`
            <p>
                Pakaian adat Jambi ini hampir mirip dengan pakaian adat yang ada di pulau Sumatera pada umumnya, yaitu pakaian adat Melayu.  pakain adat dari jambi ini memang tergolong glamor sebab diberi sulam emas dan di tambah hiasan yang yang cukup mewah untuk melengkapinya.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Selatan
            // =========================================================================================

            // Pakaian Adat Aesan Gede
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Aesan Gede', 'Sumatera Selatan', '../../img/pakaian-adat/sumatera-selatan/aesan-gede.jpg',`
            <p>
                Aesan Gede merupkan pakaian adat tradisional dari Sumatera Utara.  Baju adat Aesan Gede ini terinspirasi dari kerajaan Sriwijaya yang mana kerajaan tersebut pada masa itu sedang berjaya-jayanya di daerah Sumatera Selatan.
            </p>`]);
            // =========================================================================================
            // PROVINSI Bangka Belitung
            // =========================================================================================

            // Pakaian Adat Tradisional Paksian
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Tradisional Paksian', 'Bangka Belitung', '../../img/pakaian-adat/bangka-belitung/paksian.jpg',`
            <p>
                Paksian merupakan pakaian adat yang berasal dari Bangka Belitung. Pakaian buat kaum perempuan kebanyakan memakai baju kurung yang berwarna merah yang bahanya dari kain sutra dan dikepalanya biasanya dikenakan mahkota yang mana disebut dengan Paksian. kalau untuk kaum laki-laki biasanya memakai sorban yang lebh dikenal dengan nama Sungkon.
            </p>`]);
            // =========================================================================================
            // PROVINSI Bengkulu
            // =========================================================================================

            // Pakaian Adat Bengkulu
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Bengkulu', 'Bengkulu', '../../img/pakaian-adat/bengkulu/adat-bengkulu.jpg',`
            <p>
                Perempuan biasanya memakai baju kurung yang mempunyai lengan panjang, di taburi pola-pola, dan disulam emas yang berbentuk lempengan bulat mirip uang logam. Tetapi kalau laki-laki biasanya memakai jas, celana yang panjang, sarung dan alas kaki, alas kaki tersebut juga lengkap dengan penutup kepala dan keris.
            </p>`]);
            // =========================================================================================
            // PROVINSI Lampung
            // =========================================================================================

            // Pakaian Adat Yulang Bawang
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Yulang Bawang', 'Lampung', '../../img/pakaian-adat/lampung/yulang-bawang.jpg',`
            <p>
                Pakaian adat dari Lampung ini bila kita amati banyak sekali di temukan perbedaan antara Lampung bagian pesisir dan Lampung daratan, namun walau memiliki sedikit perbedaan dan masih ada kesamaan yaitu masih sama-sama menggunakan kainyang tapis dan di hiasi oleh logam kuningan yang mempercantik dan terkesan sangat glamor.
            </p>
            <p>
                yang di maksud dengan kain tapis di sini adalah sebuah kain yang di tenun dengan proses yang masih manual yang memakai tinta emas yang di cetak dengan tangan terampil sehingga terbentuklah kain tapis yang sangat cantik dan pakaian tersebut jika di pakai oleh pengantin akan terlihat sangat berkharisma.
            </p>`]);
            // =========================================================================================
            // PROVINSI DKI Jakarta
            // =========================================================================================

            // Pakaian Adat Betawi
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Betawi', 'DKI Jakarta', '../../img/pakaian-adat/dki-jakarta/betawi.jpg',`
            <p>
                DKI Jakarta memang dikenal dengan suku betawinya yang sangat dominan. Begitu juga dengan pakaian adatnya yang berasal dari pakaian adat betawi.
            </p>
            <p>
                Pakaian adat ini sangat dipengaruhi dari beberapa macam budaya seperti budaya Arab, Barat, dan Melayu. Pakaian adat ini terkenal dengan menggunakan sarung untuk kaum laki-laki dan kerudung untuk kaum perempuan.
            </p>`]);
            // =========================================================================================
            // PROVINSI Banten
            // =========================================================================================

            // Pakaian Adat Pangsi
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Pangsi', 'Banten', '../../img/pakaian-adat/banten/pangsi.jpg',`
            <p>
                Masyarakat suku baduy dalam kehidupan sehari-harinya masih memakai pakaian adat ini.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Barat
            // =========================================================================================

            // Pakaian Adat Tradisional Kebaya
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Tradisional Kebaya', 'Jawa Barat', '../../img/pakaian-adat/jawa-barat/kebaya.jpg',`
            <p>
                Walaupun digunakan oleh berbagai kalangan mulai dari bangsawan hingga masyarakat biasa, namun pakaian adat dari Jawa Barat ini memiliki masing-masing perbedaan.
            </p>
            <p>
                Terutama yang digunakan untuk kaum laki-laki dan perempuan. Untuk membedakan golongan, perbedaan terletak pada bahan dan corak yang digunakan untuk membuat pakaian adat ini.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Tengah
            // =========================================================================================

            // Pakaian Adat Tradisional Kebaya
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Tradisional Kebaya', 'Jawa Tengah', '../../img/pakaian-adat/jawa-tengah/kebaya.jpg',`
            <p>
                Provinsi Jawa Tengah sangat kental akan ragam budayanya yang masih alami dari tahun ke tahun. Dengan banyak menggunakan corak batik untuk pakaian bawahan dan kebaya untuk atasan. Namun keduanya dari dulu memiliki khas yang unik sesuai dengan adat Jawa.
            </p>
            <p>
                Bahan batik yang digunakan pun terkenal batik asli yang ditulis secara manual, bukan merupakan batik seperti jaman modern ini yaitu dengan menggunakan cap.
            </p>`]);
            // =========================================================================================
            // PROVINSI DI Yogyakarta
            // =========================================================================================

            // Pakaian Adat Tradisional Kesatrian
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Tradisional Kesatrian', 'DI Yogyakarta', '../../img/pakaian-adat/di-yogyakarta/kesatrian.jpg',`
            <p>
                Selain terkenal akan wisatanya yang menjadi daya tarik, Provinsi Yogyakarta memang masih memiliki adat jawa yang kental. Tak jarang jika provinsi ini dikenal sebagai provinsi yang masih sakral.
            </p>
            <p>
                Pakaian adat yang digunakan pun dipercaya tidak boleh dipakai untuk acara sembarangan. Mereka yang menggunakannya harus menjaga dan merawat sesuai dengan peraturan dari pihak keraton.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Timur
            // =========================================================================================

            // Pakaian Adat Tradisional Pesa’an
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Tradisional Pesa’an', 'Jawa Timur', '../../img/pakaian-adat/jawa-timur/pesaan.jpg',`
            <p>
                Pakaian adat Indonesia yang berikutnya adalah dari daerah Madura  Jawa Timur. Untuk pakaian ini terkenal sangat sederhana yang hanya berupa kaos garis putih yang dilengkapi dengan celana yang longgar untuk pihak laki-laki. Sedangkan untuk perempuan biasanya hanya menggunakan kebaya yang dilengkapi dengan rok panjang.
            </p>`]);
            // =========================================================================================
            // PROVINSI Bali
            // =========================================================================================

            // Pakaian Adat Tradisional
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Tradisional', 'Bali', '../../img/pakaian-adat/bali/pakaian-adat-tradisional.jpg',`
            <p>
                Untuk daerah yang satu ini memiliki pakaian adat dengan corak dan warna yang sangat dikenal. Walaupun sekilas terlihat sama, namun corak dan ornamen yang ada dalam pakaian adat Bali ini dibedakan sesuai dengan acara upacara yang diadakan.
            </p>
            <p>
                Kita juga bisa membedakan kelas sosial, umur, dan jenis kelamin melalui corak busana dan perhiasan yang digunakan sebagai ornamennya.
            </p>`]);
            // =========================================================================================
            // PROVINSI Nusa Tenggara Barat
            // =========================================================================================

            // Pakaian Adat Tradisional Lombok
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Tradisional Lombok', 'Nusa Tenggara Barat', '../../img/pakaian-adat/nusa-tenggara-barat/lombok.jpg',`
            <p>
                Pakaian adat yang digunakan di Provinsi NTB adalah pakaian adat khas Lombok Mataram. Untuk Pakaian ini biasa digunakan dalam acara-acara penting seperti pernikahan, upacara, ataupun acara adat lainnya.
            </p>
            <p>
                Pakaian adat dari lombok sangat terkenal dengan kain songketnya yang khas, elegan dan terkesan berkelas. Tak jarang kain songket ini dijadikan oleh-oleh para wisatawan yang berkunjung ke NTB.
            </p>`]);
            // =========================================================================================
            // PROVINSI Nusa Tenggara Timur
            // =========================================================================================

            // Pakaian Adat Nusa Tenggara Timur
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Nusa Tenggara Timur', 'Nusa Tenggara Timur', '../../img/pakaian-adat/nusa-tenggara-timur/ntt.jpg',`
            <p>
                Nama pakaian adat NTT ini yaitu baju amarasi. Baju untuk pria berupa selimut dan kain tenun ikat, kalung habas berbandung gong, baju bodo, ikat kepala dengan hiasan tiara, multi salak dan gelang timor. Sementara baju untuk wanita berupa sarung tenun sebagai bawahan,kebaya, selendang penutup dada, kalung multi salak, sisir emas, hiasan kepala berupa tusuk konde dengan 3 buah koin dan sepasang gelang kepala ular.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Barat
            // =========================================================================================

            // Pakaian Adat Perang
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Perang', 'Kalimantan Barat', '../../img/pakaian-adat/kalimantan-barat/perang.jpg',`
            <p>
                Pakaian adat dari Kalimantan Barat adalah sejenis pakaian perang yang terbuat dari bahan dasar kayu yang diolah menjadi kain. Kayu yang digunakan tak sembarang kayu pada umumnya, kulit kayu yang dipakai adalah dari kayu ampuro.
            </p>
            <p>
                Keahlian para masyarakat Kalimantan dalam membuat pakaian adat ini adalah warisan turun temurun dari nenek moyang mereka.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Tengah
            // =========================================================================================

            // Pakaian Adat Kalimantan Tengah
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Kalimantan Tengah', 'Kalimantan Tengah', '../../img/pakaian-adat/kalimantan-tengah/pakaian-adat.jpg',`
            <p>
                Rompi sangkarut umumnya dihiasi dengan lukisan-lukisan dari cat yang alami dan beragam pernik, seperti tempelan klit trengglling, kancing manik-manik kancing uang logam, atau benda-benda lainnya yang di percaya memiliki kekuatan magis (ajimat).
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Selatan
            // =========================================================================================

            // Pakaian Adat Pengantin Bagajah Gamuling Baular Lulut
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Pengantin Bagajah Gamuling Baular Lulut', 'Kalimantan Selatan', '../../img/pakaian-adat/kalimantan-selatan/baular-lulut.jpg',`
            <p>
                Terdapat banyaknya jenis pakaian adat dari suku banjar yang asalnya dari Provinsi Kalimantan Selatan, diantarana adalah Bagajah gamulang baular lutut, pengantin baamar galung pancar matahari, pengantin babaju kun galung pacina, dan pengantin babaju kubaya panjang.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Timur
            // =========================================================================================

            // Pakaian Adat Kalimantan Timur
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Kalimantan Timur', 'Kalimantan Timur', '../../img/pakaian-adat/kalimantan-timur/pakaian-adat.jpg',`
            <p>
                Pakaian adat ini biasanya digunakan masyarakat sekitar berdasarkan kegunaan mereka sehari-hari. Misalnya untuk melakukan upacara adat dan saat menari pun pakaian mereka sudah berbeda.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Utara
            // =========================================================================================

            // Pakaian Adat Kalimantan Utara
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Kalimantan Utara', 'Kalimantan Utara', '../../img/pakaian-adat/kalimantan-utara/pakaian-adat.jpg',`
            <p>
                Berada yang di ujung dari pulau kalimantan. Meskipun wilayah ini luasnya 75,467,70 km², namun jumlah populasi penduduknya bisa dibialng tergolong sedikit sekitar 600 ribu jiwa. sebagian besar penduduknya sudah didominasi oleh suku dayak.
            </p>
            <p>
                Walaupun pakaian ini terlihat sama dengan pakain adat dari Kalimantan Timur, namun pakaian ini tetap memiliki perbedaan dan ciri khas tersendiri.
            </p>`]);
            // =========================================================================================
            // PROVINSI Papua
            // =========================================================================================

            // Pakaian Adat Papua
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Papua', 'Papua', '../../img/pakaian-adat/papua/pakaian-adat.jpg',`
            <p>
                Di Papua pakaian adat tradisional perempuan dan laki-laki bentuknya hampir mirip. Biasanya mereka hanya mengenakan baju dan penutup pada bagian bawah dengan bentuk yang sama. Selain itu terus dilengkapi dengan memakai dekorasi di kepala yangf berentuk burung cendrawasi, kalung, gelang, dan juga ikat pinggang dari manik-manik dan juga ruai-rumbai di pergelangan kaki.
            </p>
            <p>
                Corak-corak pakaian yang dilukis menggambarkan ciptaan yang baru, di sertai perisai dan tombak yang sering dipakai laki-laki memberikan kesan yang sangat kental bagi warga Papua.
            </p>`]);
            // =========================================================================================
            // PROVINSI Papua Barat
            // =========================================================================================

            // Pakaian Adat Ewer
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Ewer', 'Papua Barat', '../../img/pakaian-adat/papua-barat/ewer.jpg',`
            <p>
                Pakaian adat Ewer ialah merupakan pakain adat tradisional yang berasal dari wilayah Papua Barat.
            </p>`]);
            // =========================================================================================
            // PROVINSI Gorontalo
            // =========================================================================================

            // Pakaian Adat Gorontalo
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Gorontalo', 'Gorontalo', '../../img/pakaian-adat/gorontalo/pakaian-adat.jpg',`
            <p>
                Pakaian adat tradisional Gorontalo ini biasa disebut dengan Billu dan Mukuta. Billu merupakaian pakaian untuk wanita dan Mukuta pakaian untuk pria. Pakaian adat ini memiliki tiga warna dan dari warna tersebut mempunyai arti tersendiri, yaitu warna kuning keemasan, warna hijau, dan warna ungu.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Tenggara
            // =========================================================================================

            // Pakaian Adat Suku Tolaki
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Suku Tolaki', 'Sulawesi Tenggara', '../../img/pakaian-adat/sulawesi-tenggara/suku-tolaki.jpg',`
            <p>
                Sulawesi Tenggara adalah provinsi yang letaknya di jazirah Sulawesi. Provinsi ini dihuni oleh masyarakat-masyarakat yang sangat heterogen. Secara demografi, suku bangsa penduduk provinsi yang beribukota di Kendari ini terdiri atas suku Wawonii (9%), Morenene (10%), Muna (19%), Butonj (26%), Tolaki (36%).
            </p>
            <p>
                Menyadari bahwa suku Tolaki merupakan suku mayoritas penduduknya, maka ketika kita bicara mengenai budaya Sulawesi Tenggara, maka budaya suku Tolaki-lah yang paling sering dikedepankan, termasuk bila kita mau membahas pakaian adatnya.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Tengah
            // =========================================================================================

            // Pakaian Adat Nggembe
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Nggembe', 'Sulawesi Tengah', '../../img/pakaian-adat/sulawesi-tengah/nggembe.jpg',`
            <p>
                Pakaian Nggembe adalah pakaian yang biasa dipakai oleh remaja pitri untuk menghadiri upacara adat maupun pesta. Ciri-ciri baju ini mempunyai bentuk segi empat .berlengan lebar, berkerah bulat, panjang blus sampai pinggang dan longgar.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Barat
            // =========================================================================================

            // Pakaian Adat Mandar
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Mandar', 'Sulawesi Barat', '../../img/pakaian-adat/sulawesi-barat/mandar.jpg',`
            <p>
                Pakaian Adat Sulawesi Barat ini merupakan pakaian yang mirip dengan sarung sutra, tapi di setiap jenisnya memiliki masing-masing ciri yang berbeda yaitu dari corak dan membuatnya.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Utara
            // =========================================================================================

            // Pakaian Adat Kulavi (Donggala)
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Kulavi (Donggala)', 'Sulawesi Utara', '../../img/pakaian-adat/sulawesi-utara/donggala.jpg',`
            <p>
                Provinsi Kalimantan Utara merupakan provinsi yang paling muda di antara provinsi di seluruh Indonesia. Selain itu provinsi ini juga bisa dibilang berbatasan langsung dengan negara tetangga. Pada awal mulanya provinsi ini masuk kedalam proivnsi Kalimantan Timur, Oleh karena itu mungkin kebudayaannya sama persis dengan Kalimantan Timur.
            </p>`]);
            // =========================================================================================
            // PROVINSI Maluku
            // =========================================================================================

            // Pakaian Adat Baju Cele
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Baju Cele', 'Maluku', '../../img/pakaian-adat/maluku/baju-cele.jpg',`
            <p>
                Baju cele ini meiliki ciri berkotak- kotak kecil dan geometris yang bergaris-garis. pada umumnya baju adat ini dipadukan dengan sarung yang mempunyai warna yang sangat jauh berbeda, tapi yang terpenting haris serasi dam seimbang.  Baju cele ini hanya dipakai di upacar- upacara adat saja.
            </p>`]);
            // =========================================================================================
            // PROVINSI Maluku Utara
            // =========================================================================================

            // Pakaian Adat Tradisional Manteren Lemo
            tx.executeSql('INSERT INTO pakaian_adat (pakaian_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pakaian Adat Tradisional Manteren Lemo', 'Maluku Utara', '../../img/pakaian-adat/maluku-utara/manteren-lemo.jpg',`
            <p>
                Pakaian ini terdiri dari celana panjang berwarna hitam dan bersama bis merah yang memanjang dari atas sampai bawah. bajunya seperti jas yang tertutup dengan kancing yang besar yang terbuat dari perak yang mempnyai jumlah sekitar sembilan. Dan untuk ujung tangan, leher dan saku jas semua berwarna merah.
            </p>`]);

        }, function(error) {
            alert('Transaction ERROR: ' + error.message);
        }, function() {
            window.localStorage.setItem('dbPakaianAdat', 'true');
            setTimeout(function(e){
                $('.loader-main').addClass('loader-inactive');
            }, 1000)
        });
    })
}
else{
    setTimeout(function(e){
        $('.loader-main').addClass('loader-inactive');
    }, 1000)
}