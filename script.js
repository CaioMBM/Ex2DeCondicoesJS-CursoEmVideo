function verificar(){
    // Pega a caixa do input do ano de nascimento
    var inputData = document.getElementById('input-data')
    // Valor do ano de nascimento digitado 
    var data = inputData.value

    // Pega o tempo
    var ano = new Date()
    // Pega o ano atual
    var anoAtual = ano.getFullYear()

    // Cálculo da idade
    var idade = anoAtual - data

    // Valor do input
    var sexo = document.getElementsByName('sexo')

    // Pegando a caixa que irá sair a mensagem
    var mensagem = document.getElementById('mensagem')

    // Pegando onde vai mostrar a imagem
    var img = document.querySelector('img')

    // Caso a idade seja inválida
    if (data > anoAtual){
        window.alert("Data inexistente, tente novamente!")
    } 
    // MASCULINO
    else if (sexo[0].checked && idade <= 4){
        mensagem.innerText = `Detectamos alguém do sexo masculino e com ${idade} anos.`
        img.src = "img/bebe.jpg"
    } 
    else if (sexo[0].checked && idade <= 18){
        mensagem.innerText = `Detectamos alguém do sexo masculino e com ${idade} anos`
        img.src = "img/menino.webp"
    } 
    else if (sexo[0].checked && idade < 60){
        mensagem.innerText = `Detectamos alguém do sexo masculino e com ${idade} anos`
        img.src = "img/homem.jpg"
    } 
    else if (sexo[0].checked && idade < 123){
        mensagem.innerText = `Detectamos alguém do sexo masculino e com ${idade} anos`
        img.src = "img/idoso.jpg"
    }
    else if (sexo[0].checked && idade >= 123){
        mensagem.innerText = `Detectamos um vâmpiro de ${idade} anos`
        img.src = "img/vampiro.jpg"
    }

    // FEMININO
    else if (sexo[1].checked && idade <= 4){
        mensagem.innerText = `Detectamos alguém do sexo feminino e com ${idade} anos.`
        img.src = "img/bebe.jpg"
    } 
    else if (sexo[1].checked && idade <=18){
        mensagem.innerText = `Detectamos alguém do sexo feminino e com ${idade} anos`
        img.src = "img/menina.webp"
    } 
    else if (sexo[1].checked && idade < 60){
        mensagem.innerText = `Detectamos alguém do sexo feminino e com ${idade} anos`
        img.src = "img/mulher.webp"
    } 
    else if (sexo[1].checked && idade < 123){
        mensagem.innerText = `Detectamos alguém do sexo feminino e com ${idade} anos`
        img.src = "img/idosa.png"
    }
    else if (sexo[1].checked && idade >= 123){
        mensagem.innerText = `Detectamos uma vâmpira de ${idade} anos`
        img.src = "img/vampira.jpg"
    }
}