function verificar() {
    var data = new Date()
    var  ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Bebe
                img.setAttribute('src', 'img/bebeh.png')
            } else if (idade < 18) {
                // jovem
                img.setAttribute('src', 'img/jovemh.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adultoh.png')
            } else {
                // Velho
                img.setAttribute('src', 'img/velhoh.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Bebe
                img.setAttribute('src', 'img/bebem.png')
            } else if (idade < 18) {
                // jovem
                img.setAttribute('src', 'img/jovemm.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adultom.png')
            } else {
                // Velho
                img.setAttribute('src', 'img/velhom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}