console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='THIS IS MY FIRST WEB APPLICATION AND MY NAME IS MUHAMMED SAHAD BIN ABDUL SAMAD';




var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
     var interval = setinterval(moveRight, 50);
};

