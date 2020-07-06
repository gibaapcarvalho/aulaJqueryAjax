//alert ("Aeee");

function consultaCEP (){
    $(".barra-progresso").show();
    var cep = document.getElementById("CEP").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    console.log(url);
    $.ajax(
        {
            url: url, //url chamada
            type: "GET", //tipo da requisição
            success: function(response){//em caso de sucesso no retorno
                console.log(response);//todo o dicionário
                console.log(response.bairro);//somente um valor do dicionário
                document.getElementById("logradouro").innerHTML = response.logradouro
                document.getElementById("bairro").innerHTML = response.bairro
                document.getElementById("localidade").innerHTML = response.localidade
                $("#UF").html(response.uf);//segunda maneira
                $("#descCEP").html(response.cep);
                //$("#descCEP").html("CEP " + response.cep); outra maneira
                
                //exibe a tabela após obter o resultado
                $(".cep").show();
                $(".barra-progresso").hide();

                /* sem o bootstrap
                url: url, //url chamada
                type: "GET", //tipo da requisição
                success: function(response){//em caso de sucesso no retorno
                    console.log(response);//todo o dicionário
                    console.log(response.bairro);//somente um valor do dicionário
                    document.getElementById("logradouro").innerHTML = response.logradouro
                    document.getElementById("bairro").innerHTML = response.bairro
                    document.getElementById("localidade").innerHTML = response.localidade
                    $("#uf").html(response.uf);//segunda maneira
                    */
            }
        }
    )
}

//trabalhando com estilos e propriedades
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
}
);