function padrao(){
    if(localStorage.getItem("modoEscuro") == null) localStorage.setItem("modoEscuro",esc.checked);
    else {
        let c = localStorage.getItem("modoEscuro");
        if(c == "true") document.getElementById("esc").checked = c;
        escuro(document.getElementById("esc"));
    }
}

function cadastrar() {

    document.getElementById("msg").style.color="darkred";
    const nome = document.dados.nome;
    const regex_nome = /[0-9]/;

    if((nome.value=="") || (nome.value.length < 3) || (regex_nome.test(nome))) {
        document.getElementById("msg").textContent="Preencha campo NOME corretamente!";
        document.dados.nome.focus();
        return false;
    }

    if (document.dados.idade.value < 18 ) {
        document.getElementById("msg").textContent="Somente maiores de 16 anos podem se cadastrar!";
        document.dados.idade.focus();
        return false;
    }

    if((document.dados.email.value=="") || (document.dados.email.value.indexOf('@')==-1) || (document.dados.email.value.indexOf('.')==-1) ) {
        document.getElementById("msg").textContent="Preencha campo E-MAIL corretamente!";
        document.dados.email.focus();
        return false;
    }

document.getElementById("msg").textContent= " ";
return false;
}

function escuro(a){
    let b = document.body;
    if(a.checked){
        b.style.backgroundColor = "rgba(22,22,22,0.75)";
        localStorage.removeItem("modoEscuro");
        localStorage.setItem("modoEscuro",true);
    }
    else{
        b.style.backgroundColor = "rgba(224,242,224,0.85)";
        localStorage.removeItem("modoEscuro");
        localStorage.setItem("modoEscuro",false);
    }
}