function validaInscricao(){

    if(document.formInscrever.txtnome.value == ""){

        alert("Informe o nome !");
        document.formInscrever.txtnome.focus();
        return false;
    }

    if(document.formInscrever.txtfone.value == ""){

        alert("Informe o telefone !");
        document.formInscrever.txtfone.focus();
        return false;
    }
    
    
    var email = document.formInscrever.txtemail.value;
    var expRegEmail = RegExp("^[a-z]{1,100}[@]{1}[a-z]{1,5}[.]{1}[c]{1}[o]{1}[m]{1}$");
    if(!expRegEmail.test(email)){
        alert("Digite corretamente o email");
        document.formInscrever.txtemail.focus();
        return false;
    }

    var comentario = document.formInscrever.texto.value;
    var expRegComentatio = RegExp("^[a-z]{15}$");
    if(!expRegComentatio.test(comentario)){

        alert("Informe pelo menos 15 caracteres no comentario");
        document.formInscrever.texto.focus();
        return false;
    }

    if(document.formInscrever.selfavorito.value == ""){

        alert("informe a equipe favorita");
        document.formInscrever.selfavorito.focus();
        return false;

    }

    return true;
}
