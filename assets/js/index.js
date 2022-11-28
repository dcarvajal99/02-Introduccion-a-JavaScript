const calcular = () => {
    const cantidad = document.querySelector('#cantidad').value;
    const color = document.querySelector('input[name="color-seleccionado"]:checked').value;
    const precio = document.querySelector('.precio').innerHTML;
/*     const imagenNotebook = document.querySelector('.imagen-notebook'); */

    if (cantidad != '' && color != ''){
        document.querySelector('.resultado').innerHTML = cantidad * precio;
        document.querySelector('.cantidad').innerHTML = cantidad;
        document.querySelector('.color').innerHTML = color;

        /* atributo de imagen */
        document.querySelector('#imagen-notebook').src="./assets/img/"+color+".png";
    }else{
        alert('Complete todos los campos.')
    }
    console.log(color)




};
document.querySelector('.total').addEventListener('click', calcular);

