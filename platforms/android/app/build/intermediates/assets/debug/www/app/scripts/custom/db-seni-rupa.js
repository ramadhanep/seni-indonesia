setTimeout(function(e){
    $('.loader-main').removeClass('loader-inactive');
}, 1)
var db = null;

var dbSeniRupa = window.localStorage.getItem('dbSeniRupa');

if(dbSeniRupa != "true"){
    document.addEventListener('deviceready', function() {
        db = window.sqlitePlugin.openDatabase({
            name: 'seni-indonesia.db',
            location: 'default',
        });

        db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS seni_rupa (id integer primary key autoincrement, kategori text, contoh_karya text, desc_karya text, image text)');

            tx.executeSql('DELETE FROM seni_rupa');
            tx.executeSql('DELETE FROM sqlite_sequence where name="seni_rupa"');


            // =========================================================================================
            // SENI RUPA MURNI
            // =========================================================================================

            // PATUNG
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Patung', '../../img/seni-rupa-murni/patung.jpg',`
            <p>
                Patung merupakan karya seni rupa murni 3D yang dibuat secara khusus oleh pematung sebagai bentuk ekspresi jiwa. Kemudian diungkapkan melalui visualisasi untuk tujuan keindahan atau estetika. Biasanya patung dapat ditemui di dalam gedung-gedung atau ruangan, di atas meja, jalan taman, dll. Patung dapat berbentuk manusia (seperti patung-pantung pahlawan yang kerap di temui ditengah jalan), hewan, ataupun mahluk berdasarkan kisah mitologi.
            </p>`]);

            // Lukisan
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Lukisan', '../../img/seni-rupa-murni/lukisan.jpg',`
            <p>
                Lukisan biasa kita temukan di berbagai tempat seperti ruangan di kantor, pameran seni dan tidak sedikit yang memiliki lukisan di kedaiaman pribadi. Lukisan adalah sebuah karya seni rupa yang dihasilkan dari proses kreatif seorang pelukis dalam mengekspolasi ide dan gagasannya. Media yang sering digunakan berupa dua dimensi seperti kanvas, papan, kertas bahkan pasir. Pada umumnya, lukisan di buat di atas sebuah kanvas kemudian dipulaskan cat dengan kuas lukis diatasnya sehingga menghasilkan sebuah karya seni. Setiap karya seni khususnya lukisan disini memiili nilai sentimental sendiri, seperti kebanyakan lukisan karya Basuki Abdullah. Salah satu karyanya yang paling terkenal adalah lukisan ‘Kakak dan Adik’. Lukisan dengan nilai sentimental keluarga ini cocok untuk disimpan dikediaman pribadi. Biasanya Lukisan dari pelukis terkenal dihargai atau dibandrol dengan harga yang fantastis.
            </p>`]);

            // Seni Kaligrafi
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Seni Kaligrafi', '../../img/seni-rupa-murni/seni-kaligrafi.jpg',`
            <p>
                Kaligrafi merupakan seni peninggalan sejarah Islam di Indonesia. Kita bisa menemui karya seni ini di tempat ibadah, kitab suci, atau lukisan-lukisan bernuansa Islam. Sama seperti contoh seni rupa murni lainnya, kaligrafi juga hanya dapat dimanfaatkan nilai estetikanya saja.
            </p>`]);

            // Topeng
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Topeng', '../../img/seni-rupa-murni/topeng.jpg',`
            <p>
                Topeng merupakan benda yang dipakai untuk menutupi wajah asli seseorang. Biasanya Topeng terbuat dari bahan kertas, plastik, logam, kayu ataupun kain. Topeng merupakan sebuah karya seni yang memiliki nilai-nilai sentimental khusus tersendiri di berbagai sisi kehidupan, sehingga seringkali digunakan dalam berbagai kegiatan upacara atau kegiatan adat. Bentuk topeng sendiri bermacam-macam, biasanya menggambarkan karakter dengan macam-macam ekspresi seperti marah, sedih, senang, dll. Topeng disebut-sebut sebagai salah satu karya seni rupa murni yang memiliki nilai seni tinggi bukan hanya dari segi estetika tapi juga dinilai dari sisi misteri yang disimpan pada setiap raut wajah topeng.
            </p>`]);

            // Relief
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Relief', '../../img/seni-rupa-murni/relief.jpg',`
            <p>
                Relief adalah seni pahat yang digabung dengan ukiran 3 dimensi. Biasanya relief dibuat pada media batu atau kayu dan dapat dengan mudah di dapati pada bangunan bersejarah seperti candi, kuil, monumen dan bangunan bersejarah lainnya. Relief biasanya menggambarkan atau merepresentasikan kehidupan tertentu. Contohnya relief yang ada pada candi borobudur di Yogyakarta yang menggambarkan kehidupan Buddha dan ajaran-ajaran yang dibawanya. Dan relief ini terbagi dalam beberapa jenis diantaranya, Relief Tinggi, Relief Rendah, Relief dangkal, dan Relief Tenggelam. Gaya relief di setiap daerahpun berbeda-beda. Seniman relief di Yunani kuno misalkan, lebih senang atau sering membuta relief yang menggambarkan eksploitasi militer melalui perumpamaan mitologi, sedangkan seniman asal Romawi lebih suka menggunakan gaya dokumenter.
            </p>`]);
            // Seni Fotografi
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Seni Fotografi', '../../img/seni-rupa-murni/seni-fotografi.jpg',`
            <p>
                Siapa yang tidak tau tentang fotografi? Fotografi adalah sebuah ilmu atau sebuah proses untuk menghasilkan atau mendapatkan sebuah gambar dari suatu objek dengan cara mengambil/mengcapture/atau merekam pantulan cahaya yang mengenai objek tersebut pada media yang peka cahaya. Media yang peka cahaya di sini bisa berarti Kamera digital ataupun analog. Para fotografer sedemikian rupa dan cara mengatur agar dapat memfokuskan cahaya dan menghasilkan intensitas cahaya yang tepat sehingga mendapatkan tangkapan gambar yang baik. Dalam prakteknya fotografer bisa menggunakan beberapa tool lain untuk mendapatkan intensitas cahaya yang tepat yakni menggunakan lighting ataupun mengatur komibinasi ISO/ASA pada kamera yang digunakan. Hasil dari tangkapan gambar tersebut tergolong kedalam karya seni rupa murni karena biasanya foto digunakan sebagai pajangan/hiasan ataupun hal yang lebih sentimental yaitu kenang-kenangan. Pada jaman sekarang hampir semua orang menggunakan hasil fotografi sebagai dekorasi ruangan dan lain-lain.
            </p>`]);

            // Kerajinan Dari Keramik
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Kerajinan Dari Keramik', '../../img/seni-rupa-murni/kerajinan-dari-keramik.jpg',`
            <p>
                Seni rupa murni juga banyak terdapat dalam benuk kerajinan dari bahan keramik dimana bentuknya bisa bermacam-macam, ada hiasan meja sampai gantungan kunci, bahkan Gucci atau Piring pun (Yang pada umumnya merupakan seni rupa terapan) ada yang masuk ke dalam golongan seni rupa murni. Biasanya hal ini dikarenakan barang atau karya seni tersebut memiliki nilai seni yang tinggi, sehingga alih-alih difungsikan sebagaimana mestinya malah hanya digunakan sebagai pajangan. Seperti yang terlihat pada gambar di samping yang merupakan sebuah karya seni rupa murni berupa piring hias yang dibuat oleh pengrajin asal Jerman. Aselinya piring tersebut di desain sebagai piring buah, namun banyak penggunanya hanya menjadikan piring tersebut sebagai koleksi dan hiasan.
            </p>`]);

            // Karikatur
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Karikatur', '../../img/seni-rupa-murni/karikatur.jpg',`
            <p>
                Karikatur adalah salah satu jenis seni menggambar dimana penggambaran suatu objek konkret dengan cara melebih-lebihkan ciri khas objek tersebut dan biasanya objek tersebut adalah manusia. Maksud dari penggambaran yang dilebih-lebihkan ini adalah untuk memberikan kesan lucu bagi penikmatnya. Gaya menggambar karikatur ini berasal dari Italia sejak abad ke-16 hingga pada abad ke-18 telah menjangkau masyarakat luas berkat media cetak. Selain dinikmati dan digunakan sebagai dekorasi ruangan, karikatur juga sering digunakan sebagai media penyampaian pesan pada sebuah poster, flyer, dll.
            </p>`]);

            // Ukiran Kayu
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Ukiran Kayu', '../../img/seni-rupa-murni/ukiran-kayu.jpg',`
            <p>
                Sesuai dengan namanya, Ukiran kayu berarti sebuah karya seni yang diproses atau dibuat pada media kayu. Ukiran kayu adalah sebuah karya seni murni dimana seniman mengolah permukaan suatu objek dengan membuat perbedaan ketinggian dari permukaan tersebut. Yang dituangkan biasanya berupa pola atau pattern, dan juga cerita tradisional dari setiap daerah. Dalam pembuatannya, kayu yang digunakan untuk membuat kerajinan ukiran ini haruslah kayu yang berkualitas, diantaranya : Kayu Jati, Kayu Mahoni, Kayu Sonokeling, Kayu Suren, Kayu Bayur, Kayu Durian, Kayu Pulai, Kayu Ramin dll. Penggunaan Jenis kayu ini tergantung pada jenis ukiran kayu yang akan dibuat.
            </p>`]);

            // Digital Painting
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Murni', 'Digital Painting', '../../img/seni-rupa-murni/digital-painting.jpg',`
            <p>
                Seiring dengan perkembangan jaman, karya seni tidak hanya terbatas pada pengolahan bahan mentah secara fisik, namun juga dapat diolah atau diproses secara digital. Biasanya pembuatan atau proses karya seni digital painting ini menggunakan software atau piranti lunak tertentu yang dikhususkan untuk mendesign, dimana komponen-komponen di dalamnya diuat sama atau menyerupai tool fisik (seperti kanvas, kuas, cat/colour, dll) hanya saja bentuknya yang digital dan diwadahi oleh sebuah software. Hasil dari proses digital painting ini akang menjadi sebuah file bitmap atau vector dan biasanya disimpan dalam format .jpeg atau .bitmap. Software yang biasa digunakan untuk membuat karya seni digital painting ini antara lain Adobe Photoshop, Adobe Illustrator, CorelDraw, SAI dan masih banyak lagi.
            </p>`]);

            // =========================================================================================
            // SENI RUPA TERAPAN
            // =========================================================================================

            // Anyaman
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Terapan', 'Anyaman', '../../img/seni-rupa-terapan/anyaman.jpg',`
            <p>
                Anyaman merupakan suatu karya seni rupa terapan yang dibuat dari serat yang dirangkaikan hingga membentuk beda yang kaku. Biasanya anyaman dibuat atau diolah dari bahan-bahan yang berasal dari tumbuhan, namun seiring perkembangan teknologi anyaman juga dapat dibuat dari serat plastik. Anyaman ini biasanya dibuat untuk dijadikan keranjang ataupun perabot dan biasa juga kita dapati anyaman yang difungsikan sebagai tikar.
            </p>`]);
            // Batik
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Terapan', 'Batik', '../../img/seni-rupa-terapan/batik.jpg',`
            <p>
                Batik adalah jenis kain bergambar yang dibuat dalam rangkaian proses tertentu dan unik. Batik merupakan karya seni rupa terapan yang memiliki nilai seni tinggi dan telah menjadi budaya indonesia sejak lama. Corak batik yang beragam membuat batik dapat diaplikasikan dalam berbagai hal. Umumnya kita menemukan batik dalam bentuk pakaian, namun sebenarnya pola batik juga sering digunakan dalam hal lain seperti di dinding sebagai wallpaper, dsb. Jenis batik dibedakan menurut teknik pembuatannya dan daerah asal pembuatannya.
            </p>`]);
            // Kerajinan Kulit
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Terapan', 'Kerajinan Kulit', '../../img/seni-rupa-terapan/kerajinan-kulit.jpg',`
            <p>
                Karya seni rupa terapan ini sangat melimpah dan dapat ditemukan dalam berbagai macam bentuk seperti jaket, sabuk, sepatu, dompet, tas, wayang dll. Pengrajin kulit umumnya banyak tersebar di beberapa kota di Jawa Barat dan Yogyakarta. Sesuai dengan namanya, kerajinan kulit ini merupakan suatu karya seni dari bahan kulit yang sudah di samak, kulit mentah atau kulit sintestis. Kulit sendiri bisa dihasilkan dari sapi, kerbau, kambing, buaya bahkan ular. Setiap bahan kulit mempunyai karakter masing-masing, sehingga dalam penggunaan dan perawatannya pun berbeda. Proses yang dilakukan untuk membuat kerajinan kulit ini terdiri dari :
            </p>
            <ul class="top-10">
                <li>Pemotongan</li>
                <li>Penipisan Bagian Tepi</li>
                <li>Pelempitan</li>
                <li>Perekatan</li>
                <li>Penjahitan</li>
                <li>Pres</li>
                <li>Pengemasan</li>
            </ul>`]);
            // Pakaian
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Terapan', 'Pakaian', '../../img/seni-rupa-terapan/pakaian.jpg',`
            <p>
                Siapa yang tidak tau pakaian? Semua orang hidup didunia ini pasti mengenakan pakaian. Pakaian sendiri merupakan sebuah kebutuhan premier bagi setiap orang. Pakaian merupakan sebuah karya seni, karena dalam prosesnya pakaian dibuat dengan berbagai tahapan, dari mulai bahan mentah berupa kain hingga dapat kita kenakan dengan nyaman. Seni dalam membuat pakaian lebih dikenal dengan istilah fashion design, dan pembuatnya disebut fashion designer. Indonesia kaya sekali dengan budaya, termasuk dalam hal pakaian adat. Para fashion designer sekarang piawai dalam memanfaatkan keanekaragaman busana adat yang ada di Indonesia sebagai ide busana yang akan mereka buat.
            </p>`]);
            // Senjata Tradisional
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Terapan', 'Senjata Tradisional', '../../img/seni-rupa-terapan/senjata-tradisional.jpg',`
            <p>
                Kenal dengan Keris? Kujang? Tombak Trisula atau mungkin bambu runcing? Ya itu semua adalah senjata tradisional khas Indonesia. Sampai dengan saat ini senjata tradisional tersebut masih digunakan di beberapa daerah di Indonesia untuk berburu. Jangan salah, senjata tradisional memiliki nilai seni yang tinggi, dilihat dari design senjata dan detailnya. Setiap senjata tradisional dari berbagai daerah memiliki keunikan dan unsur seni tersendiri atau dengan kata lain memiliki ciri khas masing-masing. Banyak kolektor atau budayawan yang mengkoleksi senjata tradisional karena estetika dan sejarahnya.
            </p>`]);
            // Peralatan Makan
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Terapan', 'Peralatan Makan', '../../img/seni-rupa-terapan/peralatan-makan.jpg',`
            <p>
                Pada bagian contoh karya seni rupa murni disebutkan bahwa terdapat piring yang berfungsi hanya sebagai hiasan atau pajangan, karena pada sejatinya piring diperuntukkan sebagai wadah penyimpanan makanan. Jika diamati, peralatan makan seperti yang kita ketahui, piring, gelas, garpu, sendok memiliki sentuhan seni mulai dari desain, hingga corak atau aksen yang diberikan.
            </p>`]);
            // Peralatan Dapur
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Terapan', 'Peralatan Dapur', '../../img/seni-rupa-terapan/peralatan-dapur.jpg',`
            <p>
                Peralatan dapur pada umumnya terbuat dari alumunium atau logam yang dibentuk sedemikian rupa sehingga membentuk sebuah alat yang dapat digunakan untuk memudahkan kita dalam memasak. Seperti wajan dan kawan-kawannya. Nilai seni dari Peralatan dapur seringkali dilihat dari bentuknya yang disesuaikan dengan kemudahan dan kenyamanan penggunanya. Karya seni rupa terapan ini digunakan oleh seluruh rumah tangga di dunia dengan ciri khas daerah atau negara masing-masing.
            </p>`]);
            // Peralatan Rumah
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Terapan', 'Peralatan Rumah', '../../img/seni-rupa-terapan/peralatan-rumah.jpg',`
            <p>
                Setiap peralatan rumah tangga memiliki nilai fungsi masing-masing. Seperti kursi, meja, lemar dll. Perabitan rumah tangga juga selalu disesuaikan dengan kebutuhan memberikan kesan indah pada rumah agar pemilik atau orang yang melihatnya merasa nyaman. Dengan alasan tersebut maka pengrajin perabotan rumah selalu memberikan kreasi terbaiknya dalam mendesain atau merancang setiap perabotan yang dibuat, mulai dari ukiran, motif, jenis bahan yang digunakan, warna yang dipilih, dan masih banyak lagi.
            </p>`]);
            // Poster
            tx.executeSql('INSERT INTO seni_rupa (kategori, contoh_karya, image, desc_karya) VALUES (?, ?, ?, ?)', ['Seni Rupa Terapan', 'Poster', '../../img/seni-rupa-terapan/poster.jpg',`
            <p>
                Poster merupakan sebuah karya seni grafis yang dituangkan pada selembar kertas dengan berbagai ukuran. Meski kebanyakan poster dibuat secara digital, namun tidak sedikit orang yang membuat poster secara manual kemudian di digitalisasi agar dapat dipublikasikan secara online. Agar dapat menarik perhatian khalayak banyak, poster harus memiliki nilai seni dan estitika tanpa mengesampingkan informasi didalamnya serta tujuan dibuatnya poster tersebut.
            </p>`]);

        }, function(error) {
            alert('Transaction ERROR: ' + error.message);
        }, function() {
            window.localStorage.setItem('dbSeniRupa', 'true');
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