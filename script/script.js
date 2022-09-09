var botaoCriar = document.querySelector("#criar");
//criação do evento do botão
if(botaoCriar){
    botaoCriar.addEventListener("click", () =>{
        validarFormulario();
    });
}

var d = new Date();
var dia = d.getDate();
var mes = d.getMonth() + 1;
var ano = d.getFullYear();


//validação do formulário de criação de lembretes
function validarFormulario(){

    var nome = document.querySelector("#nome");
    var data = document.querySelector("#data");

    //atribuindo os valores dos elementos html á variáveis
    var nomeSelecionado = nome.value;
    var dataSelecionada = new Date(data.value);

    //armazenando a data em variáveis diferentes
    var diaSelecionado = dataSelecionada.getDate() + 1;
    var mesSelecionado = dataSelecionada.getMonth() + 1;
    var anoSelecionado = dataSelecionada.getFullYear();

    var dataCompleta = diaSelecionado + "/" + mesSelecionado + "/" + anoSelecionado;

     //verificar se o campo nome está vazio
     if(nomeSelecionado == ""){
        alert("Nome do lembrete não informado");
        nome.focus();
    }

    //se a data não for selecionada
    if(data.value == ''){
        alert("Data do lembrete não informada");
        data.focus();
    }else{

        //se a data for selecionada
        if((anoSelecionado < ano && mesSelecionado < mes) || (anoSelecionado == ano && mesSelecionado <= mes && diaSelecionado <= dia)){
            //a data é anterior ao dia atual
            alert("Data inválida");
            data.focus();
        }else if(anoSelecionado == ano && (mesSelecionado == mes && diaSelecionado > dia) || (mesSelecionado > mes)){
            //a data é posterior ao dia atual, porém no mesmo ano e/ou mesmo mês
            criarLembrete(nomeSelecionado, dataCompleta);
        }else{
            //a data é posterior ao dia atual
            criarLembrete(nomeSelecionado, dataCompleta);
        }

    }

}

//função para criar lembretes
function criarLembrete(nomeSelecionado, dataCompleta){

    //variáveis para criar tags html
    var ul = document.createElement("ul");
    var li = document.createElement("li");

    //variáveis para indicar o que será escrito dentro do bloco de cada tags
    var textoData = document.createTextNode(dataCompleta);
    var textoNome = document.createTextNode(nomeSelecionado);

    ul.appendChild(textoData);
    li.appendChild(textoNome);

    if(textoData == dataCompleta){
        document.getElementById("listaLembretes").appendChild(li);
    }else{
        document.getElementById("listaLembretes").appendChild(ul);
        document.getElementById("listaLembretes").appendChild(li);
    }

}

/*remover item da lista, quando o botão excluir é pressionado
function removerItem(nomeSelecionado){
    listaNome = [];
    listaNome = nomeSelecionado;

    listaNome.splice(listaNome.indexOf(nomeSelecionado), 1);

    //caso a lista de nomes do lembrete fique vazia, a lista de datas também deve ser removida
    if(listaNome == ""){
        listaData.splice(listaData.indexOf(dataCompleta), 1);
    }

}*/
