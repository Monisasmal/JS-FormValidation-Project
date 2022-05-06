console.log("this is a project");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let  validname = false;
let  validemail = false;
let  validphone = false;
$('#success').hide();
$('#failure').hide();


//console.log(name,email,phone);
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log ('Your name is valid');
        name.classList.remove('is-invalid');
        validname = true;
    }
    else{
        console.log('Your name is Invalid');
        name.classList.add('is-invalid');
        validname = false;
    }
})
email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    
    let regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log ('Your name is valid');
        email.classList.remove('is-invalid');
        validemail = true;
    }
    else{
        console.log('Your name is Invalid');
        email.classList.add('is-invalid');
        validemail = false;
    }
})
phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log ('Your name is valid');
        phone.classList.remove('is-invalid');
        validphone = true;
    }
    else{
        console.log('Your name is Invalid');
        phone.classList.add('is-invalid');
        validphone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
  console.log('You clicked on submit');
  console.log('validname, validemail, validphone');

  if(validname && validemail && validphone){
    let  failure = document.getElementById('failure');
   console.log('phone, email and user are valid. submitting the form');
   let  success = document.getElementById('success');
  success.classList.add('show');
  //failure.classList.remove('show');   
  //$('failure').alert('close');
  $('#failure').hide();
  $('#success').show();
  }
  else{
    console.log('phone, email and user are not  valid. Hence not submitting the form. Please correct it');
    let  failure = document.getElementById('failure');
    failure.classList.add('show');
    //success.classList.remove('show'); 
    //$('success').alert('hide'); 
    $('#success').hide();
    $('#failure').show();
  }
 
})