const images = [
    "./images/mockPic/pic1.png",
    "./images/mockPic/pic2.png",
    "./images/mockPic/pic3.png",
    "./images/mockPic/pic4.png",
];

let currentIndex = 0;
const phoneImage = document.getElementById("phoneImage");

function changeImage() {
    phoneImage.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        phoneImage.src = images[currentIndex];
        phoneImage.style.opacity = 1;
    }, 500);
}

setInterval(changeImage, 3000);