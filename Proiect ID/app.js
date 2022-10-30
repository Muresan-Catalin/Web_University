var i = 0;
var images = [];
var time = 3000;

images[0] = 'c1.png';
images[1] = 'c1.png';
images[2] = 'c2.png';

function changeImg(){
    document.getElementById("slide").src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

function contact(){
    alert("Sunati la numarul 0762890775 sau email la coffelounge@gmail.com");
}