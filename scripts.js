const key="8818a0fb79604acee21defcf6f8ef10e"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = (dados.main.humidity) + "%" + " Umidade"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}