var storage = window.localStorage;
$('#toggle-dark-theme').click(function(e){
    e.preventDefault();

    if(storage.getItem('theme') == "dark"){
        storage.removeItem('theme');
    }
    else{
        storage.setItem('theme', 'dark');
    }
})
if(storage.getItem('theme') != "dark"){
    $('body').removeClass('theme-dark');
    $('body').addClass('theme-light');
}
else{
    $('body').removeClass('theme-light');
    $('body').addClass('theme-dark');
}