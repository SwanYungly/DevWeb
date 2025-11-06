function ligar(){
    document.getElementById('lamp').src = 'img/pic_bulbon.gif';
}
function desligar(){
    lamp.src = 'img/pic_bulboff.gif';
}
function onOff(){
    
  let botaoOnOff = document.getElementById('onoffbtn');
    
    if (lamp2.src.includes('pic_bulboff.gif')) {
        lamp2.src = 'img/pic_bulbon.gif';   
        botaoOnOff.className = 'btn btn-danger';
    } else {
        lamp2.src = 'img/pic_bulboff.gif'; 
        botaoOnOff.className = 'btn btn-success';
    }
}