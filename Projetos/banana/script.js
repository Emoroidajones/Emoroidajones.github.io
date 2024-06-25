


alert("Em Uma cidade, Um macaco louco revoltado com a humanidade Resolve destrui-la, Para isso ele Precisara Juntar  512.000.000.000.000.000.000.000.000,00 , AJUDE-0")
let estoqueBananas = 951200000000000000000000000000;



let valorPorClick = 1;
let valorPorSegundo = 0;








//Variaveis por estrutura


//Objeto que cada estrutura tem q ter

let cursor = {
    preco: 15,
    quantidade: 0,
    segundo: 0.1,
    //tem q ser o mesmo do id la do html
    idPreco: "precoCursor"

}


//VAriavel do onClick pra chama no html
function Bcursor() {
    //Pra chama a funcao coloca o preco inicial e o objeto
    AumentaProducao(15, cursor)
    //Mesmo q ja tenha  o preco tem q passar dps o preco inicial se n Perde ele
}
//exibir o preco no html
document.getElementById(cursor.idPreco).textContent = cursor.preco





let macaco = {
    preco: 100,
    quantidade: 0,
    segundo: 1,
    idPreco: "precoMacaco"
};





function Bmacaco() {
    AumentaProducao(100, macaco)
}
document.getElementById(macaco.idPreco).textContent = macaco.preco





let bananeira = {
    preco: 1100,
    quantidade: 0,
    segundo: 8,
    idPreco: "precoBananeira"
};




function Bbananeira() {
    AumentaProducao(1100, bananeira)
}
document.getElementById(bananeira.idPreco).textContent = bananeira.preco


let esmerald = {
    preco: 12100,
    quantidade: 0,
    segundo: 47,
    idPreco: "precoEsmerald"
};




function Besmerald() {
    AumentaProducao(12100, esmerald)
}
document.getElementById(esmerald.idPreco).textContent = esmerald.preco


let box = {
    preco: 130000,
    quantidade: 0,
    segundo: 260,
    idPreco: "precoBox"

}

function Bbox() {
    AumentaProducao(130000, box)
}
document.getElementById(box.idPreco).textContent = box.preco



let banco = {
    preco: 1400000,
    quantidade: 0,
    segundo: 1400,
    idPreco: "precoBanco"

}

function Bbanco() {
    AumentaProducao(1400000, banco)
}
document.getElementById(banco.idPreco).textContent = banco.preco

let templo = {
    preco: 20000000,
    quantidade: 0,
    segundo: 7800,
    idPreco: "precoTemplo"

}

function Btemplo() {
    AumentaProducao(20000000, templo)
}
document.getElementById(templo.idPreco).textContent = templo.preco


let feitico = {
    preco: 330000000,
    quantidade: 0,
    segundo: 44000,
    idPreco: "precoFeitico"

}

function Bfeitico() {
    AumentaProducao(330000000, feitico)
}
document.getElementById(feitico.idPreco).textContent = feitico.preco









function calcularNovoPreco(precoInicial, quantidadeAtual, taxaCrescimento = 1.15) {
    return precoInicial * Math.pow(taxaCrescimento, quantidadeAtual);
}







function AumentaProducao(inicial, objeto) {

    let precoItem = objeto.preco;
    let quantidadeItem = objeto.quantidade;



    console.log(inicial, precoItem, quantidadeItem,);

    if (precoItem <= estoqueBananas) {
        console.log("to aqui")
        estoqueBananas -= precoItem;
        quantidadeItem += 1;

        precoItem = calcularNovoPreco(inicial, quantidadeItem);

        objeto.quantidade = quantidadeItem;
        objeto.preco = Math.ceil(precoItem);


        console.log("quantidade " + quantidadeItem);
        console.log("preco " + precoItem);




        document.getElementById(objeto.idPreco).textContent = objeto.preco
        atualizarBananas();
    }






}


function ProduzirBananas() {
    estoqueBananas += valorPorClick;
    atualizarBananas();
    console.log(estoqueBananas)
}



function CalcularValorPorSegundo() {
    valorPorSegundo = 0; // resetar o valor
    for (let i = 0; i < estruturas.length; i++) {
        valorPorSegundo += estruturas[i].segundo * estruturas[i].quantidade;
    }

}


setInterval(adicionarValorPorSegundo, 1000);

function adicionarValorPorSegundo() {
    CalcularValorPorSegundo();
    estoqueBananas += valorPorSegundo;
    atualizarBananas();
}




let estruturas = [


]


