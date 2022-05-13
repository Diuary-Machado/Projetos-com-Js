const usuario = {
    nomeUsuario: "",
    emailUsuario: "",
    senhaUsuario: "",
}

const usuarios = [];


function submit() {
    validationforUsuario();
    saveUsuario();
    resetParamsForUsuario();

}

function validationforUsuario() {

}

function getParamsForUsuario() {
    usuario.nomeUsuario = "";
    usuario.senhaUsuario = "";
    usuario.emailUsuario = "";
}

function resetParamsForUsuario() {
    usuario = {
        nomeUsuario: "",
        emailUsuario: "",
        senhaUsuario: "",
    }
}

function saveUsuario(usuario) {
    usuarios.push(usuario);
}