const form=document.getElementById('form');
const user=document.getElementById('user');
const use=document.getElementById('use');
const uer=document.getElementById('uer');
form.addEventListener('submit', e =>{

  e.preventDefault();
  
  checkInputs();

});
function checkInputs(){
  const userv=user.value.trim();
  const passv=use.value.trim();
  const pasv=uer.value.trim();
  
  if(userv === ''){
    setErrorFor(user,'username cannot be blank');
  }
  else{
    setSuccessFor(user);
  }
  if (pasv === '') {
    setErrorFor(uer, 'username cannot be blank');
  }
  else {
    setSuccessFor(uer);
  }
  if(passv === ''){
    setErrorFor(use,'password cannot be blank')
  }
  else {
    setSuccessFor(use)
  }
  


}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control fail';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

user.addEventListener('keyup',a =>{
  
  matter()
});

function matter(){
  const userv = user.value.trim();
  const passv = use.value.trim();
  const pasv = uer.value.trim();
  
  
  if(userv !== ''){
    setSuccessFor(user);
  }
  else{
    setErrorFor(user);
  }

}


use.addEventListener('keyup', b =>{
  
  back()
});

function back(){
    const userv = user.value.trim();
  const passv = use.value.trim();
  const pasv = uer.value.trim();
  
    if(passv !== ''){
    setSuccessFor(use);
  }
  else{
    setErrorFor(use);
  }
  
  
}
uer.addEventListener('keyup', a => {

  bak()
});

function bak() {
  const userv = user.value.trim();
  const passv = use.value.trim();
  const pasv = uer.value.trim();

  if (pasv !== '') {
    setSuccessFor(uer);
  }
  else {
    setErrorFor(uer);
  }


}
