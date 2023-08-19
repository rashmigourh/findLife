// cards hover

let previewContainer=document.querySelector('.products-preview');
let previewBox=document.querySelectorAll('.preview');

document.querySelectorAll('.row .cards p a').forEach(product =>{
    product.onclick = ()=>{
        previewContainer.style.display='flex';
        let name= product.getAttribute('data-name');
        previewBox.forEach(preview =>{
           let target= preview.getAttribute('data-target');
            if(name == target){
            preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
close.querySelector('.fa-xmark').onclick =() =>{
    close.classList.remove('active');
    previewContainer.style.display='none';

}
});

//contact form validation
function formValidate(){
    var mail = document.forms["myForm"]["email"].value;
    var mailformat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mailformat.test(mail)) {  
        
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }

    var phone = document.forms["myForm"]["phone"].value;
    var phoneformat= /^(\[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (phoneformat.test(phone)) {
        
    } else {
        alert("You have entered an invalid phone number! ");
        return false;
    } 
}

