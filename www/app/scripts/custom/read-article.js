var storage = window.localStorage;

var check = storage.getItem('read_article');

if(check == ""){
    storage.setItem('read_article', 1);
}
else{
    storage.setItem('read_article', Number(check)+1);
}