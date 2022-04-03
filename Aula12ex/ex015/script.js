function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checkd) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                Img.setAttribute('src', 'Bebê-Homem.jpg')
            }else if (idade < 21) {
                //Jovem
                Img.setAttribute('src', 'Jovem-Homem.jpg')
            }else if (idade < 50) {
                //Adulto
                Img.setAttribute('src', 'Homem-Adulto.jpg')
            }else {
                //Idoso
                Img.setAttribute('src', 'Homem-Idoso.jpg')
            }
            
        } else if (fsex[1].checkd) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                Img.setAttribute('src', 'Bebê-Mulher.jpg')
            }else if (idade < 21) {
                //Jovem
                Img.setAttribute('src', 'Jovem-Mulher.jpg')
            }else if (idade < 50) {
                //Adulto
                Img.setAttribute('src', 'Mulher-Adulta.jpg')
            }else {
                //Idoso
                Img.setAttribute('src', 'Mulher-Idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}