function toastProcessing(){
    $('#toast-processing').addClass('c-toast-show');
}
function toastProcessingHide(){
    $('#toast-processing').removeClass('c-toast-show');
}

function toastError(){
    $('#toast-error').addClass('c-toast-show');
    setTimeout(function(){
        $('#toast-error').removeClass('c-toast-show');
    }, 2000)
}