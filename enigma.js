//Mensagem de alerta ao clicar em dica

function dica1(){
    alert("As vezes só precisamos ver as coisas de outra forma!");
}

function dica2(){
    alert("Cifra de César!");
}

function dica3(){
    alert("Um computador entenderia!");
}

function dica4(){
    alert("Um código antigo ainda traz respostas atuais!");
}

function dica5(){
    alert("Te garanto que a resposta é mais simples do que estudar os átomos.");
}

//Validando a resposta

function resposta1(){
    const resposta1 = window.prompt();
    if(resposta1 == "nao os vejo"){
        window.open("enigma_2.html");
    }else{
        alert("Resposta Errada!");
    }
}

function resposta2(){
    const resposta2 = window.prompt();
    if(resposta2 ==  "mas posso ouvi los"){
        window.open("enigma_3.html");
    }else{
        alert("Resposta Errada!");
    }
}

function resposta3(){
    const resposta3 = window.prompt();
    if(resposta3 ==  "querem me machucar"){
        window.open("enigma_4.html");
    }else{
        alert("Resposta Errada!");
    }
}

function resposta4(){
    const resposta4 = window.prompt();
    if(resposta4 ==  "estao se afastando"){
        window.open("enigma_5.html");
    }else{
        alert("Resposta Errada!");
    }
}

function resposta5(){
    const resposta5 = window.prompt();
    if(resposta5 ==  "preciso escapar"){
        window.open("fim.html");
    }else{
        alert("Resposta Errada!");
    }
}