function carregar(){
    var msg= document.getElementById('msg')
    var img= document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    msg.innerHTML=`agora sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/pexels-8moments-1266810.jpg'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/pexels-andersonmartins-retratos-2386144.jpg'
        document.body.style.background='#B46924'
    } else {
        img.src = 'imagens/pexels-alexandro-david-871783-2820966.jpg'
        document.body.style.background='#172034'
    }
}


