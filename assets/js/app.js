var img = document.getElementsByClassName('img')[0];
var smallImg = document.getElementsByClassName('smallImg');
var carmaincontainer = document.getElementsByClassName('carmaincontainer');

img.onmousemove = function(e) {
    var xCoor = e.clientX  - e.target.getBoundingClientRect().left;
    var yCoor = e.clientY  - e.target.getBoundingClientRect().top;
    img.style.backgroundPosition = -xCoor + 'px ' + -yCoor + 'px';
}
img.onmouseleave = function(){
  img.style.backgroundPosition = '0 0';
}


for (var i = 0; i < smallImg.length ; i++) {
  smallImg[i].addEventListener('click',function(e){
    img.style.opacity = '0';
    setTimeout(function(){
      img.style.backgroundImage = window.getComputedStyle(e.target).backgroundImage;
      setTimeout(function(){
        img.style.opacity = '1';
      },150)
    },400)
  })
}



console.log(window.getComputedStyle(img).backgroundImage);
