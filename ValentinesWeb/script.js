function teleportNoButton() {
    var noButton = document.getElementById('noButton');
    var randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // 100 is the button's width
    var randomY = Math.floor(Math.random() * (window.innerHeight - 40)); // 40 is the button's height
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}
