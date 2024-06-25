const uid=document.getElementById("uid");

const email=document.getElementById("email");
const pwd=document.getElementById("pwd");
const pwd2=document.getElementById("pwd2");
const nome=document.getElementById("nome");

const data=document.getElementById("data");



function validate(item){
    item.setCustomValidity('');
    item.checkValidity();

    if(item == pwd2){
        if(item.value == pwd.value){
            item.setCustomValidity('');
        }else{
            item.setCustomValidity('TU erro a senha');
        }
    }


    

    if (item == data){
      let hoje = new Date(); //obtém data atual
      let dnasc = new Date(data.value);

      let valorIdade = hoje.getFullYear() - dnasc.getFullYear()
      let dm = hoje.getMonth() - dnasc.getMonth();

      if(dm < 0 || 0 && hoje.getDate() < dnasc.getDate()){
        valorIdade--;
      }

      
      if (valorIdade <= 0){
        item.setCustomValidity("O servidor deve durar pelo meno 1 Dia")
        
      }
    }

}


data.addEventListener("input",  function() {validate(nasc)});

pwd.addEventListener("input", function() { validate(pwd)});
pwd2.addEventListener("input", function() { validate(pwd2) });



pwd.addEventListener('invalid', msgPwd)



function msgPwd(){
    if(pwd.value == "")
    {
        pwd.setCustomValidity('Não pode fica em branco');
    }
    else
    {
        pwd.setCustomValidity('Precisa ter no minimo 6 caracteres, 1Maiusculo 1 minusculo e 1 numero');
    }
}







