setTimeout(function(e){
    $('.loader-main').removeClass('loader-inactive');
}, 1)
var db = null;

var dbSeniTari = window.localStorage.getItem('dbSeniTari');

if(dbSeniTari != "true"){
    document.addEventListener('deviceready', function() {
        db = window.sqlitePlugin.openDatabase({
            name: 'seni-indonesia.db',
            location: 'default',
        });

        db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS seni_tari (id integer primary key autoincrement, nama_tarian text, asal_tarian text, konten text, image text)');

            tx.executeSql('DELETE FROM seni_tari');
            tx.executeSql('DELETE FROM sqlite_sequence where name="seni_tari"');


            // =========================================================================================
            // PROVINSI JAWA TENGAH
            // =========================================================================================

            // SERIMPI
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Serimpi', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-serimpi.jpg',`
            <p class="bottom-25">
                Tari serimpi merupakan tarian tradisional yang berasal dari Yogyakarta. Pada awalnya tarian ini dipertunjukkan saat pergantian raja di beberapa istana Jawa Tengah.
            </p>
            <p>
                Seiring dengan perkembangan zaman, tarian serimpi ini mengalami sedikit perubahan dari segi durasi tarian, dan kostumnya.
            </p>
            <p>   
                Walaupun begitu, tarian ini bertujuan untuk menunjukkan wanita yang sopan dan santun serta sangat lemah gemulai.
            </p>
            <p>    
                Tarian ini biasanya dilakukan oleh 4 orang anggota penari wanita. Hal ini memberikan sebuah makna unsur api, angin, air, dan bumi. Namun seiring dengan perkembangan zaman, jumlah pernaripun menjadi 5 anggota.
            </p>
            <p>    
                Pakaian yang digunakan untuk menari adalah pakaian yang biasa di pakai oleh pengantin putri keraton. Sedangkan musik yang mengiringi adalah alat musik tradisional gamelan.
            </p>`]);

            // BAMBANG CAKIL
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Bambang Cakil', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-bambang-cakil.jpg',`
            <p class="bottom-25">
                Tari bambang merupakan tarian tradisional yang berasal dari Jawa Tengah. Tarian ini diadobsi oleh salah satu adegan dalam cerita pewayangan.
            </p>
            <p>
                Dalam tari bambangan cakil ini menceritakan peperangan antara kejahatan dan kebaikan. Kedua sifat ini digambarkan dalam gerakan penari dalam tarian tersebut.
            </p>
            <p>   
                Dalam pertunjukannya, tarian ini tidak hanya dimainkan oleh dua orang saja. Melainkan ada beberapa peran pendukung seperti pasukan raksasa dan penari wanita sebagai pasangan kesatrianya.
            </p>`]);
            
            //BEDHAYA KETAWANG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Bedhaya Ketawang', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-bedhaya-ketawang.jpg',`
            <p class="bottom-25">
                Tarian bedhaya ketawang mempunyai makna penari wanita yang berasal dari istana langit. Pada awalnya tarian ini dipertunjukkan untuk acara resmi saja yang bertujuan untuk menghibur masyarakat.
            </p>
            <p>
                Biasanya tarian ini dilakukan oleh 9 orang penari wanita. Dimana kesembilan penari ini melambangkan wali songo dan adapun yang melambangkan sebagai arah mata angin.
            </p>
            <p>   
                Kostum penari yang digunakan biasanya adalah busana pengantin adat Jawa. Dimana penari menggunakan gelung besar, dan aksesoris-aksesoris khas Jawa.
            </p>
            <p>   
                Musik yang dimainkan untuk mengiringi tarian bedhaya ketawang adalah gending ketawang atau bisa juga diiringi oleh alat musik tradisional gamelan.
            </p>`]);
            
            //GAMBYONG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Gambyong', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-gambyong.jpg',`
            <p class="bottom-25">
                Tari gambyong merupakan tarian yang berasal dari daerah Surakarta. Pada awalnya tarian ini hanya dipertunjukkan pada saat memasuki musim panen padi.
            </p>
            <p>
                Namun seiring dengan perkembangan zaman, tarian ini dipertunjukkan pada saat acara sakral dan sebagai penghormatan tamu.
            </p>
            <p>
                Untuk jumlah penari tidak mempunyai ketentuan tertentu. Namun, untuk kostum yang digunakan adalah kostum kemben yang sebahu dilengkapi dengan selendang.
            </p>
            <p>
                Pada dasarnya tarian ini sangat identik dengan warna kuning dan hijau. Namun seiring perkembangannya zaman warna pun tidak menjadi patokan khusus.
            </p>
            <p>   
                Musik pengiring tarian gambyong ini adalah gamelan seperti gong, kenong, gambang, dan kendang.
            </p>`]);
            
            //BONDAN PAYUNG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Bondan Payung', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-bondan-payung.jpg',`
            <p class="bottom-25">
                Tarian bondang payung merupakan tarian yang berasal dari Surakarta. Tarian ini menceritakan tentang seorang ibu yang mencintai anaknya.
            </p>
            <p>
                Sehingga tariannya pun terbilang sangat mudah. Ciri khas tarian ini adalah para penari yang selalu membawa payung, boneka bayi, dan kendi.
            </p>
            <p>   
                Kostum yang digunakan dalam tarian ini adalah pakaian adat Jawa. Seiring dengan perkembangan zaman, tari bondan payung terbagi menjadi tiga. Yatu tari bondan mardisiwi, bondan cindogo, dan bondan tani.
            </p>`]);


            //BEKSAN WIRENG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Beksan Wireng', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-beksan-wireng.jpg',`
            <p class="bottom-25">
                Tari beksan wireng merupakan tarian yang berasal dari Jawa Tengah. Tarian ini ditunjukkan untuk menyemangati 4 prajurit perang yang saat itu sedang berlatih.
            </p>
            <p>
                Hal ini terlihat dengan gerakan-gerakan penari yang menggunakan tameng dan tombak.
            </p>
            <p>
                Seiring dengan perkembangannya zaman, tarian ini terbagi menjadi 6 jenis yaitu Panju Anem, Panji Sepuh, Dhadap Kanoman, Lhawung Ageng, Jemparing Ageng, dan Dhadap Kreta.
            </p>
            <p>   
                Biasanya tarian ini dilakukan oleh laki-laki dan menggunakan kostum seorang prajurit.
            </p>`]);


            //KUDA LUMPING
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Kuda Lumping', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-kuda-lumping.jpg',`
            <p class="bottom-25">
                Tari kuda lumping merupakan tarian tradisional yang berasal dari Jawa Tengah. Tarian ini menggunakan boneka kuda sebagai properti pendukungnya.
            </p>
            <p>
                Tarian ini tidak menunjukkan tarian seperti pada umumnya. Ada beberapa syarat yang harus disediakan selama pertunjukan seperti sesajen dan menyan.
            </p>
            <p>
                Musik yang mengiringi tarian ini adalah gamelan banyumasan, bendhe, dan gending.
            </p>`]);


            //KETHEK OGLENG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Kethek Ogleng', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-kethek-ogleng.jpg',`
            <p class="bottom-25">
                Tarian kethek ogleng merupakan tarian tradisional yang berasal dari Jawa Tengah tepatnya berasal dari Wonogiri. Asal usul tarian ini menceritakan tentang Raden Gunung Sari yang menjelma sebagai kera dan berusaha mengelabui musuhnya.
            </p>
            <p>
                Maka dari itu, penari dalam tarian ini pun menggunakan topeng kera dan menirukan gerakan-gerakan seperti kera pada umumnya,
            </p>`]);

            //JLANTUR
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Jlantur', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-jlantur.jpg',`
            <p class="bottom-25">
                Tari Jlantur meruapakan tarian yang berasal dari Boyolalo. Biasanya tarian ini dimainkan oleh 40 orang penari laki-laki. Tarian ini menceritakan perjuangan kisah Pangerah Diponogoro yang melawan pada penjajah.
            </p>
            <p>
                Penari Jlantur biasanya menggunakan ikat kepala seperti gaya Tukri dengan membawa kuda tiruan.
            </p>`]);
            
            //PRAWIRAGUNO
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Prawiroguno', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-prawiroguno.jpg',`
            <p class="bottom-25">
                Tarian Prawiroguno merupakan tarian yang berasal dari Jawa Tengah. Tarian ini menceritakan ketika para penjajah yang hampir mengalami kemunduran dan situasi pada saat itu dijadikan ide untuk membuat sebuah tarian yang sekarang disebut tarian prawiroguno.
            </p>
            <p>
                Penari Jlantur biasanya menggunakan ikat kepala seperti gaya Tukri dengan membawa kuda tiruan.
            </p>`]);
            
            //RONGGENG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Ronggeng', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-ronggeng.jpg',`
            <p class="bottom-25">
                Tari ronggeng merupakan tarian yang berasal dari Jawa Tengah. Tarian ini mempunyai ciri khas dalam gerakannya yang lebih sensual.
            </p>
            <p>
                Asal muasal dari tarian ini adalah sebagai upacara meminta kesuburan tanah. Alat musik yang mengiringi tarian ini adalah rebab dan gong.
            </p>`]);

            //ANGSA
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Angsa', 'Jawa Tengah', '../../img/kesenian/jawa-tengah/tari-angsa.jpg',`
            <p class="bottom-25">
                Tari Angsa merupakan tarian yang berasal dari Jawa Tengah. Tarian ini melambangkan keagungan seorang Dewi yang di dampingi oleh sekelompok penari angsa.
            </p>
            <p>
                Tari angsa biasanya dilakukan secara berpasang-pasangan, namun ada pula yang sendiri hingga berlima. Alat musik yang mengiringi tarian ini adalah gendang, gitar, dan degung.
            </p>`]);
            

            // =========================================================================================
            // PROVINSI JAWA BARAT
            // =========================================================================================
            
            //TARI SINTEN
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Sintren', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-sinten.jpg',`
            <p class="bottom-25">
                Tari sintren merupakan tarian yang berasal dari Cirebon. Tarian ini berbau mistis karena menceritakan tentang kisah cinta Sulasih dan Sulandono.
            </p>
            <p>
                Tarian ini sangat mistis sekali, bahkan sebelum tarian ini dilakukan harus diawali dengan dupaan atau ritual berdoa. Namun seiring dengan perkembangan zaman, tarian ini mulai tenggelam.
            </p>`]);

            //TARI TOPENG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Topeng', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-topeng.jpg',`
            <p class="bottom-25">
                Tari topeng merupakan tari tradisional yang berasal dari Cirebon. Pada umumnya penari topeng menggunakan tiga topeng yang digunakan secara simultan. Diawali dengan topeng bewarna putih, kemudian warna biru, dan di akhiri dengan topeng bewarna merah.
            </p>
            <p>
                Setiap pergantian topeng, musik pengiring akan semakin keras sebagai lambang dari karakter tokoh yang diperankan.
            </p>
            <p>
                Musik pengiring dalam tarian topeng adalah dengan menggunakan gamelan khas Cirebon.
            </p>`]);

            //TARI MERAK
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Merak', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-merak.jpg',`
            <p class="bottom-25">
                Tari merak merupakan tarian yang berasal dari Jawa Barat. Dinamakan tari merak karena tarian ini memperlihatkan kecantikan dan keindahan dari seokor burung merak.
            </p>
            <p>
                Para penari tarian merak menggunakan kostum yang juga mirip seperti bulu burung merak.
            </p>`]);

            //TARI WAYANG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Wayang', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-wayang.jpg',`
            <p class="bottom-25">
                Tari wayang merupakan tarian yang berasal dari Cirebon. Disebut sebagai tari wayang dikarenakan para penari menggunakan kostum dan melakukan gerakan seperti tokoh wayang.
            </p>
            <p>
                Tari wayang dapat dimainkan secara tunggal, berpasangan ataupun massal. Sedangkan karakter yang dimainkan oleh pemain terdiri dari beragam karakter pria dan wanita.
            </p>`]);

            //TARI KETUK TILU
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Ketuk Tilu', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-ketuk-tilu.jpg',`
            <p class="bottom-25">
                Tari ketuk tilu merupakan tarian yang berasal dari wilayah Bogor dan sekitarnya. Tari ketuk tilu terdiri dari penari wanita yang biasa disebut ronggeng dan nayaga sebagai pengiring musik.
            </p>
            <p>
                Pertunjukkan tarian ketuk tilu biasanya dilakukan di area yang terbuka maupun diluar ruangan. Ronggeng biasanya akan menari mengitari lampu yang berkaki.
            </p>
            <p>
                Dalam pertunjukkan tersebut penonton berebut untuk menari bersama ronggeng pilihan mereka.
            </p>`]);

            //TARI JAIPONG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Jaipong', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-jaipong.jpg',`
            <p class="bottom-25">
                Tari Jaipong merupakan tarian tradisional yang berasal dari Jawa Barat. Tarian ini pada awalnya berasal dari tarian ketuk tilu. Jaipong merupakan salah satu buah kreatifitas seniman Jawa Barat Gugum Gembira.
            </p>
            <p>
                Saat ini tarian jaipong sudah menjadi salah satu ikon tarian di Jawa Barat. Tarian ini banyak dipertunjukkan pada acara perhelatan yang dilakukan masyarakat ataupun pemerintah Jawa Barat.
            </p>`]);

            //TARI BUYUNG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Buyung', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-buyung.jpg',`
            <p class="bottom-25">
                Tari buyung merupakan tarian tradisional yang berasal dari Jawa Barat. Tarian ini dilakukan pada saat acara puncak upacara seren taun yang dilakukan oleh masyarakat Jawa Barat.
            </p>
            <p>
                Tarian ini menceritakan para gadis desa yang sedang mandi dan mengambil air bersama-sama di air terjun Ciereng dengan menggunakan buyung atau yang biasa disebut dengan kendi.
            </p>`]);

            //TARI KEURSEUS
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Keurseus', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-keurseus.jpg',`
            <p class="bottom-25">
                Tari keurseus merupakan tarian yang berasal dari Jawa Barat. Pada awalnya tarian ini dilakukan oleh para pejabat.
            </p>
            <p>
                Dalam lafal sunda tari ini bernama tari keurseus, sehingga tari yang diajarkan di Wirahmasari ini kemudian dikenal di kalangan masyarakat dengan nama tari keurseus.
            </p>`]);

            //TARI RONGGENG BUGIS
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Ronggeng Bugis', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-ronggeng-bugis.jpg',`
            <p class="bottom-25">
                Tari ronggeng bugis merupakan tari tradisional yang berasal dari Cirebon. Tarian ini bersifat komedi. Tarian ronggeng bugis biasa dilakukan oleh penari laki-laki sebanyak 12 – 20 orang dengan dandanan dan gaya menari layaknya perempuan.
            </p>
            <p>
                Asal mula tarian ini, dilatarbelakangi oleh ketegangan yang terjadi antara kerajaan Cirebon dengan kerajaan Islam. Sunan Gunung Jati sebagai Raja Cirebon saat itu menyuruh seorang kerabat dari kerajaan yang berasal dari suku bugis untuk mengawasi kerajaan Padjajaran.
            </p>
            <p>
                Alat musik pengiring tarian ini adalah kelenang, kendang, gong kecil, dan kecrek.
            </p>`]);

            //TARI SAMPIUNG
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Sampiung', 'Jawa Barat', '../../img/kesenian/jawa-barat/tari-sampiung.jpg',`
            <p class="bottom-25">
                Tari sampiung merupakan tarian yang berasal dari Jawa Barat.Tarian ini dipertunjukkan untuk upacara hari-hari penting seperti pesta panen, ngaruat, rebo wekasan, dan seren taun, bahkan hari raya kenegaraan seperti pada perayaan ulang tahun RI.
            </p>
            <p>
                Asal mula nama tari sampiung dikarenakan lagu pengiringnya berjudul sampiung. Alat musik pengiring tarian ini adalah berupa jentreng, yaitu alat musik petik berupa kecapi dengan ukuran yang lebih kecil.
            </p>`]);


            // =========================================================================================
            // PROVINSI JAWA TIMUR
            // =========================================================================================

            //TARI Reog Ponorogo
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Reog Ponorogo', 'Jawa Timur', '../../img/kesenian/jawa-timur/tari-reog-ponorogo.jpg',`
            <p class="bottom-25">
                Tari reog merupakan tarian tradisional yang berasal dari Ponorogo. Tarian ini biasanya dimainkan oleh 6-8 orang pria dan 6-8 wanita.
            </p>
            <p>
                Menurut sejarah, tarian ini diambil dari perjalanan Prabu Kelana Sewandana yang sedang mencari seorang pujaan hatinya.
            </p>`]);

            //TARI Gandrung
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Gandrung', 'Jawa Timur', '../../img/kesenian/jawa-timur/tari-gandrung.jpg',`
            <p class="bottom-25">
                Tari gandrung merupakan tarian yang berasal dari Banyuwangi. Kata gandrung melambangkan sebutan untuk Dewi Sri.
            </p>
            <p>
                Tarian ini mempunyai genre yang sama dengan tarian ketuk tilu. Menurut sejarah, tarian ini muncul pada saat dibangunnya ibu kota Balambangan.
            </p>
            <p>
                Kostum yang digunakan dalam tarian ini adalah baju dari beludru, beserta aksesorisnya. Dibagian kepala menggunakan mahkota bernama omprok. Dan untuk dibagian kakinya menggunakan samping batik.
            </p>
            <p>
                Musik pengiring dalam tarian ini adalah kempul atau gong.
            </p>`]);

            //TARI Wayang Topeng
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Wayang Topeng', 'Jawa Timur', '../../img/kesenian/jawa-timur/tari-wayang-topeng.jpg',`
            <p class="bottom-25">
                Tari wayang topeng merupakan tarian tradisional yang berasal dari Malang. Disebut tarian topeng wayang dikarenakan penari menggunakan topeng pada saat menari.
            </p>
            <p>
                Pada awalnya tari wayang topeng hanya dipertunjukkan untuk acara ritual saja. Musik pengiring tarian ini adalah bonang, gamelan, kendang, dan gong.
            </p>`]);

            //TARI Jaranan Buto
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Jaranan Buto', 'Jawa Timur', '../../img/kesenian/jawa-timur/tari-jaranan-buto.jpg',`
            <p class="bottom-25">
                Tari jaranan buto merupakan tari tradisional yang berasal dari Banyuwangi. Tarian ini dimainkan oleh 16-20 orang. Pada awalnya tarian ini dipertunjukkan untuk acara khitanan dan pernikahan.
            </p>
            <p>
                Gerakannya pun bisa dibilang sangat ekstrim. Ada akting bertengkar antara pemain satu dengan pemain yang lainnya. Musik pengiring tarian ini adalah dua gong besar, kendang, kempul terompet dan dua bonang.
            </p>`]);

            //TARI Remo
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Remo', 'Jawa Timur', '../../img/kesenian/jawa-timur/tari-remo.jpg',`
            <p class="bottom-25">
                Tari remo merupakan salah satu tari tradisional yang berasal dari Jawa Timur. Pada awalnya tari ini dipertunjukkan untuk menyambut tamu yang agung.
            </p>
            <p>
                Biasanya tarian ini dimainkan oleh laki-laki, namun seiring dengan perkembangan zaman tarian ini diperbolehkan dimainkan oleh wanita.
            </p>
            <p>
                Kostum yang digunakan dalam tarian ini berbeda-beda, yaitu kostum yang gaya Surabayan, gaya malangan, jombangan, remo putri, dan sawunggaling.
            </p>
            <p>
                Musik pengiring dalam tarian remo ini adalah berupa gamelan.
            </p>`]);

            //TARI Glipang
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Glipang', 'Jawa Timur', '../../img/kesenian/jawa-timur/tari-glipang.jpg',`
            <p class="bottom-25">
                Tari glipang merupakan tari tradisional yang berasal dari Jawa Timur. Tarian ini bisa dimainkan oleh laki-laki ataupun perempuan.
            </p>
            <p>
                Kalau dilihat dari gerakannya, tarian ini seperti berada dalam posisi kuda-kuda seakan-akan mau menyerang. Gerakan tarian ini seolah-olah gagah perkasa mencirikan koloneal Belanda yang ingin di junjung tinggi.
            </p>`]);
            
            //TARI Beskalan
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Beskalan', 'Jawa Timur', '../../img/kesenian/jawa-timur/tari-beskalan.jpg',`
            <p class="bottom-25">
                Tari beskalan merupakan tarian yang berasal dari Malang. Bila dilihat dari gerakan menarinya, tarian ini memperlihatkan keanggunan seorang wanita. Wanita yang feminim, lincah dan dinamis.
            </p>
            <p>
                Kostum yang digunakan dalam tarian ini adalah wedokan, semyok, khiasan kepala berupa sanggul, slendang, dan aksesoris lainnya.
            </p>
            <p>
                Alat musik pengiring dalam tarian ini adalah kendang, jidor, sinden, dan lain-lainnya.
            </p>`]);


            // =========================================================================================
            // PROVINSI BALI
            // =========================================================================================

            //TARI Cendrawasih
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Cendrawasih', 'Bali', '../../img/kesenian/bali/tari-cendrawasih.jpg',`
            <p class="bottom-25">
                Tari cendrawasih merupakan tarian yang menggambarkan keindahan burung cendrawasih yang terbang di langit. Tari cendrawasih biasanya dimainkan oleh 2 orang wanita dewasa.
            </p>
            <p>
                Tarian ini memiliki karakter gerakan yang meliuk-liuk seperti sedang menari dan juga bernyanyi ketika menjelang musim perkawinan.
            </p>`]);

            //TARI Trunajaya
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Trunajaya', 'Bali', '../../img/kesenian/bali/tari-trunajaya.jpg',`
            <p class="bottom-25">
                Tari Trunajaya merupakan sebuah tarian tradisional yang menggambarkan gerakan-gerakan seorang pemuda Bali yang sedang beranjak dewasa, penuh emosi, serta berulah untuk mendapatkan hati seorang wanita.
            </p>
            <p>
                Kreasi tarian trunajaya diciptakan untuk sebuah tarian yang menghibur dan dapat dinikmati saat acara-acara tertentu.
            </p>`]);

            //TARI Barong
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Barong', 'Bali', '../../img/kesenian/bali/tari-barong.jpg',`
            <p class="bottom-25">
                Tari barong merupakan tarian tradisional Bali yang cukup terkenal. Tarian ini merupakan warisan dari kebudayaan sebelum munculnya agama Hindu di tanah Bali.
            </p>
            <p>
                Tarian ini biasa dimainkan oleh 2 orang laki-laki. Tari barong dipertunjukkan untuk menggambarkan pertarungan yang sengit antara kebajikan dengan kebatilan.
            </p>`]);
            
            //TARI Legong
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Legong', 'Bali', '../../img/kesenian/bali/tari-legong.jpg',`
            <p class="bottom-25">
                Tari legong merupakan tarian klasik yang berasal dari Bali. Pada awalnya tarian ini hanya dipertunjukkan di lingkungan keraton pada masa kerajaan Bali.
            </p>
            <p>
                Tarian legong dimainkan oleh 2-3 orang penari. Sedangkan alat musik yang mengiringi tarian ini adalah gamelan atau yang biasa disebut dengan semar pegulingan.
            </p>`]);

            //TARI Kecak
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Kecak', 'Bali', '../../img/kesenian/bali/tari-kecak.jpg',`
            <p class="bottom-25">
                Tari kecak merupakan pertunjukkan tarian seni khas Bali. Tarian ini menceritakan mengenai Ramayana dan dimainkan oleh penari laki-laki.
            </p>
            <p>
                Tari kecak merupakan hasil karya Wayan Limbak yang bekerja sama dengan pelukis Jerman Walter Spies pada tahun 1930an.
            </p>`]);

            //TARI Pendet
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Pendet', 'Bali', '../../img/kesenian/bali/tari-pendet.jpg',`
            <p class="bottom-25">
                Tari pendet merupakan tarian yang berasal dari Bali. Pada awalnya tarian ini dipertunjukkan untuk pemujaan. Tarian ini melambangkan penyambutan atas turunnya dewata ke alam dunia.
            </p>
            <p>
                Namun seiring dengan perkembangan zaman, tarian ini dipertunjukkan sebagai tarian ucapan selamat datang.
            </p>`]);

            //TARI Baris
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Baris', 'Bali', '../../img/kesenian/bali/tari-baris.jpg',`
            <p class="bottom-25">
                Tari baris merupakan tarian ritual tradisional Bali. Tarian ini menunjukkan keberanian pada ksatria Bali dan mempresentasikan para pejuang bertempur bagi kerajaan Bali.
            </p>
            <p>
                Tarian ini biasanya dimainkan 8-40 orang pria yang menggunakan pakaian tradisional para pejuang lengkap dengan aksesorisnya.
            </p>`]);

            //TARI Panji Semirang
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Panji Semirang', 'Bali', '../../img/kesenian/bali/tari-panji-semirang.jpg',`
            <p class="bottom-25">
                Tari Panji Semirang merupakan tarian tradisional yang berasal dari Bali. Tarian ini menceritakan tentang seorang putri raja yang bernama Galuh Candrakirana yang pergi mengembara dengan menyamar menjadi seorang laki-laki bernama Raden Panji.
            </p>
            <p>
                Tarian ini dimainkan oleh seorang perempuan yang berpenampilan seperti laki-laki, dan tentu saja tidak mempunyai gerakan perempuan sama sekali dalam tarian ini.
            </p>`]);

            //TARI Puspanjali
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Puspanjali', 'Bali', '../../img/kesenian/bali/tari-puspanjali.jpg',`
            <p class="bottom-25">
                Tari puspanjali merupakan sebuah tarian yang berasal dari Bali. Tarian ini dimainkan 5-7 orang penari. Tarian ini menampilkan gerakan-gerakan yang lemah lembut dan dipadukan dengan gerakan-gerakan yang ritmis serta dinamis.
            </p>
            <p>
                Tarian ini digunakan untuk menyambut tamu yang datang ke tanah mereka.
            </p>`]);

            //TARI Margapati
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Margapati', 'Bali', '../../img/kesenian/bali/tari-margapati.jpg',`
            <p class="bottom-25">
                Tari margapati merupakan tarian yang berasal dari Bali. Tarian ini menceritakan kesalahan perjalanan hidup seorang perempuan.  Tari margapati dimainkan oleh seorang wanita.
            </p>
            <p>
                Tarian ini banyak dipertunjukkan dalam acara-acara selamatan seperti acara ulang tahun sebuah perusahaan.
            </p>`]);

            //TARI Wirayudha
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Wirayudha', 'Bali', '../../img/kesenian/bali/tari-wirayudha.jpg',`
            <p class="bottom-25">
                Tari wirayudha merupakan sebuah tarian tradisional yang dimainkan antara 2-4 orang penari pria dengan bersenjata tombak. Tarian ini disebut juga sebagai tari perang karena menceritakan prajurit yang sedang bersiap-siap menuju ke medan perang.
            </p>`]);

            //TARI Gopala
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Gopala', 'Bali', '../../img/kesenian/bali/tari-gopala.jpg',`
            <p class="bottom-25">
                Tari gopala merupakan tarian yang menceritakan tingkah laku sekelompok penggembala sapi di suatu ladang. Tarian gopala dimainkan oleh 4-8 orang penari pria.
            </p>`]);

            //TARI Condong
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Condong', 'Bali', '../../img/kesenian/bali/tari-condong.jpg',`
            <p class="bottom-25">
                Tari condong merupakan tarian tradisional yang berasal dari istana Bali. Pada umumnya, cari condong digunakan sebagai pendahuluan dari tari legong. Tarian condong diiringi dengan alat musik berupa gamelan pangulingan.
            </p>`]);

            //TARI Janger
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Janger', 'Bali', '../../img/kesenian/bali/tari-janger.jpg',`
            <p class="bottom-25">
                Tari janger merupakan tarian yang menceritakan pergaulan anak remaja di Bali. Tarian ini dimainkan 10-16 orang penari secara berpasangan-pasangan, yaitu kelompok putri yang dinamakan dengan janger dan kelompok putra yang dinamakan sebagai kecak.
            </p>`]);

            // =========================================================================================
            // PROVINSI ACEH
            // =========================================================================================


            //TARI Seudati
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Seudati', 'Aceh', '../../img/kesenian/aceh/tari-seudati.jpg',`
            <p class="bottom-25">
                Tari seudati merupakan salah satu tari tradisional yang berasal dari Nanggroe Aceh Darussalam, tari ini pertamanya adalah tarian yang ada di negeri arab dengan latar belakang beragama Islam.
            </p>`]);

            //TARI Saman
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Saman', 'Aceh', '../../img/kesenian/aceh/tari-saman.jpg',`
            <p class="bottom-25">
                Tari saman merupakan  tarian tradisional yang berasal dari Nanggroe Aceh Darussalam. Tarian ini udah menjadi perhatian masyarakat dunia internasional karena keunikannya.
            </p>
            <p>
                Tarian ini kental dengan kultur keagamaan khususnya untuk agama islam, dan mempunyai koreografi posisi duduk berbanjar dan diiringi dengan berbagai gerakan tangan dari semua penari yang satu gerakan menjadikan tari saman memiliki visualisai yang indah untuk dapat dinikmati. Tari saman juga biasa diiringi dengan syair yang kaya akan pesan keagamaan semisal ajaran kebajikan kepada sesama manusia dan makhluk hidup.
            </p>`]);

            //TARI Bines
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Bines', 'Aceh', '../../img/kesenian/aceh/tari-bines.jpg',`
            <p class="bottom-25">
                Tari Bines merupakan tari tradisional yang berasal dari kabupaten Gayo Lues. Tarian ini sudah ada dan berkembang di Aceh Tengah tapi setelah itu dibawa ke Aceh Timur.
            </p>
            <p>
                Sejarah mengatakan tarian ini dipopulerkan oleh ulama yang bernama Syech Saman sebagai rangka berdakwah. Tari ini dilakukan oleh kaum wanita dengan duduk berjajar sembari menyanyikan syair yang mengandung dakwah atau informasi pembangunan pada saat itu.
            </p>`]);

            //TARI Didong
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Didong', 'Aceh', '../../img/kesenian/aceh/tari-didong.jpg',`
            <p class="bottom-25">
                Seni tari didong merupakan kesenian tradisional warga Gayo yang masih ada sampai di masa modren ini, mempunyai social interest yang tinggi dari setiap kultur masyarakatnya. Kesenian Didong adalah campuran antara seni dan suara seni tari dengan tema sastra seperti syair-syair sebagai unsur dasarnya.
            </p>`]);

            //TARI Guel
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Guel', 'Aceh', '../../img/kesenian/aceh/tari-guel.jpg',`
            <p class="bottom-25">
                Tari guel adalah seni tari khasanah budaya Gayo di tanah Aceh. Guel memiliki arti membunyikan. Terkhususnya di wilayah dataran tinggi gayo, seni tari ini mempunyai kisah panjang nan unik.
            </p>
            <p>
                Para peneliti dan koreografer tari berpendapat tarian ini bukan sekedar tarian biasa, melainkan sebuah gabungan dari seni musik, seni sastra, dan seni tari itu sendiri.
            </p>`]);

            // =========================================================================================
            // PROVINSI SUMATERA UTARA
            // =========================================================================================

            //TARI Serampang Dua Belas
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Serampang Dua Belas', 'Sumatera Utara', '../../img/kesenian/sumatera-utara/tari-serampang-dua-belas.jpg',`
            <p class="bottom-25">
                Tari Serampang Dua Belas adalah tarian yang berasal dari Serdang Bedagai, Sumatera Utara. Tarian serampang dua belas termasuk tarian pergaulan yang dimainkan oleh beberapa penari pria dan juga penari wanita secara berpasang-pasangan. Selain kaya dengan nilai seni, tarian ini kaya akan arti dan nilai-nilai kehidupan di dalamnya.
            </p>
            <p>
                Tari ini merupakan tarian yang sangat mashur di Sumatera Utara, terkhusus di daerah Serdang Bedagai yang merupakan daerah asalnya.
            </p>`]);
            
            //TARI Tor Tor
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Tor Tor', 'Sumatera Utara', '../../img/kesenian/sumatera-utara/tari-tor-tor.jpg',`
            <p class="bottom-25">
                Tari Tor Tor merupakan jenis tari berasal dari suku Batak dari Pulau Sumatera. Sejak abad ke-13, Tari Tor Tor sudah menjadi tarian budaya suku Batak. Perkiraan tersebut disampaikan oleh mantan dari anggota anjungan Sumatera Utara pada tahun 1973-2010 dan juga pakar dari Tari Tor Tor.
            </p>
            <p>
                Dahulu, tradisi tari Tor Tor hanya ada pada kehidupan suku Batak yang berada di wilayah Samosir, wilayah Toba dan sebagian wilayah Humbang. Tapi, setelah masukknya Agama Kristen di wilayah Silindung, budaya ini terkenal dengan budaya tarian modern dan menyanyi.
            </p>`]);

            // =========================================================================================
            // PROVINSI SUMATERA BARAT
            // =========================================================================================

            //TARI Piring
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Piring', 'Sumatera Barat', '../../img/kesenian/sumatera-barat/tari-piring.jpg',`
            <p class="bottom-25">
                Tari piring diyakini sudah ada semenjak abad ke 12 Masehi, datang dari kebudayaan asli masyarakat Minangkabau Sumatera Barat itu sendiri.
            </p>
            <p>
                Dulu tarian ini adalah tarian sesembahan yang diperuntukan para dewa yang sudah memberikan hasil panen berlimpah selama setahun kepada masyarakat sekitar. Harus diketahui bahwa sebelum Islam masuk ke Minangkabau, mayoritas masyarakat Minangkabau masih berkeyakinan agama Budha, Hindu, dan sebagian Animisme.
            </p>`]);

            //TARI Payung
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Payung', 'Sumatera Barat', '../../img/kesenian/sumatera-barat/tari-payung.jpg',`
            <p class="bottom-25">
                Tari payung merupakan tari tradisional dari minangkabau yang menyertakan payung sebagai alat tariannya.Tari payung ini dilakukan oleh beberapa penari yang saling berpasangan antara pria dan wanita. Gerakan pada tari payung menceritakan tentang kisah kasih 2 orang yang sedang jatuh cinta.
            </p>`]);

            // =========================================================================================
            // PROVINSI SUMATERA SELATAN
            // =========================================================================================

            //TARI Tanggai
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Tanggai', 'Sumatera Selatan', '../../img/kesenian/sumatera-selatan/tari-tanggai.jpg',`
            <p class="bottom-25">
                Tarian Tanggai merupakan tarian daerah yang berasal dari Palembang Sumatera Selatan yang kini tumbuh berkembang di Sumatera Selatan yang dimainkan untuk menyambut tamu saat hajatan adat setempat.
            </p>
            <p>
                Dulunya tarian ini dipentaskan sebagai tari sembahan untuk dewa Siwa dan membawa sajian buah dan macam bunga guna persembahan sehingga tari tanggai ini termasuk tarian sakral.
            </p>`]);
            
            //TARI Putri Bekhusek
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Putri Bekhusek', 'Sumatera Selatan', '../../img/kesenian/sumatera-selatan/tari-putri-bekhusek.jpg',`
            <p class="bottom-25">
                Tari Putri Bekhusek merupakan tarian yang berasal dari Sumatra Selatan. Tarian ini memiliki arti yaitu sang putri yang sedang bermain. Tarian ini sangat terkenal di Kabupaten Ogan Komering Ulu dan juga melambangkan kesejahteraan untuk masyarakat Sumatra Selatan.
            </p>`]);

            //TARI Gending Sriwijaya
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Gending Sriwijaya', 'Sumatera Selatan', '../../img/kesenian/sumatera-selatan/tari-gending-sriwijaya.jpg',`
            <p class="bottom-25">
                Tari Gending Sriwijaya merupakan tarian tradisional yang berasal dari Palembang, Sumatera Selatan. Lagu Gending Sriwijaya dimainkan untuk membarengi Tari Gending Sriwijaya. Baik lagu atau tarian ini mencerminkan kejayaan, keluhuran budaya, dan keagungan dari Kerajaan Sriwijaya yang pernah berjaya menyatukan wilayah Barat Nusantara.
            </p>`]);

            // =========================================================================================
            // PROVINSI RIAU
            // =========================================================================================

            //TARI Tandak
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Tandak', 'Riau', '../../img/kesenian/riau/tari-tandak.jpg',`
            <p class="bottom-25">
                Tari Tandak merupakan tarian tradisional yang berasal dari Riau. Tarian ini termasuk tarian pergaulan yang umumnya digelar oleh para penari pria dan wanita.
            </p>
            <p>
                Dengan berpakaian tradisional melayu menari dengan gerakannya khas dan dibarengi oleh lagu dan musik pengiring. Tarian ini biasanya dipertunjukkan di berbagai acara, baik untuk acara adat atau acara budaya.
            </p>`]);

            //TARI Joget Lambak
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Joget Lambak', 'Riau', '../../img/kesenian/riau/tari-joget-lambak.jpg',`
            <p class="bottom-25">
                Joget Lambak merupakan tarian yang berasal dari Riau dan sebuah tarian yang populer di masyarakat melayu. Dalam perkembangannya ,tari joget lambak sudah berkembang di wilayah Bintan, Moro, Batam dan tersebar luas di Kepulauan Riau.
            </p>`]);

            // =========================================================================================
            // PROVINSI KEPULAUAN RIAU
            // =========================================================================================

            //TARI Melemang
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Melemang', 'Kepulauan Riau', '../../img/kesenian/kepulauan-riau/tari-melemang.jpg',`
            <p class="bottom-25">
                Tari Melemang merupakan tarian tradisional dari Bintan, Kepulauan Riau. Tari Malemang pada awalnya cuma dimainkan untuk kalangan istana saja, tepatnya yaitu sejak abad ke 12.
            </p>
            <p>
                Karena termasuk tarian istana, tari Melemang dimainkan oleh para dayang dari kerajaan Bentan. Namun sejak Kerajaan Bentan runtuh, tari Melemang berkamuplase menjadi pertunjukan atau hiburan untuk rakyat.
            </p>`]);

            //TARI Zapin
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Zapin', 'Kepulauan Riau', '../../img/kesenian/kepulauan-riau/tari-zapin.jpg',`
            <p class="bottom-25">
                Tari Zapin merupakan tarian rumpun Melayu yang menghibur juga sarat dengan pesan agama dan juga pendidikan. Tari zapin ini mempunyai aturan dan kaidah yang tidak boleh dirubah dari zaman ke zaman namun keelokannya tak hilang begitu saja.
            </p>`]);

            // =========================================================================================
            // PROVINSI JAMBI
            // =========================================================================================

            //TARI Sekapur Sirih
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Sekapur Sirih', 'Jambi', '../../img/kesenian/jambi/tari-sekapur-sirih.jpg',`
            <p class="bottom-25">
                Tari Sekapur Sirih adalah tari persembahan yang berasal dari Jambi.Tari adat jambi ini banyak kesamaannya dengan tari Melayu.
            </p>`]);

            //TARI Selampir Delapan
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Selampir Delapan', 'Jambi', '../../img/kesenian/jambi/tari-selampir-delapan.jpg',`
            <p class="bottom-25">
                Tari Selampit Delapan adalah tari tradisional asal Jambi. Tari Selampit Delapan merupakan sketsa dari pergaulan pemuda-pemudi Jambi. Tari Selampit Delapan mempunyai nilai yang sangat penting dalam mempererat pergaulan.
            </p>`]);

            // =========================================================================================
            // PROVINSI BANGKA BELITUNG
            // =========================================================================================

            //TARI Campak
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Campak', 'Bangka Belitung', '../../img/kesenian/bangka-belitung/tari-campak.jpg',`
            <p class="bottom-25">
                Tari Campak adalah tarian tradisional dari Bangka Belitung yang mengkisahkan keceriaan bujang dan dayang di Bangka Belitung. Tarian ini umumnya dibawakan sesudah panen padi atau sepulang dari kebun (ume).
            </p>
            <p>
                Tari campak juga dipentaskan sebagai hiburan untuk berbagai kegiatan seperti penyambutan tamu terhormat atau pesta pernikahan dan macam pesta lainnya. Tarian ini mulai berkembang di masa bangsa Portugis menduduki Bangka Belitung.
            </p>
            <p>
                Hal ini terlihat dari beberapa macam pada tari Campak diantaranya akordion dan pakaian penari perempuan yang kental akan gaya Eropa
            </p>`]);

            // =========================================================================================
            // PROVINSI BENGKULU
            // =========================================================================================

            //TARI Andun
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Andun', 'Bengkulu', '../../img/kesenian/bengkulu/tari-andun.jpg',`
            <p class="bottom-25">
                Tari Andun adalah seni tari bersal dari daerah Bengkulu Selatan, tari adun merupakan seni tari yang biasa digelar untuk menyambut tamu istimewa atau yang dihormati.
            </p>`]);

            //TARI Bidadari
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Bidadari', 'Bengkulu', '../../img/kesenian/bengkulu/tari-bidadari.jpg',`
            <p class="bottom-25">
                Tari Bidadari Teminang Anak, seni tari ini dapat juga diartikan bidadari meminang anak. Tari bidadari ini berasal dari daerah Rejang Lebong.Bengkulu.
            </p>`]);

            // =========================================================================================
            // PROVINSI LAMPUNG
            // =========================================================================================

            //TARI Jangget
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Jangget', 'Lampung', '../../img/kesenian/lampung/tari-jangget.jpg',`
            <p class="bottom-25">
                Tari Jangget adalah tarian berasal dari Lampung dan juga merupakan tarian upacar-upacara peradatan. Tari jangget melambangkan keluhuran susilabudi dan masyarakat Lampung.
            </p>`]);

            //TARI Malinting
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Malinting', 'Lampung', '../../img/kesenian/lampung/tari-malinting.jpg',`
            <p class="bottom-25">
                Tari Melinting adalah tari tradisional dari Lampung. Tarian ini merupakan peninggalan Kerajaan Melinting yang berada di Lampung Timur. Tari Melinting termasuk tarian tertua, karena dilansir tarian ini sudah ada sedari masuknya Islam di Indonesia, terkhusus lagi di Lampung.
            </p>`]);

            //TARI Cangget
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Cangget', 'Lampung', '../../img/kesenian/lampung/tari-cangget.jpg',`
            <p class="bottom-25">
                Tari Cangget adalah tarian dari Lampung, sebelum datangnya bangsa Jepang di Indonesia atau pada tahun 1942, Tari Canget selalu dipentaskan pada setiap acara yang bersangkutan dengan gawi adat, misal upacara pendirian rumah, panen raya, dan juga untuk mengiring orang yang akan pergi melaksanakan ibadah haji.
            </p>
            <p>
                Pada saat tari digelar, masyarakat akan berkumpul melihat pertunjukan ini, baik itu tua, muda, laki-laki ataupun perempuan, hal ini dengan tujuan selain untuk ikut serta dalam upacara, juga digunakan untuk saling mengenal dengan sesamanya.
            </p>`]);

            // =========================================================================================
            // PROVINSI JAKARTA
            // =========================================================================================

            //TARI Topeng
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Topeng', 'Jakarta', '../../img/kesenian/jakarta/tari-topeng.jpg',`
            <p class="bottom-25">
                Tari Topeng adalah tarian berasal dari jakarta yang merupakan salah satu tari topeng yang juga dimiliki daerah lain namun dengan tarian yang berbeda-beda jenisnya. Tari topeng ini merupakan tari tradisional Betawi untuk menyambut tamu agung atau istimewa.
            </p>`]);

            //TARI Yopong
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Yopong', 'Jakarta', '../../img/kesenian/jakarta/tari-yopong.jpg',`
            <p class="bottom-25">
                Tari Yopong termasuk tari persembahan guna menghormati tamu negara. Dan tari yopang ini bersal dari daerah Betawi Jakarta.
            </p>`]);

            //TARI Cokek
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Cokek', 'Jakarta', '../../img/kesenian/jakarta/tari-cokek.jpg',`
            <p class="bottom-25">
                Tari Cokek adalah tarian klasik masyarakat Betawi. Tarian ini termasuk tarian pergaulan warga Betawi untuk meramaikan pesta adat mereka. Tari Cokek ini termasul tari campuran antara unsur tari tradsional sunda, Betawi, tiongkok dan pencak silat.
            </p>
            <p>
                Gerakan pada Tari Cokek ini merupakan gerakan yang luwes dan harmonis, yaitu gerakan tangannya yang gemulai juga pinggul yang bergoyang senada. Selain itu, sekali-kali penari juga menggunakan selendangnya sehingga menjadikan penari telihat mempesona dan anggun.
            </p>`]);

            //TARI Gitek Balen
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Gitek Balen', 'Jakarta', '../../img/kesenian/jakarta/tari-gitek-balen.jpg',`
            <p class="bottom-25">
                Tari Gitek Balen adalah tari tradisional dari Jakarta, khususnya warga Betawi. Tarian ini merupakan kreasi baru yang terilhami dari pola pukulan didalam gamelan ajeng Betawi, tari yang memperlihatkan keelokan gadis-gadis yang menginjak umur dewasa ini dirangkai oleh Abdurachem.
            </p>
            <p>
                Adapun istilah dari nama Tari Gitek Balen adalah, “Gitek” yanga artinya goyang dan “balen” yaitu sebuah pola pukulan pada gamelan ajeng Betawi.
            </p>`]);

            // =========================================================================================
            // PROVINSI BANTEN
            // =========================================================================================

            //TARI Walijamaliha
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Walijamaliha', 'Banten', '../../img/kesenian/banten/tari-walijamaliha.jpg',`
            <p class="bottom-25">
                Tari Walijamaliha merupakan gambaran perkenalan untuk daerah Banten yang memiliki potensi alam berlimpah, daya tarik, bersejarah turunan kesultanan, dan mempunyai derajat ketaatan terhadap agama yang tidak diragukan lagi.
            </p>
            <p>
                Gambaran Keragaman Budaya terdiri dari Jawa Serang, budaya Sunda, Etnis Cina, India dan Arab hidup rukun sebagai bukti kebersamaan juga kekompakan warganya untuk mambangun Banten.
            </p>`]);

            //TARI Grebeg Terbang Gede
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Grebeg Terbang Gede', 'Banten', '../../img/kesenian/banten/tari-grebeg-terbang-gede.jpg',`
            <p class="bottom-25">
                Tari Grebeg Terbang Gede merupakan tari kreasi yang masih syarat dengan Tradisi, yang berpijak untuk kesenian Terbang Gede dari Kota Serang dan di kolaborasikan dengan pencak silat khas dari Banten.
            </p>`]);

            // =========================================================================================
            // PROVINSI YOGYAKARTA
            // =========================================================================================

            //TARI Serimpi
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Serimpi', 'Yogyakarta', '../../img/kesenian/yogyakarta/tari-serimpi.jpg',`
            <p class="bottom-25">
                Tari Serimpi merupakan sebuah tarian klasik yang berasal dari Yogyakarta yang dimainkan oleh beberapa penari wanita cantik nan anggun. Tarian ini mengekspresikan kelemah lembutan dan kesopanan, yang di perlihatkan dari gerakannya yang lemah lembut oleh para penarinya.
            </p>`]);

            //TARI Bedhaya
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Bedhaya', 'Yogyakarta', '../../img/kesenian/yogyakarta/tari-bedhaya.jpg',`
            <p class="bottom-25">
                Tari Bedaya merupakan tarian klasik dari Istana Kasultanan Ngayogyakarta Hadiningrat dan tari bedaya diciptakan oleh Sri Sultan Hamengku Buwana I dan diyakini sebagai pusaka. Hal ini dapat dibuktikan pada saat awal pementasan para penari keluar dari tempat penyimpanan pusaka-pusaka Kraton yakni Bangsal Prabayeksa, menuju Bangsal Kencono.
            </p>`]);

            //TARI Badui
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Badui', 'Yogyakarta', '../../img/kesenian/yogyakarta/tari-badui.jpg',`
            <p class="bottom-25">
                Tari Badui merupakan kesenian dari daerah Sleman Provinsi DIY Yogyakarta. Tarian ini termasuk jenis tarian rakyat yang menceritakan suatu adegan peperangan atau rombongan prajurit yang lagi latihan perang. Dalam pertunjukan tari ini dilakukan dengan berkelompok dan berpasangan.
            </p>
            <p>
                Seni Badui yang sekarang masih ada dan berkembang di kabupaten Sleman tidak sedikit berasal dari daerah Kedu, sedangkan di Kedu juga termasuk kesenian rakyat yang awalnya dibawa oleh pelancong dari tanah Arab.
            </p>`]);

            //TARI Beksan Lawung Ageng
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Beksan Lawung Ageng', 'Yogyakarta', '../../img/kesenian/yogyakarta/tari-beksan-lawung-ageng.jpg',`
            <p class="bottom-25">
                Tari dengan gerakan rancak, mencerminkan keberanian juga kesuburan.Beksan Lawung Ageng mengedepankan karakter seorang laki-laki kuat.
            </p>
            <p>
                Melalui macam gerakan tarinya menunjukkan kekuatan, semangat, serta keberanian. Tarian mengisahkan latihan perang prajurit Kraton Ngayogyakarta Hadiningrat yang sedang membawa lawung atau tombak.
            </p>`]);

            //TARI Golek Menak
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Golek Menak', 'Yogyakarta', '../../img/kesenian/yogyakarta/tari-golek-menak.jpg',`
            <p class="bottom-25">
                Tari Golek Menak merupakan jenis tari klasik Yogyakarta yang dibuat oleh Sri Sultan Hamengku Buwono IX. pembuatan tari Golek Menak bermula dari ide sultan sehabis melihat pertunjukkan Wayang Golek Menak yang ditampilkan oleh seorang dalang dari wilayah Kedu di tahun 1941.
            </p>`]);

            // =========================================================================================
            // PROVINSI NUSA TENGGARA BARAT
            // =========================================================================================

            //TARI Mpaa lenggogo
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Mpaa lenggogo', 'Nusa Tenggara Barat', '../../img/kesenian/nusa-tenggara-barat/tari-mpaa-lenggogo.jpg',`
            <p class="bottom-25">
                Tari Mpaa Lenggogo, adalah tarian dari Nusa Tenggara Barat (NTB) yang mana biasanya tarian ini dipentaskan untuk menyambut Maulid Nahi Muhammad SAW. Tari Mpaa Lenggogo juga tidak jarang ditampilkan untuk upacara-upacara upacara khitanan atau perkawinan keluarga raja.
            </p>`]);

            //TARI Batunganga
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Batunganga', 'Nusa Tenggara Barat', '../../img/kesenian/nusa-tenggara-barat/tari-batunganga.jpg',`
            <p class="bottom-25">
                Tari Batu Nganga adalah seni tari dari Nusa Tenggara Barat yang mengkisahkan tentang cerita rakyat. Konon kisahnya menceritakan tentang rakyat yang cinta terhadap putri raja yang konon masuk batu dan rakyat memohon agar sang putri bisa keluar dari dalam batu itu.
            </p>`]);

            // =========================================================================================
            // PROVINSI NUSA TENGGARA TIMUR
            // =========================================================================================

            //TARI Gareng Lameng
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Gareng Lameng', 'Nusa Tenggara Timur', '../../img/kesenian/nusa-tenggara-timur/tari-gareng-lameng.jpg',`
            <p class="bottom-25">
                Tari Gareng Lameng adalah tari tradisional dari Nusa Tenggara Timur yang dipertunjukkan saat upacara khitanan. Tari ini berupa ucapan selamat juga mohon keberkahan kepada Tuhan supaya yang dikhitan sehat dan sukses dalam menjalani hidup.
            </p>`]);

            //TARI Gawi
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Gawi', 'Nusa Tenggara Timur', '../../img/kesenian/nusa-tenggara-timur/tari-gawi.jpg',`
            <p class="bottom-25">
                Tari Gawi adalah tari tradisional yang dipertunjukkan secara masal di Flores, Ende, Nusa Tenggara Timur (NTT). Tarian ini termauk salah satu tarian adat suku Ende Lio sebagai sebuah ungkapan rasa syukur atas semua berkat dan rahmat yang Tuhan berikan kepada mereka.
            </p>`]);

            //TARI Caci
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Caci', 'Nusa Tenggara Timur', '../../img/kesenian/nusa-tenggara-timur/tari-caci.jpg',`
            <p class="bottom-25">
                Tari Caci adalah tari perang juga permainan rakyat diantara sepasang penari laki-laki yang berperang dengan perisai dan cambuk di Flores, Nusa Tenggara Timur, Indonesia. Penari yang memiliki senjata pecut (cambuk) berlaku sebagai penyerang dan lainnya bertahan dengan memakai tameng (perisai).
            </p>
            <p>
                Tari ini ditampilkan saat musim panen (hang woja) dan ritual setiap tahun baru (penti) , atau upacara adat lainnya, serta dipertunjukkan untuk menyambut tamu istimewa.
            </p>`]);

            //TARI Ende Lio
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Ende Lio', 'Nusa Tenggara Timur', '../../img/kesenian/nusa-tenggara-timur/tari-ende-lio.jpg',`
            <p class="bottom-25">
                Seperti tarian yang lainnya Tari Ende Lio juga termasuk sebuah tarian daerah yang mencerminkan rasa melalui tatanan gerak dan irama musik dalam lagu. Tari ini mempunyai ragam macam tarian dan perkembangan. Banyak ahli tari yang mengembangkan tarian tari ende lio ini.
            </p>`]);

            // =========================================================================================
            // PROVINSI KALIMANTAN BARAT
            // =========================================================================================

            //TARI Monong
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Monong', 'Kalimantan Barat', '../../img/kesenian/kalimantan-barat/tari-monong.jpg',`
            <p class="bottom-25">
                Tari Monong adalah tarian dari Kalimantan Barat yang merupakan penolak penyakit agar penderita bisa pulih kembali, penari berlaku kayak dukun dengan menggunakan jampi-jampi.
            </p>`]);

            //TARI Zapin Tembung
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Zapin Tembung', 'Kalimantan Barat', '../../img/kesenian/kalimantan-barat/tari-zapin-tembung.jpg',`
            <p class="bottom-25">
                Tari Zapin Tembung adalah tarian yang berasal dari Kalimantan Barat, tari zapin memiliki suatu hal dan makna yang beda antara gerakan satu dengan gerakan lainnya.
            </p>`]);

            // =========================================================================================
            // PROVINSI KALIMANTAN TENGAH
            // =========================================================================================

            //TARI Balean Dadas
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Balean Dadas', 'Kalimantan Tengah', '../../img/kesenian/kalimantan-tengah/tari-balean-dadas.jpg',`
            <p class="bottom-25">
                Tari Balean Dadas adalah tarian tradisional berasal dari suku Dayak Provinsi Kalimantan Tengah. Tari ini bermula dari tradisi ritual dukun pada pedalaman Kalimantan Tengah untuk upaya meminta keberkahan tuhan juga penyembuhan untuk penduduk yang sakit.
            </p>`]);

            //TARI Tambun dan Bungai
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Tambun dan Bungai', 'Kalimantan Tengah', '../../img/kesenian/kalimantan-tengah/tari-tambun-dan-bungai.jpg',`
            <p class="bottom-25">
                Tari tambun dan bungai adalah tarian dari palangkaraya, Kalimantan Tengah. Tari tambun dan bungai merupakan tari yang menceritakan kepahlawanan Tambun dan Bungai saat mengusir musuh yang mau merampas dari hasil panen rakyat.
            </p>`]);

            //TARI Giring-giring
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Giring-giring', 'Kalimantan Tengah', '../../img/kesenian/kalimantan-tengah/tari-giring-giring.jpg',`
            <p class="bottom-25">
                Tari giring-giring adalah sebuah tarian khas Ma’anyan yang menempati daerah Kabupaten Barito Timur juga Kabupaten Barito Selatan dari provinsi Kalimantan Tengah. Tari giring-giring atau juga dipanggil Gangereng umumnya ditampilkan saat menyambut tamu istimewa.
            </p>`]);

            // =========================================================================================
            // PROVINSI KALIMANTAN SELATAN
            // =========================================================================================

            //TARI Baksa Kembang
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Baksa Kembang', 'Kalimantan Selatan', '../../img/kesenian/kalimantan-selatan/tari-baksa-kembang.jpg',`
            <p class="bottom-25">
                Tari Baksa Kembang adalah tarian dari Kalimantan selatan yang di pentaskan sebagai tarian untuk menyambut tamu. Tarian ini umumnya dilakukan oleh penari wanita sebagai tari tunggal atau berkelompok dengan ketentuan jumlah penari harus ganjil.
            </p>
            <p>
                Pada awalnya sekitar pada abad 15 SM, seorang pangeran Suria Wangsa Gangga pada kerajaan Daha dan Dipa di pulau Kalimantan memiliki seorang kekasih yang bernama putri Kuripan.
            </p>
            <p>
                Sebuah kejadian di waktu yang lain ialah saat putri Kuripan menyerahkan setangkai bunga teratai merah terhadap pangeran. Peristiwa itu termasuk cikal bakal lahirnya tarian Baksa Kembang di Banjar, Kalimantan Selatan.
            </p>`]);

            //TARI Radap Rahayu
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Radap Rahayu', 'Kalimantan Selatan', '../../img/kesenian/kalimantan-selatan/tari-radap-rahayu.jpg',`
            <p class="bottom-25">
                Tari Radap Rahayu adalah tari tradisional dari Kalimantan selatan. Tarian ini merupakan tarian untuk menyambut tamu kehormatan. Nama Tari Radap Rahayu di diilhami dari kata radap yang berarti berkelompok atau bersama sama. Sedangkan rahayu artinya kemakmuran atau kebahagiaan.
            </p>`]);

            // =========================================================================================
            // PROVINSI KALIMANTAN TIMUR
            // =========================================================================================

            //TARI Gong
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Gong', 'Kalimantan Timur', '../../img/kesenian/kalimantan-timur/tari-gong.jpg',`
            <p class="bottom-25">
                Tari Gong adalah tari tradisional suku Dayak Kalimantan timur yang menyertakan gong sebagai alat menarinya. Tarian ini di lakukan oleh seorang gadis sedang menari di atas gong. Tari Gong ini masyarakat Dayak biasa juga di sebut dengan sebutan tari kancet ledo.
            </p>`]);

            //TARI Belian
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Belian', 'Kalimantan Timur', '../../img/kesenian/kalimantan-timur/tari-belian.jpg',`
            <p class="bottom-25">
                Tarian Belian banyak dibawakan saat upacara adat suku dayak yang berlokasi di Kalimantan Timur terkhusus lagi KUBAR yaitu Tarian Belian Bawo atau Sentiu, yang bertujuan guna menolak penyakit , mengobati yang sakit , membayar nazar dan lain-lain.
            </p>`]);

            //TARI Datun
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Datun', 'Kalimantan Timur', '../../img/kesenian/kalimantan-timur/tari-datun.jpg',`
            <p class="bottom-25">
                Tarian Datun adalah tari tradisional bersama wanita suku Dayak Kenyah dengan jumlah penari yang tak pasti, boleh 10 sampai 20 orang.
            </p>
            <p>
                Menurut sejarahnya, tari bersama ini dibuat oleh seorang lelaki dari suku Dayak Kenyah di daerah Apau Kayan yang diberi nama Anyi Selong, sebagai tanda rasa syukur dan bahagia atas penyakit istrinya sembuh .
            </p>`]);

            // =========================================================================================
            // PROVINSI KALIMANTAN UTARA
            // =========================================================================================

            //TARI Magunatip atau Lalatip
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Magunatip atau Lalatip', 'Kalimantan Utara', '../../img/kesenian/kalimantan-utara/tari-magunatip-lalatip.jpg',`
            <p class="bottom-25">
                Tari Magunatip atau Tari Lalatip adalah tarian tradisional dari daerah Malinau dan Tarakan Kalimantan Utara. Pada zaman dahulu tarian magunatip dilakukan sebagai latihan ketangkasan kaki saat melompat dan menghindari sebuah rintangan.
            </p>
            <p>
                Hal ini diadakan karena terjadinya perang antar suku. Akan tetapi kini latihan ketangkasan itu dijadikan sebuah tarian.
            </p>`]);

            //TARI Kancet Ledo
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Kancet Ledo', 'Kalimantan Utara', '../../img/kesenian/kalimantan-utara/tari-kancet-ledo.jpg',`
            <p class="bottom-25">
                Tari Kancet Ledo adalah tarian daerah dari Baram-Sarawak, Kalimantan Utara suku Dayak Kenyah. Gerakan tari ini mencerminkan kelembutan seorang gadis, seperti dikala angin berhembus yang menggoyangkan padi.
            </p>
            <p>
                Kostum yang dipakai dalam tari ini memakai pakaian adat suku Dayak Kenyah dengan tatanan buket sejumlah ekor dari burung enggang.
            </p>`]);

            // =========================================================================================
            // PROVINSI SULAWESI UTARA
            // =========================================================================================

            //TARI Bosara
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Bosara', 'Sulawesi Utara', '../../img/kesenian/sulawesi-utara/tari-bosara.jpg',`
            <p class="bottom-25">
                Tari Bosara, adalah tarian tradisional dari Sulawesi Utara untuk menyambut tamu terhormat. Beberapa tarian badannya sangatlah luwes.
            </p>
            <p>
                Dulu sering dipentaskan disetiap acara penting guna menjamu raja dengan hidangan kue kue sebanyak 2 kasera. Tarian ini memberi pesan bahwa orang Bugis jika kedatangan tamu selalu menghidangkan bosara, juga sebagai bentuk kesyukuran dan kehormatan.
            </p>`]);
            //TARI Maengket
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Maengket', 'Sulawesi Utara', '../../img/kesenian/sulawesi-utara/tari-maengket.jpg',`
            <p class="bottom-25">
                Tari Maengket adalah tari tradisional masyarakat Minahasa yang tinggal menetap di Sulawesi Utara. Tari maengket biasanya dimainkan secara masal (dengan jumlah penari yang banyak), baik penari pria atau wanita. Tari Maengket ini termasuk tarian tradisional yang cukup dikenal di Sulawesi Utara dan sampai saat ini masih terus dipertahankan.
            </p>`]);

            // =========================================================================================
            // PROVINSI SULAWESI BARAT
            // =========================================================================================

            //TARI Toerang Batu
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Toerang Batu', 'Sulawesi Barat', '../../img/kesenian/sulawesi-barat/tari-toerang-batu.jpg',`
            <p class="bottom-25">
                Tari Toerang Batu adalah tari tradisional dari Sulawesi Barat. Tari Toerang batu ini dulunya dibawakan oleh sekelompok masyarakat (yang termasuk dalam wilayah Sulawesi Barat ) sebagai pengantar prajurit Kerajaan Binuang dikala akan berangkat ke tempat perang. maka dari itu tari Toerang Batu ini disebut dengan tari perang.
            </p>`]);

            //TARI Pa’tuddu
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Pa’tuddu', 'Sulawesi Barat', '../../img/kesenian/sulawesi-barat/tari-patuddu.jpg',`
            <p class="bottom-25">
                Tari Patuddu adalah tari tradisional dari Provinsi Sulawesi Barat. Tari ini termasuk tarian yang cukup terenal di Sulawesi Barat dan sering dipertunjukkan pada berbagai macam acara seperti penyambutan tamu, pertunjukan seni atau festival budaya. Tari Patuddu dilakukan dengan lemah lembut oleh beberapa wanita dengan membawa kipas.
            </p>`]);

            // =========================================================================================
            // PROVINSI SULAWESI TENGAH
            // =========================================================================================

            //TARI Lumense
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Lumense', 'Sulawesi Tengah', '../../img/kesenian/sulawesi-tengah/tari-lumense.jpg',`
            <p class="bottom-25">
                Tari Lumense adalah tarian dari Poso Sulawesi Tengah yang termasuk tarian selamat dating guna menyambut tamu istimewa.
            </p>`]);
            //TARI Peule Cinde
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Peule Cinde', 'Sulawesi Tengah', '../../img/kesenian/sulawesi-tengah/tari-peule-cinde.jpg',`
            <p class="bottom-25">
                Tari Peule Cinde adalah tarian dari Sulawesi Tengah dan termasuk tarian guna menyambut tamu istimewa. Puncak acaranya ialah dengan menyebarkan bunga bagi para tamu.
            </p>`]);

            // =========================================================================================
            // PROVINSI SULAWESI TENGGARA
            // =========================================================================================

            //TARI Balumpa
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Balumpa', 'Sulawesi Tenggara', '../../img/kesenian/sulawesi-tenggara/tari-balumpa.jpg',`
            <p class="bottom-25">
                Tari Balumpa adalah tari tradisional dari Wakatobi, Sulawesi Tenggara. Tarian ini merupakan tarian pergaulan yang dipentaskan oleh penari wanita guna menyambut para tamu agung yang datang ke Wakatobi.
            </p>
            <p>
                Tari Balumpa ini termasuk salah satu tari tradisional yang cukup masyhur di Sulawesi Tenggara, terlebih lagi di daerah Wakatobi. Tarian ini banyak ditampilkan di bermacam acara seperti penyambutan tamu istimewa, pertunjukan seni, juga festival budaya.
            </p>`]);
            //TARI Dinggu
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Dinggu', 'Sulawesi Tenggara', '../../img/kesenian/sulawesi-tenggara/tari-dinggu.jpg',`
            <p class="bottom-25">
                Tari Dinggu adalah tari tradisional dari Sulawesi Tenggara. Tarian ini termasuk tarian rakyat yang mengkisahkan suasana dan aktivitas masyarakat dikala musim panen, terutama saat musim panen padi. Tari Dinggu biasanya dipentaskan oleh para penari pria atau wanita dengan memakai kostum layaknya para Petani di zaman dahulu.
            </p>
            <p>
                Tarian ini sangat terkenal di masyarakat Tolaki Sulawesi Tenggara dan banyak ditampilkan di bermacam acara seperti pesta pada panen raya, penyambutan tamu istimewa, perayaan hari-hari besar, festival kebudayaan dan lain-lain.
            </p>`]);

            // =========================================================================================
            // PROVINSI SULAWESI SELATAN
            // =========================================================================================

            //TARI Kipas
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Kipas', 'Sulawesi Selatan', '../../img/kesenian/sulawesi-selatan/tari-kipas.jpg',`
            <p class="bottom-25">
                Tari Kipas Pakarena adalah tarian tradisional dari daerah Gowa, Sulawesi Selatan. Tarian ini ditampilkan oleh penari wanita dengan berpakaian adat dan menari dengan tariannya yang khas juga menggunakan kipas sebagai pelengkap menarinya. Tarian ini sering digelar di bermacam acara adat maupun hiburan.
            </p>`]);

            // =========================================================================================
            // PROVINSI GORONTALO
            // =========================================================================================

            //TARI Polopalo
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Polopalo', 'Gorontalo', '../../img/kesenian/gorontalo/tari-polopalo.jpg',`
            <p class="bottom-25">
                Tari polo-palo adalah tarian dari Gorontalo. Tarian ini adalah tarian pergaulan yang biasa digelar oleh para remaja Gorontalo. Pada perjalanannya, tari polo-palo dibagi menjadi dua macam, yaitu tari palo-palo tradisional dan modern. Yang mana kedua macam ini mempunyai perbedaan yang jelas.
            </p>
            <p>
                Misal dari jumlah penarinya. Tari polo-palo tradisional umumnya dimainkan oleh penari tunggal yang dibarengi oleh musik yang dimainkan solo atau sendiri. Sedangkan tari polo-palo modern lebih banyak dimainkan secara berkelompok dan iringan musik yang telah diaransemen.
            </p>`]);

            // =========================================================================================
            // PROVINSI MALUKU
            // =========================================================================================

            //TARI Lenso
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Lenso', 'Maluku', '../../img/kesenian/maluku/tari-lenso.jpg',`
            <p class="bottom-25">
                Tari Lenso adalah tari tradisional dari Maluku. Tari Lenso hanya dibawakan oleh para wanita dengan menggunakan selendang atau sapu tangan sebagai atribut dan ciri khas dalam menarinya. Tarian ini cukup terkenal dan sering dipentaskan diberbagai acara seperti adat, hiburan, dan pertunjukan seni budaya.
            </p>`]);
            //TARI Cikalele
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Cikalele', 'Maluku', '../../img/kesenian/maluku/tari-cikalele.jpg',`
            <p class="bottom-25">
                Tari Cakalele adalah tari tradisional dari Provinsi Maluku. Tarian ini merupakan macam tarian perang yang sering dipentaskan dalam penyambutan tamu atau ketika pembukaan acara adat. Tidak tau kapan pertama kali tari cikalele mulai ada, yang jelas tari cikalele sekarang menjadi terkenalsebagai salah satu icon budaya Maluku.
            </p>`]);

            // =========================================================================================
            // PROVINSI MALUKU UTARA
            // =========================================================================================

            //TARI Cakalele
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Cakalele', 'Maluku Utara', '../../img/kesenian/maluku-utara/tari-cakalele.jpg',`
            <p class="bottom-25">
                Tari Cakalele adalah tarian tradisional dari Maluku berupa tari perang. Tari Cakelel adalah tarian yang pada kebiasaannya dimainkan oleh sejumlah pria, namun juga ada beberapa penari wanita sekedar sebagai pendukung.
            </p>`]);
            //TARI Nahar Ilaa
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Nahar Ilaa', 'Maluku Utara', '../../img/kesenian/maluku-utara/tari-nahar-ilaa.jpg',`
            <p class="bottom-25">
                Tari Nahar Ilaa adalah tarian dari Maluku Utara sebagai pengikat persahabatan pada saat (panas pela) persetujuan kampung guna membangun.
            </p>`]);
            //TARI Bambu Gila
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Bambu Gila', 'Maluku Utara', '../../img/kesenian/maluku-utara/tari-bambu-gila.jpg',`
            <p class="bottom-25">
                Tarian Bambu Gila adalah tarian yang dikenal sangat mistis yang ada pada daerah hutan bambu di bawah atau kaki gunung Gamalama Provinsi Maluku Utara.
            </p>`]);

            // =========================================================================================
            // PROVINSI PAPUA BARAT
            // =========================================================================================

            //TARI Perang
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Perang', 'Papua Barat', '../../img/kesenian/papua-barat/tari-perang.jpg',`
            <p class="bottom-25">
                Tari Perang adalah tari tradisional berasal dari Papua Barat. Tarian ini menyampaikan jiwa kepahlawanan dan keberanian masyarakat Papua. Biasanya tarian ini dipentaskan oleh para penari laki-laki dengan berkostum adat dan membawa senjata panah sebagai pelengkap menarinya.
            </p>`]);
            //TARI Suanggi
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Suanggi', 'Papua Barat', '../../img/kesenian/papua-barat/tari-suanggi.jpg',`
            <p class="bottom-25">
                Tari Suanggi adalah tarian tradisonal dari Papua Barat. Tarian ini menceritakan tentang seorang suami yang ditinggal istrinya meninggal dunia yang menjadi korban angi-angi (jejadian). Bila dilihat dari deskripsinya, tari suanggi merupakan bentuk ekspresi masyarakat Papua Barat mengenai kekentalan nuansa magis di daerah tersebut.
            </p>`]);

            // =========================================================================================
            // PROVINSI PAPUA
            // =========================================================================================

            //TARI Selamat Datang
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Selamat Datang', 'Papua', '../../img/kesenian/papua/tari-selamat-datang.jpg',`
            <p class="bottom-25">
                Tari Selamat Datang adalah tari tradisional dari Papua. Tarian ini biasanya dilakukan oleh para penari pria dan wanita guna menyambut tamu penting atau tamu kehormatan yang mengunjungi Papua.
            </p>
            <p>
                Tari Selamat Datang ialah salah satu tarian yang cukup terkenal di Papua. Selain gerakannya yang khas dan lincah, tentu tarian ini kaya akan arti dan nilai-nilai di dalamnya.
            </p>`]);
            //TARI Musyoh
            tx.executeSql('INSERT INTO seni_tari (nama_tarian, asal_tarian, image, konten) VALUES (?, ?, ?, ?)', ['Tari Musyoh', 'Papua', '../../img/kesenian/papua/tari-musyoh.jpg',`
            <p class="bottom-25">
                Tari Musyoh adalah tarian dari Papua yang merupakan tarian sakral ritual untuk mengusir arwah orang yang meninggal karena kecelakaan dan diyakini bahwa arwah orang yang meninggal karena kecelakaan itu tidak tenang, maka dengan digelarnya tari musyoh akan membuat arwahnya tenang.
            </p>
            <p>
                Itulah pembahasan singkat tentang jenis jenis tari tradisional Indonesia. Mulai dari tarian daerah jawa timur, tarian daerah jawa barat, tarian daerah jawa tengah, tarian daerah bali. 
            </p>`]);

        }, function(error) {
            alert('Transaction ERROR: ' + error.message);
        }, function() {
            window.localStorage.setItem('dbSeniTari', 'true');
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