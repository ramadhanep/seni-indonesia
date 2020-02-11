setTimeout(function(e){
    $('.loader-main').removeClass('loader-inactive');
}, 1)
var db = null;

var dbAlatMusik = window.localStorage.getItem('dbAlatMusik');

if(dbAlatMusik != "true"){
    document.addEventListener('deviceready', function() {
        db = window.sqlitePlugin.openDatabase({
            name: 'seni-indonesia.db',
            location: 'default',
        });

        db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS alat_musik (id integer primary key autoincrement, alat_musik text, daerah text, konten text, image text)');

            tx.executeSql('DELETE FROM alat_musik');
            tx.executeSql('DELETE FROM sqlite_sequence where name="alat_musik"');


            // =========================================================================================
            // PROVINSI Nangroe Aceh Darussalam
            // =========================================================================================

            // Serune Kale
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Serune Kale', 'Nangroe Aceh Darussalam', '../../img/alat-musik/aceh/serune-kale.jpg',`
            <p>
                Sarune Kale berasal dari Nanggroe Aceh Darussalam yang mempunyai jenis bunyi Aerofon, yaitu bunyi yang berasal dari hembusan angin. Cara menggunakan serune kale adalah dengan ditiup dan menggunakan jari untuk mengatur nada yang ada di lubang serune kale.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Utara
            // =========================================================================================

            // Aramba
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Aramba', 'Sumatera Utara', '../../img/alat-musik/sumatera-utara/aramba.jpg',`
            <p>
                Aramba berasal dari Pulau Nias, Sumatera Utara yang mempunyai jenis bunyi Ideofon, yaitu bunyi yang berasal dari bahan dasarnya. Cara menggunakan Aramba adalah dengan dipukul dengan menggunakan pemukul seperti stik. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Barat
            // =========================================================================================

            // Saluang
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Saluang', 'Sumatera Barat', '../../img/alat-musik/sumatera-barat/saluang.jpg',`
            <p>
                Saluang berasal dari  Minangkabau, Sumatera Barat yang mempunyai jenis bunyi Aerofon, yaitu bunyi yang berasal dari hembusan angin. Cara menggunakan saluang dengan ditiup dan lubang yang ada di salung digunakan untuk mengatur nada dan jari-jari tangan berfungsi untuk menutup lubangnya. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Riau
            // =========================================================================================

            // Gambus
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gambus', 'Riau', '../../img/alat-musik/riau/gambus.jpg',`
            <p>
                Gambus berasal dari Riau, yang membunyai jenis bunyi Kordofun, yaitu bunyi yang berasal dari dawai atau senar. Gambus mempunyai 3 senar – 12 senar. Gambus biasa dimainkan sambil diiringi gendang. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Jambi
            // =========================================================================================

            // Serangko
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Serangko', 'Jambi', '../../img/alat-musik/jambi/serangko.jpg',`
            <p>
                Serangko berasal dari Jambi yang terbuat dari tanduk kerbau. Cara menggunakan Serangko adalah dengan ditiup, serangko biasa digunakan untuk pemberitahuan jika ada musibah di masyarakat Jambi. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Selatan
            // =========================================================================================

            // Accordion
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Accordion', 'Sumatera Selatan', '../../img/alat-musik/sumatera-selatan/accordion.jpg',`
            <p>
                Accoridon berasal dari Sumatera Selatan yang mempunyai jenis bunyi Aerofon, yaitu jenis bunyi yang berasal dari hembusan nafas. Cara menggunakan accordion yaitu dengan ditiup dan memakang kedua tangan untuk mengatur alunan nada
            </p>`]);
            // =========================================================================================
            // PROVINSI Bengkulu
            // =========================================================================================

            // Doll
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Doll', 'Bengkulu', '../../img/alat-musik/bengkulu/doll.jpg',`
            <p>
                Doll berasal dari Bengkulu yang mempunyai jenis bunyi Membranofon, yaitu jenis bunyi yang asalnya dengan memukul. Cara menggunakan doll yakni dengan dipukul memakai alat pemukul.
            </p>`]);
            // =========================================================================================
            // PROVINSI Lampung
            // =========================================================================================

            // Bende
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Bende', 'Lampung', '../../img/alat-musik/lampung/bende.jpg',`
            <p>
                Bende berasal dari Lampung yang mempunyai jenis bunyi Ideofon, yaitu jenis bunyi yang berasal dari bahan dasarnya. Cara menggunakannya yaitu dipukul dengan alat pukul yang khusus.
            </p>`]);
            // =========================================================================================
            // PROVINSI Bangka Belitung
            // =========================================================================================

            // Gendang Melayu
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gendang Melayu', 'Bangka Belitung', '../../img/alat-musik/bangka-belitung/gendang-melayu.jpg',`
            <p>
                Gendang melayu berasal dari Kepulauan bangka belitung yang mempunyai jenis bunyi Membranofon, yaitu jenis bunyi yang asalnya dengan memukul di sekitar area lunak dengan menggunakan telapak tangan. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Kepulauan Riau
            // =========================================================================================

            // Gendang Panjang
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gendang Panjang', 'Kepulauan Riau', '../../img/alat-musik/kepulauan-riau/gendang-panjang.jpg',`
            <p>
                Gendang panjang berasal dari Kepulauan Riau yang mempunyai jenis bunyi Membranofon yang digunakan dengan cara menepukkan tangan pada area yang lunak. 
            </p>`]);
            // =========================================================================================
            // PROVINSI DKI Jakarta
            // =========================================================================================

            // Tehyan
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Tehyan', 'DKI Jakarta', '../../img/alat-musik/dki-jakarta/tehyan.jpg',`
            <p>
                Tehyan berasal dari Ibukota Jakarta yang mempunyai jenis suara Kordofon yang digunakan dengan cara digesek di bagian dawai atau senarnya, hampir sama dengan memainkan biola.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Barat
            // =========================================================================================

            // Angklung
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Angklung', 'Jawa Barat', '../../img/alat-musik/jawa-barat/angklung.jpg',`
            <p>
                Angklung berasal dari Jawa barat yang mempunyai jenis bunyi Ideofon. Cara memainkan angkul yaitu menggunakan tangan kita.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Tengah
            // =========================================================================================

            // Gamelan
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gamelan', 'Jawa Tengah', '../../img/alat-musik/jawa-tengah/gamelan.jpg',`
            <p>
                Gamelan berasal dari Jawa Tengah yang mempunyai jenis bunyi Ideofon. Cara memainkannya yaitu dengan dipukul – pukul dengan alat pemukul.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Timur
            // =========================================================================================

            // Bonang
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Bonang', 'Jawa Timur', '../../img/alat-musik/jawa-timur/bonang.jpg',`
            <p>
                Bonang berasal dari Jawa Timur yang mempunyai jenis bunyi Ideofon. Cara memainkannya dengan dipukul.
            </p>`]);
            // =========================================================================================
            // PROVINSI Yogyakarta
            // =========================================================================================

            // Gendang
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gendang', 'Yogyakarta', '../../img/alat-musik/yogyakarta/gendang.jpg',`
            <p>
                Gendang berasal dari Yogyakarta yang mempunyai jenis bunyi Ideofon. Cara memainkannya dengan ditepuk di area lunak menggunakan telapak tangan. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Banten
            // =========================================================================================

            // Gendang
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gendang', 'Banten', '../../img/alat-musik/banten/gendang.jpg',`
            <p>
                Gendang berasal dari Banten yang mempunyai jenis bunyi Membranofon. Cara memainkannya dengan menepuk memakai telapak tangan.
            </p>`]);
            // =========================================================================================
            // PROVINSI Bali
            // =========================================================================================

            // Gengceng
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gengceng', 'Bali', '../../img/alat-musik/bali/gengceng.jpg',`
            <p>
                Gengceng berasal dari Bali yang mempunyai jenis bunyi Ideofon. Cara memainkannya dengan diletakkan pada kedua telapak tangan kemudian ditepuk. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Nusa Tenggara Barat
            // =========================================================================================

            // Serunai
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Serunai', 'Nusa Tenggara Barat', '../../img/alat-musik/nusa-tenggara-barat/serunai.jpg',`
            <p>
                Serunai berasal dari Nusa Tenggara Barat yang mempunyai jenis bunyi Aerofon. Cara memainkannya dengan ditiup lalu nadanya diataur dengan jari tangan.
            </p>`]);
            // =========================================================================================
            // PROVINSI Nusa Tenggara Timur
            // =========================================================================================

            // Sasando
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Sasando', 'Nusa Tenggara Timur', '../../img/alat-musik/nusa-tenggara-timur/sasando.jpg',`
            <p>
                Sasando berasal dari Nusa Tenggara Timur yang mempunyai jenis bunyi Chordofon. Cara memainkannya dengan dipetik. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Tengah
            // =========================================================================================

            // Japen
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Japen', 'Kalimantan Tengah', '../../img/alat-musik/kalimantan-tengah/japen.jpg',`
            <p>
                Japen berasal dari Kalimantan Tengah yang mempunyai jenis bunyi Kordofon. Cara memainkannya dengan dipetik.
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Timur
            // =========================================================================================

            // Sampe
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Sampe', 'Kalimantan Timur', '../../img/alat-musik/kalimantan-timur/sampe.jpg',`
            <p>
                Sampe berasal dari Kalimantan Timur yang mempunyai jenis bunyi Kordofon. Cara memainkannya dengan dipetik dibagian senarnya. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Barat
            // =========================================================================================

            // Tuma
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Tuma', 'Kalimantan Barat', '../../img/alat-musik/kalimantan-barat/tuma.jpg',`
            <p>
                Tuma berasal dari Kalimantan Barat yang mempunyai jenis bunyi Membranofon. Cara memainkannya dengan ditepuk menggunakan telapak tangan.  
            </p>`]);
            // =========================================================================================
            // PROVINSI Kalimantan Selatan
            // =========================================================================================

            // Panting
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Panting', 'Kalimantan Selatan', '../../img/alat-musik/kalimantan-selatan/panting.jpg',`
            <p>
                Panting berasal dari Kalimantan Selatan yang mempunyai jenis bunyi Kordofon. Cara memainkannya dengan dipetik dibagian senarnya.   
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Utara
            // =========================================================================================

            // Kolintang
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Kolintang', 'Sulawesi Utara', '../../img/alat-musik/sulawesi-utara/kolintang.jpg',`
            <p>
                Kolintang berasal dari Sulawesi Utara yang mempunyai jenis bunyi Ideofon. Cara memainkannya dengan dipukul.  
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Tengah
            // =========================================================================================

            // Ganda
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Ganda', 'Sulawesi Tengah', '../../img/alat-musik/sulawesi-tengah/ganda.jpg',`
            <p>
                Ganda berasal dari Sulawesi Tengah yang mempunyai jenis bunyi Membranofon. Cara memainkannya dengan menepuk menggunakan telapak tangan. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Selatan
            // =========================================================================================

            // Keso
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Keso', 'Sulawesi Selatan', '../../img/alat-musik/sulawesi-selatan/keso.jpg',`
            <p>
                Keso berasal dari Sulawesi Selatan yang mempunyai jenis bunyi Chordofon. Cara memainkannya dengan digesek di bagian senar. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Tenggara
            // =========================================================================================

            // Ladolado
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Ladolado', 'Sulawesi Tenggara', '../../img/alat-musik/sulawesi-tenggara/ladolado.jpg',`
            <p>
                Ladolado berasal dari Sulawesi Tenggara yang mempunyai jenis bunyi Ideopon. Cara memainkannya dengan dipukul.
            </p>`]);
            // =========================================================================================
            // PROVINSI Gorontalo
            // =========================================================================================

            // Ganda
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Ganda', 'Gorontalo', '../../img/alat-musik/gorontalo/ganda.jpg',`
            <p>
                Ganda berasal dari Gorontalo yang mempunyai jenis bunyi Membranofon. Cara memainkannya dengan ditepuk memakai telapak tangan.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sulawesi Barat
            // =========================================================================================

            // Kecapi
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Kecapi', 'Sulawesi Barat', '../../img/alat-musik/sulawesi-barat/kecapi.jpg',`
            <p>
                Kecapi berasal dari Sulawesi Barat yang mempunyai jenis bunyi Kordofon. Cara memainkannya dengan dipetik di bagian senarnya. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Maluku
            // =========================================================================================

            // Nafiri
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Nafiri', 'Maluku', '../../img/alat-musik/maluku/nafiri.jpg',`
            <p>
                Nafiri berasal dari Maluku yang mempunyai jenis bunyi Membranofon. Cara memainkannya dengan ditepuk menggunakan telapak tangan.
            </p>`]);
            // =========================================================================================
            // PROVINSI Maluku Utara
            // =========================================================================================

            // Fu
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Fu', 'Maluku Utara', '../../img/alat-musik/maluku-utara/fu.jpg',`
            <p>
                FU berasal dari Maluku Utara yang mempunyai jenis bunyi Aerofon. Cara memainkannya dengan ditiup.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Barat
            // =========================================================================================

            // Kendang
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Kendang', 'Jawa Barat', '../../img/alat-musik/jawa-barat/kendang.jpg',`
            <p>
                Kendang berasal dari Jawa Barat yang mempunyai jenis bunyi Membranofon. Cara memainkannya dengan dipukul dengan alat pemukul.
            </p>`]);
            // =========================================================================================
            // PROVINSI Papua
            // =========================================================================================

            // Tifa
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Tifa', 'Papua', '../../img/alat-musik/papua/tifa.jpg',`
            <p>
                Tifa berasal dari Papua yang mempunyai jenis bunyi Membranofon. Cara memainkannya dengan dipukul lewat telapak tangan.
            </p>`]);
            // =========================================================================================
            // PROVINSI Papua Barat
            // =========================================================================================

            // Guoto
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Guoto', 'Papua Barat', '../../img/alat-musik/papua-barat/guoto.jpg',`
            <p>
                Guoto berasal dari Papua Barat yang mempunyai jenis bunyi Kordofon. Cara memainkannya dengan memetik senar. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Barat
            // =========================================================================================

            // Kulanter
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Kulanter', 'Jawa Barat', '../../img/alat-musik/jawa-barat/kulanter.jpg',`
            <p>
                Kulanter berasal dari Jawa Barat yang mempunyai jenis bunyi Membranofon. Cara memainkannya dengan dipukul, kulanter biasanya dijadikan pengiring kendang.  
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Barat
            // =========================================================================================

            // Gong
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gong', 'Jawa Barat', '../../img/alat-musik/jawa-barat/gong.jpg',`
            <p>
                Gong berasal dari Jawa Barat yang jika dipukul akan mengeluarkan jenis bunyi Membranofon. Gong biasanya di ikat atau digantung pada kayu. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Barat
            // =========================================================================================

            // Jengglong
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Jengglong', 'Jawa Barat', '../../img/alat-musik/jawa-barat/jengglong.jpg',`
            <p>
                Jengglong berasal dari Jawa Barat yang menyerupai gong kecil. Jengglong biasanya dijadikan pengiring gong.
            </p>`]);
            // =========================================================================================
            // PROVINSI Jawa Barat
            // =========================================================================================

            // Rebab
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Rebab', 'Jawa Barat', '../../img/alat-musik/jawa-barat/rebab.jpg',`
            <p>
                Rebab berasal dari Jawa Barat yang cara memainkannya seperti biola yaitu di gesek. Bentuk rebab seperti busur panah.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Barat
            // =========================================================================================

            // Talempong
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Talempong', 'Sumatera Barat', '../../img/alat-musik/sumatera-barat/talempong.jpg',`
            <p>
                Talempong berasal dari Sumatera Barat yang cara memainkannya dengan dipukul menggunakan kayu. Bentuk talempong mirip dengan alat musik bonang dari Jawa Tengah. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Barat
            // =========================================================================================

            // Pupuik Batang Padi
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Pupuik Batang Padi', 'Sumatera Barat', '../../img/alat-musik/sumatera-barat/pupuik-batang-padi.jpg',`
            <p>
                Pupuik batang padi berasal dari Sumatera Barat, bentuknya terbuat dari ruas batamg padi yang sudang tua dan berbuku. Cara memainkanya yaitu dengan ditiup. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Barat
            // =========================================================================================

            // Serunai
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Serunai', 'Sumatera Barat', '../../img/alat-musik/sumatera-barat/serunai.jpg',`
            <p>
                Serunai berasal dari Sumatera Barat yang terbuat dari padi, kayu dan bambu. Cara memainkannya yaitu dengan ditiup. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Barat
            // =========================================================================================

            // Tambua dan Tansa
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Tambua dan Tansa', 'Sumatera Barat', '../../img/alat-musik/sumatera-barat/tambua-dan-tansa.jpg',`
            <p>
                Tambua dan tansa berasal dari Sumatera Barat yang terbuat dari kayu yang dilubangi tengahnya. Cara memainkannya yaitu dengan dipukul secara serentak.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Selatan
            // =========================================================================================

            // Burdah atau Gendang Oku
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Burdah atau Gendang Oku', 'Sumatera Selatan', '../../img/alat-musik/sumatera-selatan/burdah-atau-gendang-oku.jpg',`
            <p>
                Burdah berasal dari Sumatera Selatan yang terbuat dari bahan kulit binatang atau kayu. Burdah sejenis dengan rebana yang cara memainkannya dengan dipukul. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Selatan
            // =========================================================================================

            // Tenun
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Tenun', 'Sumatera Selatan', '../../img/alat-musik/sumatera-selatan/tenun.jpg',`
            <p>
                Tenun berasal dari Sumatera Selatan yang terbuat dari kayu yang berbentunk segitiga. Dinamakan tenun karena sering digunakan sebagai penghibur para pekerja yang sedang menenun. 
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Selatan
            // =========================================================================================

            // Kenong Basemah
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Kenong Basemah', 'Sumatera Selatan', '../../img/alat-musik/sumatera-selatan/kenong-basemah.jpg',`
            <p>
                Kenong basemah berasal dari Sumatera Selatan yang terbuat dari tembaga. Cara memainkannya yaitu dengan dipukul.
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Selatan
            // =========================================================================================

            // Tebangan
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Tebangan', 'Sumatera Selatan', '../../img/alat-musik/sumatera-selatan/tebangan.jpg',`
            <p>
                Tebangan berasal dari Sumatera Selatan yang hampir mirip dengan rebana. Cara memainkannya yaitu dengan dipukul.  
            </p>`]);
            // =========================================================================================
            // PROVINSI Sumatera Selatan
            // =========================================================================================

            // Genggong
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Genggong', 'Sumatera Selatan', '../../img/alat-musik/sumatera-selatan/genggong.jpg',`
            <p>
                Genggong berasal dari Sumatera Selatan yang sejenis dengan alat musik tiup seperti harmonika. Cara memainkannya yaitu dengan dipegang dengan tangan kiri, kemudian bagian sisinya ditempelkan ke bibir.   
            </p>`]);
            // =========================================================================================
            // PROVINSI Bangka Belitung
            // =========================================================================================

            // Caklemong
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Caklemong', 'Bangka Belitung', '../../img/alat-musik/bangka-belitung/caklemong.jpg',`
            <p>
                Caklemong berasal dari Bangka Belitung yang mempunyai bentuk melengkung ke bawah. Cara memainkannya yaitu dengan dipukul menggunakan pemukul.
            </p>`]);
            // =========================================================================================
            // PROVINSI Bangka Belitung
            // =========================================================================================

            // Gambangan
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Gambangan', 'Bangka Belitung', '../../img/alat-musik/bangka-belitung/gambangan.jpg',`
            <p>
                Gambangan berasal dari Bangka Belitung yang terdiri dari tujuh potongan kayu. Cara memainkannya yaitu dengan dipukul menggunakan kayu.
            </p>`]);
            // =========================================================================================
            // PROVINSI Lampung
            // =========================================================================================

            // Kompang
            tx.executeSql('INSERT INTO alat_musik (alat_musik, daerah, image, konten) VALUES (?, ?, ?, ?)', ['Kompang', 'Lampung', '../../img/alat-musik/lampung/kompang.jpg',`
            <p>
                Kompang berasal dari Lampung yang terbuat dari kulit kambing atau kayu. Kompang hampir mirip dengan rebana, yang cara memainkannya di pukul. 
            </p>`]);
            

        }, function(error) {
            alert('Transaction ERROR: ' + error.message);
        }, function() {
            window.localStorage.setItem('dbAlatMusik', 'true');
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