function atualizarBananas() {


    document.getElementById('tProducao').innerHTML = "Bananas Por Click: " + valorPorClick;
    document.getElementById('BananaC').innerHTML = "Bananas: " + Math.floor(estoqueBananas);
    let arredondadoNumero = parseFloat(valorPorSegundo.toFixed(3));
    document.getElementById('BananaSegundo').innerHTML = "Bananas second: " + arredondadoNumero;

}

atualizarBananas()




////////////

//UPGRADES






estruturas.push(cursor)
estruturas.push(macaco)
estruturas.push(bananeira)
estruturas.push(esmerald)
estruturas.push(box)
estruturas.push(banco)
estruturas.push(templo)
estruturas.push(feitico)








function update(time) {
    lastTime = time;
    let deltaTime = time - lastTime;





    //Aqui vc faz a verificação para saber se deve criar o botao de upgrade

    if (estoqueBananas >= valorUpgradeC && document.getElementById("BotoesUpC1").style.display == 'none') {
        //estoqueBananas =
        document.getElementById("BotoesUpC1").style.display = 'flex'



        console.log(cursor)
    }


    // 
    if (estoqueBananas >= valorUpgradeM && document.getElementById("BotoesUpM1").style.display == 'none') {
        document.getElementById("BotoesUpM1").style.display = 'flex'

        console.log("MAcaco" + estruturas)
    }

    // 
    if (estoqueBananas >= valorUpgradeB && document.getElementById("BotoesUpB1").style.display == 'none') {
        document.getElementById("BotoesUpB1").style.display = 'flex'


    }


    if (estoqueBananas >= valorUpgradeE && document.getElementById("BotoesUpE1").style.display == 'none') {
        document.getElementById("BotoesUpE1").style.display = 'flex'


    }

    if (estoqueBananas >= valorUpgradeBC1 && document.getElementById("BotoesUpBC1").style.display == 'none') {
        document.getElementById("BotoesUpBC1").style.display = 'flex'


    }

    if (estoqueBananas >= valorUpgradeT1 && document.getElementById("BotoesUpT1").style.display == 'none') {
        document.getElementById("BotoesUpT1").style.display = 'flex'


    }

    if (estoqueBananas >= valorUpgradeF1 && document.getElementById("BotoesUpF1").style.display == 'none') {
        document.getElementById("BotoesUpF1").style.display = 'flex'


    }





    requestAnimationFrame(update);
}



requestAnimationFrame(update);



//todo upgrade tem uma função para ser chamada no onclick no modelo abaixo
valorUpgradeC = 100
function upaCursor() {
    if (estoqueBananas >= valorUpgradeC) {
        Upgrade(cursor, valorUpgradeC)
        valorPorClick = valorPorClick * 2
        document.getElementById("BotoesUpC1").style.display = 'none'
        valorUpgradeC = valorUpgradeC * 5
        document.getElementById("precoUpC").innerHTML = "x2 " + valorUpgradeC


        console.log(i)

    }
}


valorUpgradeM = 100
function upaMacaco() {
    if (estoqueBananas >= valorUpgradeM) {
        Upgrade(macaco, valorUpgradeM)

        document.getElementById("BotoesUpM1").style.display = 'none'
        valorUpgradeM = valorUpgradeM * 5
        document.getElementById("precoUpM").innerHTML = "x2 " + valorUpgradeM
    }

}

valorUpgradeB = 100
function upaBananeira() {
    if (estoqueBananas >= valorUpgradeB) {
        Upgrade(macaco, valorUpgradeB)

        document.getElementById("BotoesUpB1").style.display = 'none'
        valorUpgradeB = valorUpgradeB * 5
        document.getElementById("precoUpB").innerHTML = "x2 " + valorUpgradeB
    }

}


valorUpgradeE = 100
function upEsmerald() {
    if (estoqueBananas >= valorUpgradeE) {
        Upgrade(macaco, valorUpgradeE)

        document.getElementById("BotoesUpE1").style.display = 'none'
        valorUpgradeE = valorUpgradeE * 5
        document.getElementById("precoUpE").innerHTML = "x2 " + valorUpgradeE
    }

}


valorUpgradeB2 = 100
function upBox() {
    if (estoqueBananas >= valorUpgradeB2) {
        Upgrade(macaco, valorUpgradeB2)

        document.getElementById("BotoesUpB2").style.display = 'none'
        valorUpgradeB2 = valorUpgradeB2 * 5
        document.getElementById("precoUpB2").innerHTML = "x2 " + valorUpgradeB2
    }

}



