function carregar(){
    //Pega os atributos HTML com DOM
     var msg = window.document.getElementById('msg')
     var img = document.getElementById('imagem')
     var data = new Date()
     //Pega a hora data e hora do sistema
     var hora = data.getHours()
     //Pega as horas e armazena na variavel hora
     var min = data.getMinutes()
     //pega os minutos e armazena na variavel min
     var sec = data.getSeconds()
     msg.innerHTML = `Agora são <strong>${hora}:${min}:${sec}</strong>.`
     if (hora >= 0 && hora < 12){ //Condicional se para escolher entre foto da manhã ou outro horário
         img.src = 'fotomanha.png'
         document.body.style.background = '#ffdbaf' //Codigo hexadecimal baseado na cor da imagem
     } else if (hora >=12 && hora < 18){
         img.src = 'fototarde.png'
         document.body.style.background = '#eab58b'
     } else{
         img.src = 'fotonoite.png'
         document.body.style.background = '#0c2a2c'
     }
     setInterval(carregar, 500)// Carrega a função a cada 500 mili segundos
 }