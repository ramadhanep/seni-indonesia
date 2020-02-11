setTimeout(function(e){
    $('.loader-main').removeClass('loader-inactive');
}, 1)
var db = null;

var dbQuestions = window.localStorage.getItem('dbQuestions');

if(dbQuestions != "true"){
    document.addEventListener('deviceready', function() {
        db = window.sqlitePlugin.openDatabase({
            name: 'seni-indonesia.db',
            location: 'default',
        });

        db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS questions (id integer primary key autoincrement, question text, a text, b text, c text, d text, answer text, category text)');

            tx.executeSql('DELETE FROM questions');
            tx.executeSql('DELETE FROM sqlite_sequence where name="questions"');

            // SENI TARI

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Tari saman berasal dari daerah....', 'Aceh', 'Sumatera Barat', 'Bali', 'Sumatera Utara', 'Aceh', 'Seni Tari']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Dibawah ini yang merupakan tarian yang berasal dari Bali adalah....', 'Tari Batunganga', 'Tari Bedhaya Ketawang', 'Tari Bidadari', 'Tari Barong', 'Tari Barong', 'Seni Tari']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Tari ini merupakan pertunjukan tarian seni khas Bali, yang menceritakan mengenai Ramayana dan dimainkan oleh penari laki-laki. Tarian apakah yang dimaksud....', 'Tari Badui', 'Tari Baris', 'Tari Kecak', 'Tari Baksa Kembang', 'Tari Kecak', 'Seni Tari']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Tarian yang menceritakan para gadis desa yang sedang mandi dan mengambil air bersama-sama di air terjun Ciereng dengan menggunakan buyung (kendi) yang berasal dari Jawa Barat. Tarian apakah yang dimaksud....', 'Tari Buyung', 'Tari Campak', 'Tari Cikalele', 'Tari Didong', 'Tari Buyung', 'Seni Tari']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Tari cakalele berasal dari daerah....', 'Sulawesi Utara', 'Kalimantan Barat', 'Bali', 'Maluku Utara', 'Maluku Utara', 'Seni Tari']);

            // SENI RUPA

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Suatu cabang seni yang menghasilkan karya seni di mana bentuk dan kualitasnya dapat dirasakan oleh indera manusia, khususnya indera penglihatan dan indera peraba disebut....', 'Seni Rupa', 'Seni Tari', 'Seni Musik', 'Rumah Adat', 'Seni Rupa', 'Seni Rupa']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Salah satu contoh dari seni rupa murni adalah....', 'Batik', 'Anyaman', 'Lukisan', 'Poster', 'Lukisan', 'Seni Rupa']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Seni rupa memiliki banyak unsur, manakah unsur yang benar dari seni rupa....', 'Unsur Titik', 'Unsur Kayu', 'Unsur Teknologi', 'Unsur Pola', 'Unsur Titik', 'Seni Rupa']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Pakaian merupakan salah satu contoh seni rupa....', 'Terapan', 'Murni', 'Indah', 'Tiga Dimensi', 'Terapan', 'Seni Rupa']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Ukiran pada kayu merupakan salah satu contoh seni rupa....', 'Terapan', 'Tiga Dimensi', 'Indah', 'Murni', 'Murni', 'Seni Rupa']);

            // Rumah Adat

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Di bawah ini manakah yang meruapakan rumah adat Provinsi Jawa Tengah...', 'Joglo', 'Kebaya', 'Bangsal Kencono', 'Selaso Jatuh Kembar', 'Joglo', 'Rumah Adat']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Rumah adat Panjang berasal dari Provinsi...', 'Jawa Timur', 'Riau', 'Kalimantan Barat', 'Kalimantan Selatan', 'Kalimantan Barat', 'Rumah Adat']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Rumah adat Bolon berasal dari Provinsi...', 'Sumatera Barat', 'Sulawesi Utara', 'Sumatera Utara', 'Bangka Belitung', 'Sumatera Utara', 'Rumah Adat']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Rumah adat ini, masih mudah dapat kita jumpai di beberapa daerah perosok ujung kulon dan beberapa di pedesaan di daerah Banten, Rumah adat yang dimaksud adalah...', 'Badui', 'Rakyat', 'Nowou Sesat', 'Belah Bubung', 'Badui', 'Rumah Adat']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Rumah yang berasal dari Provinsi Jawa Barat adalah....', 'Lamin', 'Sunda', 'Buton', 'Sasadu', 'Sunda', 'Rumah Adat']);

            // Alat Musik Tradisional

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Berasal dari manakah alat musik Gendang Panjang...', 'Kepulauan Riau', 'Jawa Barat', 'Banten', 'Sumatera Barat', 'Kepulauan Riau', 'Alat Musik Tradisional']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Serunai merupakan alat musik yang berasal dari...', 'Kalimantan Timur', 'Sulawesi Utara', 'Nusa Tenggara Timur', 'Nusa Tenggara Barat', 'Nusa Tenggara Barat', 'Alat Musik Tradisional']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Di bawah ini yang bukan merupakan alat musik berasal dari Jawa Barat adalah...', 'Angklung', 'Kulanter', 'Rebab', 'Accordion', 'Accordion', 'Alat Musik Tradisional']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Salah satu contoh alat musik yang berasal dari Provinsi DKI Jakarta adalah....', 'Gamelan', 'Gendang Melayu', 'Tehyan', 'Bonang', 'Tehyan', 'Alat Musik Tradisional']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Japen merupakan alat musik yang berasal dari....', 'Kalimantan Tengah', 'Maluku Utara', 'Nusa Tenggara Timur', 'Bali', 'Kalimantan Tengah', 'Alat Musik Tradisional']);

            // Pakaian Adat

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Pakaian adat Baju Cele berasal dari Provinsi..', 'Maluku', 'Maluku Utara', 'Sulawesi Tenggara', 'Sulawesi Barat', 'Maluku', 'Pakaian Adat']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Pakaian adat Pesa`an berasal dari Provinsi..', 'Sumatera Selatan', 'Jambi', 'Jawa Timur', 'Bali', 'Jawa Timur', 'Pakaian Adat']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Pakaian adat Ulee Balang berasal dari Provinsi..', 'Nangroe Aceh Darussalam', 'Jambi', 'Riau', 'Sumatera Barat', 'Nangroe Aceh Darussalam', 'Pakaian Adat']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Pakaian adat Tradisional Kesatrian berasal dari Provinsi..', 'Jawa Barat', 'Jawa Timur', 'Banten', 'DI Yogyakarta', 'DI Yogyakarta', 'Pakaian Adat']);

            tx.executeSql('INSERT INTO questions (question, a, b, c, d, answer, category) VALUES (?, ?, ?, ?, ?, ?, ?)', ['Pakaian adat Yulang Bawang berasal dari Provinsi..', 'Banten', 'Lampung', 'Riau', 'Kepulauan Riau', 'Lampung', 'Pakaian Adat']);

        }, function(error) {
            alert('Transaction ERROR: ' + error.message);
        }, function() {
            window.localStorage.setItem('dbQuestions', 'true');
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
