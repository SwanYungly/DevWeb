function ligar(){
    document.getElementById('lamp').src = 'img/pic_bulbon.gif';
}
function desligar(){
    document.getElementById('lamp').src = 'img/pic_bulboff.gif';
}
function onOff(){
    const lamp = document.getElementById('lamp2');
    
    if (lamp2.src.includes('pic_bulboff.gif')) {
        lamp2.src = 'img/pic_bulbon.gif';   
    } else {
        lamp2.src = 'img/pic_bulboff.gif'; 
    }
}