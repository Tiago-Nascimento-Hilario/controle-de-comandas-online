function atualizar() {
    let vlrComanda = Number(document.getElementById("idValorComanda").value);
    let vlrPorcentagem = document.getElementById("idRangerPorcentagem").value;
    let vlrQuantidadeDepessoas = document.getElementById("idRangeDividirValor").value;

    let valorDaGorjeta = (vlrPorcentagem /100) * (vlrComanda);
    let valorTotal = (vlrComanda + valorDaGorjeta)
    let valorPorPessoa = (valorTotal / vlrQuantidadeDepessoas);

    document.getElementById("idPorcentagem").innerHTML = vlrPorcentagem + " % ";

    document.getElementById("idValor").innerHTML = "R$ "+ valorDaGorjeta.toFixed(2);

    document.getElementById("totalComGorjeta").innerHTML = "R$ "+ valorTotal.toFixed(2);

    document.getElementById("idDividirValor").innerHTML = vlrQuantidadeDepessoas + " pessoas"

    document.getElementById("idValorPorPessoa").innerHTML = "R$ "+ valorPorPessoa.toFixed(2);


}