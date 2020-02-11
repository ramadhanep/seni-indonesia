setTimeout(function(e){
    $('.loader-main').removeClass('loader-inactive');
}, 1)
var db = null;

var dbQuotes = window.localStorage.getItem('dbQuotes');

if(dbQuotes != "true"){
    document.addEventListener('deviceready', function() {
        db = window.sqlitePlugin.openDatabase({
            name: 'seni-indonesia.db',
            location: 'default',
        });

        db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS quotes (id integer primary key autoincrement, quotes text, pengarang text)');

            tx.executeSql('DELETE FROM quotes');
            tx.executeSql('DELETE FROM sqlite_sequence where name="quotes"');

            tx.executeSql('INSERT INTO quotes (quotes, pengarang) VALUES (?, ?)', ['Penguatan budaya literasi adalah kunci memajukan negeri ini.', 'Lenang Manggala - Founder Gerakan Menulis Buku Indonesia']);

            tx.executeSql('INSERT INTO quotes (quotes, pengarang) VALUES (?, ?)', ['Membaca adalah melawan, menulis menciptakan perubahan, dan terorisme adalah pecundang.', 'Lenang Manggala - Founder Gerakan Menulis Buku Indonesia']);
            
            tx.executeSql('INSERT INTO quotes (quotes, pengarang) VALUES (?, ?)', ['Dalam banyak budaya, mengumpat dianggap sesuatu yang tidak sopan.', "Maisie Junardy, Man's Defender"]);

            tx.executeSql('INSERT INTO quotes (quotes, pengarang) VALUES (?, ?)', ['Kebudayaan yang benar dilahirkan di alam, sederhana, rendah hati, dan murni.', 'Masanobu Fukuoka, The One-Straw Revolution']);

            tx.executeSql('INSERT INTO quotes (quotes, pengarang) VALUES (?, ?)', ['Mengenalkan dan mempertahankan budaya itu penting, supaya manusia bisa mengenal dirinya sendiri dan lebih saling menghargai, dan sebagainya.', 'Maisie Junardy, Man`s Defender']);
            
            tx.executeSql('INSERT INTO quotes (quotes, pengarang) VALUES (?, ?)', ['Menurutku, keunikan budaya harus dibagikan supaya ada pemahaman umum bahwa keunikan itu bukan sesuatu untuk ditakuti, bukan sesuatu yang harus dihancurkan...', 'Maisie Junardy, Man`s Defender']);

            tx.executeSql('INSERT INTO quotes (quotes, pengarang) VALUES (?, ?)', ['Kurasa, buat sebagian orang, seni menjadi bagian penting yang sulit dipisahkan dari diri mereka. Seni juga bentuk pelarian, cara untuk melampiaskan emosi. Mungkin karena itulah, seni terkadang bisa mengubah orang. (Annalise)', 'Winna Efendi, Refrain']);

            tx.executeSql('INSERT INTO quotes (quotes, pengarang) VALUES (?, ?)', ['Budaya tidak pernah berakhir, selalu ada yang baru. Selalu ada bentuk kesenian yang baru, gerak tari, lagu, lukisan. Budaya adalah kisah tanpa akhir...', 'Maisie Junardy, Man`s Defender']);


        }, function(error) {
            alert('Transaction ERROR: ' + error.message);
        }, function() {
            window.localStorage.setItem('dbQuotes', 'true');
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
