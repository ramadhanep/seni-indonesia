setTimeout(function(e){
    $('.loader-main').removeClass('loader-inactive');
}, 1)
var db = null;

var dbRumahAdat = window.localStorage.getItem('dbRumahAdat');

if(dbRumahAdat != "true"){
    document.addEventListener('deviceready', function() {
        db = window.sqlitePlugin.openDatabase({
            name: 'seni-indonesia.db',
            location: 'default',
        });

        db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS rumah_adat (id integer primary key autoincrement, rumah_adat text, daerah text, konten text, image text)');

            tx.executeSql('DELETE FROM rumah_adat');
            tx.executeSql('DELETE FROM sqlite_sequence where name="rumah_adat"');


            // =========================================================================================
            // PROVINSI SUMATERA UTARA
            // =========================================================================================

            // Bolon
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Bolon', 'Sumatera Utara', '../../img/rumah-adat/sumatera-utara/bolon.jpg',`
            <p>
                Rumah Balon merupakan rumah Sumatra Utara yang menjadi identitas suku batak, yang berada di Sumatra Utara. Ada beberapa jenis rumah balon yang sempat populer, dan menjadi gaya arsitektur hunian rumah orang batak.
            </p>
            <p>
                Beberapa jenis rumah adat di Indonesia, tersebut diantaranya rumah balon toba, Balon Simalungun, Balon Pakpak, Balon Karo, Balon Angkota, diantara rumah-rumah tersebut memiliki ciri khas gaya bangunan tersendiri, namun pada saat ini juga sudah sangat sulit ditemui.
            </p>`]);
            // =========================================================================================
            // PROVINSI SUMATERA Barat
            // =========================================================================================

            // Gadang
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gadang', 'Sumatera Barat', '../../img/rumah-adat/sumatera-barat/gadang.jpg',`
            <p>
                Rumah Adat gadang atau rumah godang adalah rumah adat Minangkabau, yang hingga kini masih banyak di temui di Provinsi Sumatra Barat. Teringat bahwa kebudayaan melayu yang menyebar di sekitar Semenanjung Melaya.
            </p>
            <p>
                Seperti ini juga dapat kita temui hingga di beberapa Daerah di Malaysia, jadi seandainya anda melihat rumah gadang yang berada di negara tetangga, jangan anggap mereka telah mencuri kebudayaan kita, karena kebudayaan malaya telah menyebar di sekitar Semenanjung Malaya.
            </p>`]);
            // =========================================================================================
            // PROVINSI Nanggroe Aceh Darussalam
            // =========================================================================================

            // Krong Bade
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Krong Bade', 'Nanggroe Aceh Darussalam', '../../img/rumah-adat/aceh/krong-bade.jpg',`
            <p>
                Rumah adat Nangroe Aceh Darussalam biasa dikenal dengan rumah adat kronge bade yang berasal dari. Provinsi paling barat di indonesia, yaitu Nangroe Aceh Darussalam.
            </p>
            <p>
                Rumah kronge bade, merupakan rumah panggung yang hanya memiliiki satu tangga di depan, yang biasa digunakan sebagai. Jalan keluar dan masuk di rumah, melalui satu tangga di depan.
            </p>
            <p>
                Rumah aceh ini keberadaanya semakin langka dan hampir jarang di temui, di karenakan masyarakat aceh. Lebih memilih membuat rumah dengan desain modern, alasanya karena biaya pembuatan rumah adat kronge bade lebih mahal dari pada rumah modern dan juga biaya perawatan juga tidak sedikit.
            </p>`]);
            // =========================================================================================
            // PROVINSI Bangka Belitung
            // =========================================================================================

            // Rakit Limas
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Rakit Limas', 'Bangka Belitung', '../../img/rumah-adat/bangka-belitung/rakit-limas.jpg',`
            <p>
                Rumah rakit limas, ialah rumah adat yang berasar dari Sumatra Utara,  sekilas jika kita perhatikan rumah adat rakit limas hampir sama dengan rumah adat limas. Karena rumah ini mempunyai arsitektur dan aksen yang sama. Karena masih sama-sama daerah melayu serta masih berada di bumi Sumatra. Dan dapat kita lihat juga yang membedakan antara lain pada aksen rakitnya.
            </p>
            <p>
                Rumah adat Bangka Belitung yang merupakan daerah pulau, sehingga menambahkan pada aksen rakit, sebagai pembeda dan penanda, untuk mennjukan ciri khas bangka belitung bahwa bank belitung memiliki rumah adat yang berbeda dan unik.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jambi
            // =========================================================================================

            // Panggung Kajang Leko
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Panggung Kajang Leko', 'Jambi', '../../img/rumah-adat/jambi/panggung-kajang-leko.jpg',`
            <p>
                Rumah adat panggung kajang leko, adalah rumah  yang berasal dari provonsi Jambi. Rumah ini merupakan rumah adat yang cukup lengkap, karena didalam rumah in, memiliki 8 ruangan di dalamnya.
            </p>
            <p>
                Ruangan pertama sering disebut dengan jogan, biasanya digunakan sebagai tempat istirahat. Dan sebagai tempat penyediaan air, ada lagi ruangan kedua yaitu ruang serambi depan, digunakan sebagai tempat penerimaan tamu khusus tamu laki-laki saja.
            </p>
            <p>
                Dan ruangan ketiga, disebut dengan ruang serambi dalam yang diksus sebagai tempat tidur anak laki-laki saja. Selanjutnya ruangan keempat disebut emben melintang.
            </p>
            <p>
                Ruangan ketujuh disebut dengan garang, sebagai tempan memasak dan juga biasa digunakan sebagai tempat penyimpanan air. Ruang kedelapan adalah ruangan dapur yang biasanya digunaka sebagai memasak makanan dirumah.
            </p>`]);
            // =========================================================================================
            // PROVINSI Bengkulu
            // =========================================================================================

            // Rakyat
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Rakyat', 'Bengkulu', '../../img/rumah-adat/bengkulu/rakyat.jpg',`
            <p>
                Rumah adat di Indonesia yang berada di Bengkulu yaitu rumah rakyat, Rumah adat yang ini juga rumah adat yang cukup kompleks. Namun tidak sekompleks rumah adat jambi.
            </p>
            <p>
                Ada dimana beberapa ruangan yang bersifat khusus di dalam rumah adat rakyat, diantaranya adalah ruang berendo. Atau jik dibahasa indonesia ialah beranda, tempat untuk menerima tamu.
            </p>
            <p>
                Dan ada juga ruang blik gadang yang digunakan sebagai kamar utama, dan juga ruang blik gadis. Yang biasa digunakan sebagai kamar anak perempuan. ruang laki, sebagai ruang kamar anak laki-laki.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Selatan
            // =========================================================================================

            // Limas
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Limas', 'Sumatera Selatan', '../../img/rumah-adat/sumatera-selatan/limas.jpg',`
            <p>
                Rumah limas adalah rumah adat Indonesia yang juga tergolong cukup menarik, dimana bentuk atap rumah yang mempunyai atap bentuk limas. Dengan gaya arsitektur lantai depan, bertingkat berbentuk panggung.
            </p>
            <p>
                Kayu yang digunakan sebagai rang dan tiang berasal dari kayu ulin, sehingga kuat, sedangkan sebagaian aksen yang lainya. Menggunakan kayu tembesu.
            </p>
            <p>
                Kedua bahan kayu ulin dan tembesu di kenal sebagai kualitas kayu yang sangat bagus, sehingga rumah adat limas, mapu bertahan sampai beberapa puluh tahun.
            </p>`]);
            // =========================================================================================
            // PROVINSI Lampung
            // =========================================================================================

            // Nowou Sesat
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Nowou Sesat', 'Lampung', '../../img/rumah-adat/lampung/nowou-sesat.jpg',`
            <p>
                Rumah adat sowou sesat yang mempunyai arti rumah ibadah, menurut cerita dari warga setempat. Rumah ini didirikan atas keinginan dalam beribadah.
            </p>
            <p>
                Memiliki keinginan dalam membangun keluarga dan mendidik anak, atas pondasi ibadah, sehingga rumah nowou sesat. jika di telusuri memiliki makna yang sangat baik dan dalam.
            </p>
            <p>
                Sangat disayangkan sekali rumah adat yang berbentuk panggung dan atap berasal dari ilalang ini. Sudah sulit sekali ditemui, Padahal rumah adat lampung ini, tergolong yang bersitektur kayu minimalis.
            </p>
            <p>
                Sehingga dalam pembuatan rumah ini, tergolong tidak terlalu memakan biaya yang banyak. Dan proses pembuatan rumah adat ini tidak terlalu sulit.
            </p>`]);
            // =========================================================================================
            // PROVINSI Banten
            // =========================================================================================

            // Badui
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Badui', 'Banten', '../../img/rumah-adat/banten/badui.jpg',`
            <p>
                Rumah adat badui, merupakan rumah yang di buat oleh suku badui yang sedang berdiam diri di  banten. Ciri khas rumah adat badui ialah sedikit lebih tinggi seperti rumah panggung akan tetapi tingginya tidak ada setengah meter.
            </p>
            <p>
                Serta karakteristik atap rumah badui terbuat dari ilalang, struktur pembuatan rumah adat badui terbuat dari. Kayu, bambu pada bagian dinding. dan tiangnya terbuat dari batu.
            </p>
            <p>
                Rumah adat ini, masih dengan mudah dapat kita jumpai, di beberapa daerah perosok ujung kulon dan beberapa di pedesaan di daerah banten.
            </p>`]);
            // =========================================================================================
            // PROVINSI Madura
            // =========================================================================================

            // Tanean Lanjhan
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Tanean Lanjhan', 'Madura', '../../img/rumah-adat/madura/tanean-lanjhan.jpg',`
            <p>
                Rumah tanean lanjhan merupakan rumah adat yang berasal dari Madura dan Jawa Timur, Namun jika dinilai dari segi kebudayaan dan juga adat. Memiliki sedikit perbedaan yang mencolok.
            </p>
            <p>
                Contoh seperti kedua daerah tersebut memiliki rumah yang berbeda, jika di Jawa timur. Kita sering menyebutnya dengan rumah adat joglo situbondo, di Madura justru yang ditemukan rumah tanean lanjhang.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Timur
            // =========================================================================================

            // Joglo Situbondo
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Joglo Situbondo', 'Jawa Timur', '../../img/rumah-adat/jawa-timur/joglo-situbondo.jpg',`
            <p>
                Rumah adat joglo jawa timur, merupakan rumah dengan bentuk yang hampir sama dengan rumah adat jawa tengah. Dapat di lihat dari segi tampilan dan bentuk arsitektur hampir sama.
            </p>
            <p>
                Terlihat dari penambahan beberapa ruangan yang berada didalam, memiliki kandungan dan filosofi yang sama. Sehingga rumah adat joglo, semacam rumah yang dibangun atas dasar yang sama, dari nilai leluhur dan kebudayaan yang kental.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Tengah
            // =========================================================================================

            // Joglo
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Joglo', 'Jawa Tengah', '../../img/rumah-adat/jawa-tengah/joglo.jpg',`
            <p>
                Rumah joglo berasal dari jawa tengah, yang merupakan rumah adat dari suku jawa dari bagaian tengah dari pulau jawa. Rumah adat ini, memiliki beberapa bgaian ruangan di dalamnya.
            </p>
            <p>
                Dan ruangan-ruangan tersebut memiliki fungsi tersendiri, ada ruangan pendopo yang digunakan sebagai ruang tamu. baisa berada depan rumah sebagai ruang terbuka.
            </p>
            <p>
                Ada lagi ruang pringgitan atau bisa disebut dengan ruang samping, sebagai jalan akses keluar masuk kedalam rumah. Dan ada lagi yaitu ruang dalem, yang merupakan ruang utama yang berada didalam rumah.
            </p>
            <p>
                Ruang sentong yang digunakan sebagai ruang penyimpanan, Ruwang gandok tengen serta ruang dendok kiwo, sebagai runag tidur keluarga di dalam rumah.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Barat
            // =========================================================================================

            // Sunda
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Sunda', 'Jawa Barat', '../../img/rumah-adat/jawa-barat/sunda.jpg',`
            <p>
                Rumah sunda ialah rumah adat di indonesia ang mempunyai bentuk rumah panggung yang tidak terlalu tinggi. pada bagian depan rumah dat sunda, terdapat tangga atau bisa disebut dengan golodog.
            </p>
            <p>
                Yang berfungsi sebagai sarana keluar masuk ke rumah, sedangkan pada bagian atapnya memiliki banyak jenis. Beberapa atap yang sering digunakan adalah atap jolopong. badak heuay, perahu kemurep, buka pongpok, tegong anjing, jubleg, nangkup, dan juga apit gunting, semua jenis atap diatas memiliki ciri khas yang berbeda.
            </p>`]);
            // =========================================================================================
            // PROVINSI DKI Jakarta
            // =========================================================================================

            // Kebaya
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Kebaya', 'DKI Jakarta', '../../img/rumah-adat/jakarta/kebaya.jpg',`
            <p>
                Rubah kebaya merupakan rumah adat yang memiliki kek kentalan dengan budaya betawi. Sehingga bentuk desain rumah adat kebaya, cukup khas dan mudah untuk dikenali.
            </p>
            <p>
                Terlebih masih bisa kita temui rumah kebaya di jakarata, akan tetapi, rumah betawi untuk saat ini sudah sulit sekali untuk ditemui. Karena sudah tenggelam diantara gedung-gedung besar di Jakarta yang telah menutupi rumah adat kebaya.
            </p>
            <p>
                Jadi, jika ingin menemukan rumah kebaya, harus berkunjung kedaerah perkampungan betawi. itu juga jumlahnya sudah mulai sedikit, karena sudah berpindah ke bangunan rumah modern.
            </p>`]);
            // =========================================================================================
            // PROVINSI DI Yogyakarta
            // =========================================================================================

            // Bangsal Kencono
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Bangsal Kencono', 'DI Yogyakarta', '../../img/rumah-adat/di-yogyakarta/bangsal-kencono.jpg',`
            <p>
                Bangsal koncono adalah rumah adat Indonesia dari Provinsi Jogjakarta, Pada jaman dahulu. Rumah ini hanya ditempat tinggali oleh raja Jawa, dan juga bangsawan kerajaan saja.
            </p>
            <p>
                Biasanya lokasi tempat berada sebelah tengah, dari karaton kasultan, rumah adat yang satu ini. Memiliki begitu banyak filosofi, dalam nilai-nilai kehidupan.
            </p>
            <p>
                Karena setiap ruang dan bangunan adat ini, memiliki perlambangan filosofi tersendiri, mulai diambil dari pola laku manusia. Alam semesta, serta di ambil dari kehidupan didalamnya.
            </p>`]);
            // =========================================================================================
            // PROVINSI Riau
            // =========================================================================================

            // Selaso Jatuh Kembar
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Selaso Jatuh Kembar', 'Riau', '../../img/rumah-adat/riau/selaso-jatuh-kembar.jpg',`
            <p>
                Selaso jatuh kembar adalah rumah adat di Indonesia, yang berasal dari Provinsi Riau, berdasarkan sejarah. Rumah adat selaso jatuh kembar, memiliki rumah yang mempunyai dua selasar.
            </p>
            <p>
                Selasar memiliki arti posisi lantai yang lebih rendah dari pada ruangan tengah, biasanya digunakan sebagai tempat berkumpul. Dan juga sebagai tempat musyawarah dalam satu keluarga atau balai keluarga.
            </p>
            <p>
                Dan pada sekarang ini sudah mulai jarang ada, rumah selasor hanya dapat kita jumpai satu atau beberapa saja di setiap desa.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kepulauan Riau
            // =========================================================================================

            // Belah Bubung
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Belah Bubung', 'Kepulauan Riau', '../../img/rumah-adat/kepulauan-riau/belah-bubung.jpg',`
            <p>
                Belah bubung adalah rumah tradisional yang berasal dari provinsi Kepulauan Riau. Rumah ini memiliki ciri khas yang berbeda yaitu dengan bentuk atap yang berfariasi.
            </p>
            <p>
                Atap lipat yang berbentuk curam kebawah, dan atap lipat yang berbentuk datar, serta atap layar yang berbentuk menyusun dan atap panjang berbentuk sejajar sama, serta atap yang bergabung melintang.
            </p>
            <p>
                Pada umumnya rumah adat belah bubung, terbagi menjadi empat bagian ruangan dalam. Yaitu ruang selasar, ruang induk, ruang penghubung antara dapur dan dapur.
            </p>`]);
            // =========================================================================================
            // PROVINSI Bali
            // =========================================================================================

            // Gampura Candi Bentar
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gampura Candi Bentar', 'Bali', '../../img/rumah-adat/bali/gampura-candi-bentar.jpg',`
            <p>
                Gapura candi, merupakan rumah adat yang berasal dari Bali, Pura ini masih menganggkat dan mejunjung tinggi. Budaya dan adat istiadat.
            </p>
            <p>
                Daerah yang memiliki kekentalan budaya dan adat istiadat sudah menyatu dalam ke agama mayoritas didaerah sana. yaitu kebanyakan mayoritas beragama hindu.
            </p>
            <p>
                Sehingga bentuk rumah gapura candi bentar ini hampir menyerupai dengan lengkap dengan gapura masuknya. Berbeda dengan kebanyakan rumah adat yang lainya.
            </p>
            <p>
                Rumah adat Provinsi bali ini, masih sangat mudah untuk kita jumpai di bali, karena disana masih memaegang teguh budaya dan adatnya. salah satu rumah adat di indonesia yang masih banyak didirikan dan masih bisa kita jumpai disini tentunya.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Barat
            // =========================================================================================

            // Panjang
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Panjang', 'Kalimantan Barat', '../../img/rumah-adat/kalimantan-barat/panjang.jpg',`
            <p>
                Panjang merupakan rumah adat yang berasal dari Kalimantan Barat, tepatnya pada suku dayak Borneo Barat. Rumah ini hampir sama dengan rumah panggung yang memanjang.
            </p>
            <p>
                Dengan tiang penyangga tinggi dan anak tangga lebar, akan tetapi rumah adat ini sudah sangat sulit. Untuk dijumpai diwilayah asalnya, mungkin bisa dikatakan sudah punah dimakan usia.
            </p>
            <p>
                Kini hanya bisa kita temui dengan arsitektur dan bentuk yang langka, hanya ada di taman mini indonesia indah saja, kita dapat menemukan rumah adat panjang.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Tengah
            // =========================================================================================

            // Betang
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Betang', 'Kalimantan Tengah', '../../img/rumah-adat/kalimantan-tengah/betang.jpg',`
            <p>
                Betang merupakan rumah adat yang berasal dari provinsi Kalimantan Tengah. Rumah batang sebenarnya juga hampir mirip arsitekturnya dengan rumah panjang di Kalimantan Barat,
            </p>
            <p>
                Hanya saja yang membedakan bentuk dan ukuran lebih besar dan dibangun pada ukuran tanah yang lebih luas. Dari pada rumah adat panjang, pada umunnya rumah adat betang dibangun dibngun diatas tanah eluas 150 meter x lebar 30 meter tinggi 3-5 meter.
            </p>
            <p>
                Sehingga jika di hitung, satu rumah betang mampu menampung 150 jiwa, Bila diukur sebagai ukuran rumah adat di indonesia. Maka rumah betang merupakan, rumah adat di indonesia terbesar kedua.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Timur
            // =========================================================================================

            // Lamin
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Lamin', 'Kalimantan Timur', '../../img/rumah-adat/kalimantan-timur/lamin.jpg',`
            <p>
                Lamin merupakan, rumah adat yang berasa dari suku daya timur, Kutai, dan banjar. Rumah lamin berntuk layaknya seperti rumah dayak panjang, dan rumah bentang.
            </p>
            <p>
                Namun jika diukur besar rumah adat lamin, memiliki dua kali ukuran lebih besar dari pada rumah betang. Dengan ukuran panjang 300 meter, x lebar 15 meter, dan x  tinggi 3-5 meter.
            </p>
            <p>
                Itu artinya rumah lamin merupakan, rumah adat di ndonesia, terbesar nomor satu jika dibandungkan dengan rumah adat yang lain. Dan dapat menampung sekitar 250 orang, atau setara sengan 40-45 kepala keluarga.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Selatan
            // =========================================================================================

            // Bubungan Tinggi
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Bubungan Tinggi', 'Kalimantan Selatan', '../../img/rumah-adat/kalimantan-selatan/bubungan-tinggi.jpg',`
            <p>
                Bubungan merupakan rumah adat tradisional dari suku dayak selatan, diamana gaya arsitektur. Rumah dayak yang satu ini sedikit berbeda dari rumah daya lainya.
            </p>
            <p>
                Meski demikian, nilai sejarah dan juga kebanggan tidak kalah dengan rumah yang lainya. Bisa dibilang bahwa rumah adat bubungan tinggi, lebih menonjolkan pada struktur bangunan yang tinggi dan kokoh.
            </p>
            <p>
                Akan hal ini rumah adat di Indonesia yang satu ini, lebih mengutamakan konsep bangunan. Dari pada mengutamakan daya tampung bangunan
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Utara
            // =========================================================================================

            // Baloy
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Baloy', 'Kalimantan Utara', '../../img/rumah-adat/kalimantan-utara/baloy.jpg',`
            <p>
                Baloy merupakan rumah adat yang berasal daru kalimantan utara, meski provinsi kalimantan utara merupakan provinsi baru. Namun rumah adatnya dan juga kebudayaan sudah ada sejak jaman dulu.
            </p>
            <p>
                Rumah adat baloy terinspirasi dari rumah suk tidung, yang berada di wilayah Kalimantan Utara. Dan juga rumah adat Kalimantan Utara, biasa digunakan sebagai maskot daerah, dan juga sebagai daya tarik untuk wisatawan.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Utara
            // =========================================================================================

            // Pewaris
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pewaris', 'Sulawesi Utara', '../../img/rumah-adat/sulawesi-utara/pewaris.jpg',`
            <p>
                Pewaris merupakan rumah adat yang berasal dari minahasa, yang merupakan suku asli dari Provonsi Sulawesi Utara. Rumah leluhur atau rumah welawangkoa, yang menyerupai rumah panggung.
            </p>
            <p>
                Dengan tiang balok kayu dan dua buah tangga kanan kiri dibagian depan, Hampir dari mayoritas rumah adat di Indonesia. Terbuat dari bahan kayu asli semua, selain itu, keunikan pada rumah adat yang satu ini terdapat pada pembagia ruangannya.
            </p>
            <p>
                Ada ruangan yang bernama setup emperan, yang digunakan sebagai temoat penerima tamu dan juga berfingsi sebagai ruangan tempat untuk tidur. Serta ruangan sangkor sebagai tempat penyimpanan makanan dan lumbung padi.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Tengah
            // =========================================================================================

            // Tambi
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Tambi', 'Sulawesi Tengah', '../../img/rumah-adat/sulawesi-tengah/tambi.jpg',`
            <p>
                Rumah adat tambi adalah rumah adat tradisional yang berasal dari Sulawesi Tengah, rumah ini memilki bentuk persegi panjang. dengan bentuk menyerupai rumah panggung.
            </p>
            <p>
                Bahan yang digunakan sebagai pembuatan rumah ini kebanyakan terbuat dari bahan kayu asli dan juga batu alam. Dalam rumah adat tambi juga dikenal alam pembagian ruang, diaman ruangan lumayan lengkap.
            </p>
            <p>
                Seperti, ruaang-ruang utama, ruang dapur, ruang tamu, semuanya berkumpul menjadi satu, dengan pembatas yaitu sekat. Ada kepercayaan tersendiriyang mengatakan bahwa rumah adat tambi, hanya boleh dibangun menghadap ke utara atau ke arah selatan saja.
            </p>
            <p>
                Untuk membedakan derajat status sosial, biasanya dibuat embeda berdasarkan jumlah anak tangga. Rumah orang kaya atau besar, ditandai dengan anak tangga berjumlah genap, sedangkan rumah orang biasa, denga anak tangga ganjil.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Tenggara
            // =========================================================================================

            // Buton
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Buton', 'Sulawesi Tenggara', '../../img/rumah-adat/sulawesi-tenggara/buton.jpg',`
            <p>
                Rumah adat buton adalah rumah adat di indonesia yang berasal dari provinsi Sulawesi Sumatra Tenggara. Dari berbagai bentuk seni konstruksi bangunannya cukup unik.
            </p>
            <p>
                Karena rumah adat ini di buat dengan empat lantai, dan hanya menggunakan kait kayu, tanpa mengguanakan pasak dan paku. Semua itu menunjukan bahwasanya masyarakat sulawesi tenggara, mempunyai keterampilan bangunan yang luar biasa.
            </p>
            <p>
                Keterampilan yang dimiliki merupakan warisan turun temurun, dari generasi awal sampai generasi saat ini. Kebanyakan masyarakat yang mahir dalam hal ini, hanya dari kalangan orang tua, yang mahir dalam pengerjaanya.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Selatan
            // =========================================================================================

            // Tongkonan
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Tongkonan', 'Sulawesi Selatan', '../../img/rumah-adat/sulawesi-selatan/tongkonan.jpg',`
            <p>
                Rumah adat tonngkongan merupakan rumah adat yang berasal dari suku toraja, rumah adt ini memiliki ciri khas yang sangat mencolok terutama pada bagian atapnya.
            </p>
            <p>
                Atap tumah adat tangkongan berbentuk seperti perahu terbalik, selain itu dibagian tersbut juga terdapat tanduk kerbau. Yang berada di bagian depan rumah, dan yang paling uniknya lagi rumah adat ini, mempunyai dua fungsi.
            </p>
            <p>
                Yaitu sebagai tempat tinggal, dan juga sabagai tempat penyimpanan mayat yang sudah meninggal. Tetapi semua terpisah tidak dijadikan satu.
            </p>`]);
            // =========================================================================================
            // PROVINSI Gorontalo
            // =========================================================================================

            // Dulohupa
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Dulohupa', 'Gorontalo', '../../img/rumah-adat/gorontalo/dulohupa.jpg',`
            <p>
                Rumah adat doluhupo adalah rumah yang berasal dari gorontalo, rumah adat di indonesia ini, memiliki gaya atap yang berseni, dengan struktur bangunan menyerupai rumah khas panggung.
            </p>
            <p>
                Sebagaian besar bahan pembangunan dari rumah adat yang satu ini, kebanyakan berasal dari bahan kayu asli, sama dengan kebanyakan rumah adat di indonesia yang lainya.
            </p>`]);
            // =========================================================================================
            // PROVINSI Maluku
            // =========================================================================================

            // Baileo
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Baileo', 'Maluku', '../../img/rumah-adat/maluku/baileo.jpg',`
            <p>
                Rumah baileo merumakan rumah adat dari Provinsi Maluku, Rumah adat yang satu ini. Lebih menampilkan kemajemukan agama di maluku, dimana terdapat aksen dari beberapa agama serta melambangkan kebudayaan setempat.
            </p>
            <p>
                Ciri khas yang terlihat adalah pada ukuran yang lebih besar jika dibandingkan dengan rumah modern. Oleh karena itu rumah adat ini tidak hanya digunakan sebagai tempat tinggal saja.
            </p>
            <p>
                Karena biasanya rumah adat ini, biasanya digunakan sebagai upacara adat, dan juga biasa digunakan sebagai media musayawarah. Atau sebagai tempat hiburan lain yang dilaksanakan diasana.
            </p>
            <p>
                Dan hal yang unik, yang terdapat pada rumah adat yang satu ini adalah dimana setiap ruangan khusus. pasti terdapat rungangan khusus yang digunakan sebagai media penyimpanan benda-benda pusaka suku asli.
            </p>`]);
            // =========================================================================================
            // PROVINSI Maluku Utara
            // =========================================================================================

            // Sasadu
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Sasadu', 'Maluku Utara', '../../img/rumah-adat/maluku-utara/sasadu.jpg',`
            <p>
                Rumah adat sasadu adalah rumah adat yang berasal dari Maluku Utara, ruamah adat ini berbentuk seperti rumah panggung. Dengan dekorasi bangunan yang sangat unik.
            </p>
            <p>
                Keunikan pada bangunan rumah yang satu ini, bisa kita perhatikan dari jumlah pintu yang ada pada rumah adat ini. Ada 6 pintu pada rumah adat ini,dan setiap masing-masung pintu memiliki fungsi masing-masing.
            </p>
            <p>
                Ada dua pintu unruk keluar masuk, khusus yang hanya boleh digunakan oleh laki-laki. Dan dua pintu yang berbeda khusus hanya boleh digunakan oleh perempuan saja.
            </p>
            <p>
                Dan dua pintu lagi, khusus hanya boleh digunakan untuk keluar masuk tamu, yang sedang bertamu. Jadi jika diperhatikan rumah adat adat sedadu merupakan, rumah adat di indonesia yang memiliki pintu terbanyak.
            </p>`]);
            // =========================================================================================
            // PROVINSI Nusa Tenggara Barat
            // =========================================================================================

            // Dalam Loka
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Dalam Loka', 'Nusa Tenggara Barat', '../../img/rumah-adat/nusa-tenggara-barat/dalam-loka.jpg',`
            <p>
                Rumah dalam loka merupakan rumah adat yang berasal dari suku-suku asli yang mendiami Nusa Tenggara Barat Suku tersebut diantara lain ialah suku sumbawa, suku sasak, suku dompu dan suku dongu.
            </p>
            <p>
                Rumah adat dalam loka mempunya cerita sejarah yang cukup unik, pada jaman dahulu rumah adat ini. Tidak boleh diperuntukan sebagai tempat tinggal, tetapi hanya boleh dipakai oleh raja dan juga kepala adat.
            </p>
            <p>
                Sering dengan berkebangan dan kemajuan zaman, rumah ini sudah di perbolehan sebagai tempat tinggal warga setempat. rumah adat ini masih sangat mudah untuk kita jumpai, terutama di daerah pendesaan dan daerah suku setempat.
            </p>`]);
            // =========================================================================================
            // PROVINSI Nusa Tenggara Timur
            // =========================================================================================

            // Musalaki
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Musalaki', 'Nusa Tenggara Timur', '../../img/rumah-adat/nusa-tenggara-timur/musalaki.jpg',`
            <p>
                Rumah adat mulasaki adalah rumah adat yang berasal dari Nusa Tenggara Timur, jadi hampir sama rumah adat Nusa Tenggara Barat. akan tetapi ada banyak perbedaan dari bentuk arsitektur, dan juga filosofi.
            </p>
            <p>
                Akan tetapi jika diikuti caritanya juga sama yaitu hanya ditempati oleh para raja dan juga bangsawan saja. dan para ketua suku terbesar yang di perbolehkan tinggal di rumah ini.
            </p>
            <p>
                Dan pada saat ini sudah menjadi umu rumah ini sudah ditempati oleh masyarakat sekitar, yaitu warga Nusa Tenggara Timur. Jadi rumah adat Nusa Tenggara Timur dan Rumah Adat Nusa Tenggara barat, merupakan rumah adat di indonesia yang memiliki sejarah yang sama.
            </p>`]);
            // =========================================================================================
            // PROVINSI Papua
            // =========================================================================================

            // Honai
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Honai', 'Papua', '../../img/rumah-adat/papua/honai.jpg',`
            <p>
                Rumah honai merupakan rumah adat yang berasal dari Provinsi Papua, rumah honoi provinsi papua. dibangun hanya dengan kayu dan lalang, diaman dindingnya terbuat dari kayu, dan atapnya dari ilalang.
            </p>
            <p>
                Rumah adat honai, merupakan rumah adat indonesia yang sempit, terbuat dengan tanpa adanya cendela dan celah cahaya. Semua tertutup rapat tanpa celah cahaya.
            </p>
            <p>
                Rumah ini dibuat dengan rapat, supaya kondisi didalam rumah agar tetap hangat. Meski kondisi diluar rumah dalam keadaan dingin, karen mayoritas penduduk papua bertempat tinggal di daerah perbukitan dan dataran tinggi.
            </p>`]);
            // =========================================================================================
            // PROVINSI Papua Barat
            // =========================================================================================

            // Mod Aki Aksa
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Mod Aki Aksa', 'Papua Barat', '../../img/rumah-adat/papua-barat/mod-aki-aksa.jpg',`
            <p>
                Rumah mod aki bisa dibilang dengan rumah kaki seribu yang berasal dari Papua Barat. Bentuknya hampir miripdengan rumah adat honai, akan tetapi rumah adat ini berbentuk rumah adat panggung.
            </p>
            <p>
                Dimana rumah adat mod aki, memiliki ciri khas, mempunyai banayak penyangga dibagaian bawah lantai rumah. Sehingga rumah adat mod aki aksa, sering disebut sebagai rumah kaki seribu.
            </p>
            <p>
                Pembuatan rumah adat di indonesia yang satu ini, terbuat dari bahan alam seperti, kayu, pelepah sagu, ilalang dan tali dari kulit pohon.
            </p>`]);
            // =========================================================================================
            // PROVINSI Teluk Cendrawasih
            // =========================================================================================

            // Lgkojei
            tx.executeSql('INSERT INTO rumah_adat (rumah_adat, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Lgkojei', 'Teluk Cendrawasih', '../../img/rumah-adat/teluk-cendrawasih/lgkojei.jpg',`
            <p>
                Rumah Lgkojei adalah rumah yang berasal daari suku wamesa yang berada di Provinsi Teluk Cendrawasih. Rumah ini hampir menyerupai dengan rumah mod aki aksa.
            </p>
            <p>
                Persamaan pada kaki rumah yang memliki banyak penyangga, seperti rumah kaki seribu. Jadi rumah Teluk Cendrawasih juga rumah yang berbentuk rumah kaki seribu.
            </p>
            <p>
                Selain itu juga memiliki banyak fentilasi udara, dan juga memiliki lubang cahaya, atau bisa kita bilang. Rumah adat ini merupakan rumah adat perkembangan.
            </p>`]);

        }, function(error) {
            alert('Transaction ERROR: ' + error.message);
        }, function() {
            window.localStorage.setItem('dbRumahAdat', 'true');
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