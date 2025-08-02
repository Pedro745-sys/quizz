function vperg1(botaoClicado, opcaoSelecionada){
    if(opcaoSelecionada == 'c1'){
        var respCerta = document.getElementById('c1');
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp1').innerHTML= "✅Parabéns você acertou!"
    }else{
        var respCerta = document.getElementById('c1');
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp1').innerHTML="❌ops errou!"
    }
}
function vperg2(botaoClicado,opcaoSelecionada){
    if(opcaoSelecionada == 'b2'){
        var respCerta = document.getElementById('b2');
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp2').innerHTML = "✅Parabéns você acertou!"
    }else{
        var respCerta = document.getElementById('b2');
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp2').innerHTML="❌ops errou!"
    }
}
function vperg3(botaoClicado, opcaoSelecionada){
    if(opcaoSelecionada == 'a3'){
        var respCerta = document.getElementById('a3');
        respCerta.style.backgroundColor = "green";
        document.getElementById('resp3').innerHTML= "✅Parabéns você acertou!"
    }else{
        var respCerta = document.getElementById('a3');
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp3').innerHTML="❌ops errou!"
    }
}
function resetarResposta() {
            // Remove a seleção de todos os botões
            document.querySelectorAll('#pergunta1 button').forEach(btn => {
                btn.style.backgroundColor = '#f0f0f0';
                btn.disabled = false;
            });
            
            // Limpa a mensagem de resposta
            document.getElementById('resp1', 'resp2', 'resp3').textContent = '';
            document.getElementById('resp1', 'resp2', 'resp3').className = '';
            
            respostaSelecionada = null;
        }

