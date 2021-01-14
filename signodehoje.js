//Script que informa o signo do usuário!

//Lista de todos os signos, com data de início e término
let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

//Função que irá comparar as datas de cada signo. 
const verifica_data_range =
 (data, data_inicio, data_fim, tipo_comparacao) => {

    if ( tipo_comparacao == "and" ){
        return (data >= data_inicio && data <= data_fim);
    } else if( tipo_comparacao == "or" ){
        return (data >= data_inicio || data <= data_fim);
    }

}

//Função para retornar o signo referênte a data.
const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    for ( const signo of signos ){

        let data_inicio_signo =
         new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo =
         new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verifica_data_range
         (data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
            return signo["Nome"];
        }

    }

}

//Variável para armazenar uma data específica ou a data atual.
//Ao deixar o parâmetro Date vázio será utilizado a data atual.
let data_app = new Date();

//Váriavel que nos retorna o resultado da função.
const nome_signo = retorna_signo(colecao_signos, data_app);

//Mostrando o signo no console.
console.log("O signo de hoje é: " + nome_signo);