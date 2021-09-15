const $=(id)=> document.getElementById(id)

const actualizarTextos=()=>{
$('top-text').textContent=$('top-text-input').value
$('bottom-tex').texContent=$('bottom-text-input').value
}
const actualizarFuente=()=>{
    const fuente = $('text-font-select').value

    $('top-text').style.fontFamily=fuente
    $('bottom.text').style.fontFamily=fuente
}

const incializarTexto=()=>{
$('top-text-input').addEventListener('input',actualizarTextos)
$('bottom-text-input').addEventListener('input',actualizarTextos)
$('text-font-select').addEventListener('change',actualizarFuente)
}

const incializar=()=>{
    incializarTexto()
}
window.onload=incializar

