
var storage = window.localStorage;

var logged = storage.getItem('logged');
var alertLogged = storage.getItem('alertLogged');


function logout(){
    storage.clear();
    window.location = "login.html";
}

function btnEditProfile(){
    $('#closeMenuEditProfile').click();
    toastProcessing();

    setTimeout(function(){
        toastProcessingHide();
        var nama_lengkap = $('#input-nama-lengkap').val();
        var status = $('#input-status').val();

        if(nama_lengkap == "" || status == ""){
            toastError();
        }
        else{
            storage.setItem('nama_lengkap', nama_lengkap);
            storage.setItem('status', status);

            location.reload();
        }
    }, 1000)
}

function load(){
    if(logged == "true"){

        var nama_lengkap = storage.getItem('nama_lengkap');
        var status = storage.getItem('status');
        var read_article = storage.getItem('read_article');
        
        var split_name = nama_lengkap.split(' ');
        
        $('#namaDepan').html(split_name[0]);
        $('#namaLengkap').html(nama_lengkap);
        $('#namaLengkapMenu').html(nama_lengkap);

        $('#input-nama-lengkap').val(nama_lengkap);
        $('#input-status').val(status);
    
        $('#bioStatus').html(status);

        if(read_article){
            $('#bioReadArticle').html(read_article);
        }
        else{
            $('#bioReadArticle').html('0');
        }
    
        $('#profile-image').css('background-image', 'url(img/profile-default/profile-4.jpg)');
        setInterval(function(){
            $('#profile-image').css('background-image', 'url(img/profile-default/profile.jpg)');
        }, 5000)
        setInterval(function(){
            $('#profile-image').css('background-image', 'url(img/profile-default/profile-2.jpg)');
        }, 10000)
        setInterval(function(){
            $('#profile-image').css('background-image', 'url(img/profile-default/profile-3.jpg)');
        }, 15000)
        setInterval(function(){
            $('#profile-image').css('background-image', 'url(img/profile-default/profile-4.jpg)');
        }, 20000)
        
        if(alertLogged == "true"){
            setTimeout(function(){
                $('#menu-welcome-open').click();
            }, 500)
    
            storage.removeItem('alertLogged');
        }
    }
    else{
        window.location = "login.html";
    }
}

load();