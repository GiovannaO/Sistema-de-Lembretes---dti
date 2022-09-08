var d = new Date();
var dia = d.getDate();
var mes = d.getMonth() + 1;
var ano = d.getFullYear();

//função para adicionar data na lista de lembretes
function adicionarData(dataCompleta){

    var listaData = [];

    listaData.push(dataCompleta);

}

//função para adicionar nome de lembrete na lista
function adicionarNome(nome){

    var listaNome = [];

    listaNome.push(nome);
}

/*remover item da lista, quando o botão excluir é pressionado
function removerItem(nome, listaData, listaNome){

    listaNome.splice(listaNome.indexOf(nome), 1);

    //caso a lista de nomes do lembrete fique vazia, a lista de datas também deve ser removida
    if(listaNome == ""){
        listaData.splice(listaData.indexOf(data), 1);
    }

}*/

//validação do formulário de criação de lembretes
function validarFormulario(){

    var nome = document.getElementById("nome");
    var data = document.getElementById("data");

    var dataSelecionada = new Date(data.value);
    //armazenando a data em variáveis diferentes
    var diaSelecionado = dataSelecionada.getDate() + 1;
    var mesSelecionado = dataSelecionada.getMonth() + 1;
    var anoSelecionado = dataSelecionada.getFullYear();

    var dataCompleta = diaSelecionado + "/" + mesSelecionado + "/" + anoSelecionado;

    //funções que validam a data e o nome dos lembretes separadamente
    validarNome(nome);
    validarData(data, diaSelecionado, mesSelecionado, anoSelecionado);

}

//função para validar o nome do lembrete
function validarNome(nome){
    //verificar se o campo nome está vazio
    if(nome.value == ""){
        alert("Nome do lembrete não informado");
        nome.focus();
    }
}

//função para validar a data do lembrete
function validarData(data, dataCompleta, anoSelecionado, mesSelecionado, diaSelecionado){

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
            criarLembrete(nome, dataCompleta);
        }else{
            //a data é posterior ao dia atual
            criarLembrete(nome, dataCompleta);
        }

    }

}

function criarLembrete(nome, dataCompleta){

    var adicionar1 = adicionarData(dataCompleta);
    var adicionar2 = adicionarNome(nome);
    
    var dataAdicionada = adicionar1.value;
    var nomeAdicionado = adicionar2.value;

    document.getElementById(listaLembretes).appendChild(dataAdicionada);
    document.getElementById(listaLembretes).appendChild(nomeAdicionado);

}