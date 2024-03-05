const form = document.getElementById("form-numeros")
const numeroDigitado1 = document.getElementById('numero1');
const numeroDigitado2 = document.getElementById('numero2');


function comparaNumeros () {
    return numeroDigitado2.value > numeroDigitado1.value;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `sucesso! O número ${numeroDigitado2.value} é maior do que o número ${numeroDigitado1.value}`


    formValido = comparaNumeros(numeroDigitado2.value);
    if(formValido) {
        const containerMensagem = document.querySelector('.mensagem-sucesso');
        containerMensagem.innerHTML= mensagemSucesso;
        containerMensagem.style.display = 'block';

        numeroDigitado1.value = '';
        numeroDigitado2.value = '';
    }else{
        numeroDigitado1.style.border = ' 1px solid red'
        document.querySelector('.error-msg').style.display= 'block';
    }
})

numeroDigitado2.addEventListener('keyup', function(e) {
    formValido= comparaNumeros(e.target.value)

    if(!formValido) {
        numeroDigitado2.style.border = ' 1px solid red'
        document.querySelector('.error-msg').style.display= 'block';
    }else {
        numeroDigitado2.style= '';
        document.querySelector('.error-msg').style.display= 'none';
    }
})