valorUpgradeBC1 = 100
function upaBanco() {
    if (estoqueBananas >= valorUpgradeBC1) {
        Upgrade(macaco, valorUpgradeBC1)

        document.getElementById("BotoesUpBC1").style.display = 'none'
        valorUpgradeBC1 = valorUpgradeBC1 * 5
        document.getElementById("precoUpBC1").innerHTML = "x2 " + valorUpgradeBC1
    }

}




valorUpgradeT1 = 100
function upaTemplo() {
    if (estoqueBananas >= valorUpgradeT1) {
        Upgrade(macaco, valorUpgradeT1)

        document.getElementById("BotoesUpT1").style.display = 'none'
        valorUpgradeT1 = valorUpgradeT1 * 5
        document.getElementById("precoUpT1").innerHTML = "x2 " + valorUpgradeT1
    }

}

valorUpgradeF1 = 100
function upaFeitico() {
    if (estoqueBananas >= valorUpgradeF1) {
        Upgrade(macaco, valorUpgradeF1)

        document.getElementById("BotoesUpT1").style.display = 'none'
        valorUpgradeF1 = valorUpgradeF1 * 5
        document.getElementById("precoUpF1").innerHTML = "x2 " + valorUpgradeF1
    }

}






function Upgrade(estrutura, valorup) {
    console.log("Fui aqui")

    console.log(estrutura)
    estrutura.segundo = estrutura.segundo * 2;
    estoqueBananas -= valorup

    adicionarValorPorSegundo();
    console.log(estrutura)

}



























numeroPesquisa = 0


function fechaJ() {
    document.getElementById("Componentes").style.display = "none"
}

function Abre() {

    document.getElementById("Componentes").style.display = ""
}

function Iniciar() {
    if (estoqueBananas >= 330000000) {
        estoqueBananas = estoqueBananas -= 330000000

        document.getElementById("inicio").style.display = "none"
        var seconds = 1;
        const timerElement = document.getElementById('timer');

        function updateTimer() {
            seconds--;
            timerElement.textContent = seconds;


            if (seconds <= 0) {
                document.getElementById("inicio").onclick = Iniciar2
                document.getElementById("inicio").style.display = ""
                document.getElementById("Texto").textContent = "Molde Da Bomba"
                document.getElementById("Imagem").src = "Imagens/bomba.png"

                numeroPesquisa++;
                clearInterval(intervalo)
                intervalo = null;

            }

        }

        intervalo = setInterval(updateTimer, 1000);



    }






}

function Iniciar2() {


    if (estoqueBananas >= 1000000000) {
        estoqueBananas = estoqueBananas -= 1000000000

        document.getElementById("inicio").style.display = "none"
        var seconds = 3;
        const timerElement = document.getElementById('timer');

        function updateTimer() {
            seconds--;
            timerElement.textContent = seconds;


            if (seconds <= 0) {

                document.getElementById("inicio").onclick = Iniciar3
                document.getElementById("inicio").style.display = ""
                document.getElementById("Texto").textContent = "Coveter Radiacao Da Banana"
                document.getElementById("Imagem").src = "Imagens/radiobanana.png"

                numeroPesquisa++;
                clearInterval(intervalo)
                intervalo = null;

            }

        }

        intervalo = setInterval(updateTimer, 1000);

    }




}



document.getElementById("Componentes").style.display = "none"

function Iniciar3() {


    if (estoqueBananas >= 51200000000000000000000000000n ) {

        estoqueBananas = 0
        valorPorSegundo = 0
        valorPorClick = 0
        for (let i = 0; i < estruturas.length; i++) {
            estruturas.pop(i)
        }

        document.getElementById("inicio").style.display = "none"
        var seconds = 5;
        const timerElement = document.getElementById('timer');

        function updateTimer() {
            seconds--;
            timerElement.textContent = seconds;


            if (seconds <= 0) {
                numeroPesquisa++;
                clearInterval(intervalo)
                intervalo = null;

                document.getElementById("lab").style.display = "none"
                document.getElementById("Componentes").style.display = "none"
                document.getElementById("nuke").style.display = "flex"
                document.getElementById("nuke").style.width = "90px"
                
                

                
                alert("BOMBA NUCLEAR DE BANANAS CONCLUIDA")

            }

        }

        intervalo = setInterval(updateTimer, 1000);

    }






}



function NUKE(){
    alert("10")
    alert("9")
    alert("8")
    alert("7")
    alert("6")
    alert("5")
    alert("4")
    alert("3")
    alert("2")
    alert("1")


    document.getElementById("Pesquisa").style.backgroundImage = "url(Imagens/cidadeDestruida.jpg)"



    alert("............")




}


















