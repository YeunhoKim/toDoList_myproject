const imgList = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const body = document.querySelector("body");

const choseImg = Math.floor(Math.random() * imgList.length);

const img = document.createElement("img");

img.src=`./img/${imgList[choseImg]}`

body.append(img);