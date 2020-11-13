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
    const nome = document.getElementById("nome");
    const regex_nome = /[0-9]/;

    if((nome.value=="") || (nome.value.length < 3) || (regex_nome.test(nome.value))) {
        document.getElementById("msg").textContent="Digite um nome válido";
        document.dados.nome.focus();
        return false;
    }

    if (document.dados.idade.value < 16 ) {
        document.getElementById("msg").textContent="Somente maiores de 16 anos podem se cadastrar!";
        document.dados.idade.focus();
        return false;
    }

    if((document.dados.email.value=="") || (document.dados.email.value.indexOf('@')==-1) || (document.dados.email.value.indexOf('.')==-1) ) {
        document.getElementById("msg").textContent="Insira um email válido";
        document.dados.email.focus();
        return false;
    }

    if(document.dados.cor.value == '#4a412a'){
        /* O motivo pelo qual não se pode selecionar essa cor(#4a412a) é porque ela é a cor mais feia do mundo:
        https://gq.globo.com/Prazeres/Design/noticia/2016/06/cor-mais-feia-do-mundo-e-revelada-e-o-fato-vai-muito-alem-da-curiosidade.html
        http://www.ideafixa.com/oldbutgold/cor-mais-feia-mundo
        */
        document.getElementById("msg").textContent="Selecione uma cor!";
        document.dados.cor.focus();
        return false;
    }

document.getElementById("msg").textContent= " ";
return true;
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