class validator {

constructor() {
    this.validations = [
        'data-min-length', 
    ]
}

//iniciar a validação de todos os campos
validate(form) {

    //pegar os inputs
    let imputs = form.getElementsByTagName('input');

    //transformar numa HTMLcollection -> array
    let inputsarray = [...inputs];

    //loop nos inputs e validação mediante ao que for encontrado
    inputsArray.forEach(function() {

        //loop em todas as validações
        for (let i=0; this.validations.length> i; i++){
            //verifica se  validação atual existe no input
            if(input.getAttribute(this.validations[i]) != null) {

                let method = this.validations[i].replace('data-', '').replace('-', '');

                let value = input.getAttribute(this.validations[i]);

                this[method](input,value);
              
            }
        } 

    }, this)

}

minlength(input, minvalue) {

let inputLength = input.value.length;

let errorMessage = 'O campo precisa ter pelo menos ${minValue} caracteres';

if(inputLength < minValue) {
    this.printMessage(input, errorMessage);
}

}

printMessage(input, msg){

let template = document.querySelector('.error-validation').cloneNode(true);

template.textContent = msg;

let inputParent =  input.parentNode;

template.classlist.remove('template');

inputParent.appendChild(template);

}

}



let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');



// fazer botão funcionar
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);

});