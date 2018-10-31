var heart;

heart = document.querySelectorAll('article > button');

for (var i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function changeHeart() {
        this.classList.toggle('redheart');
        checkFavorite();
    })
}

function checkFavorite() {

    var redheart = document.querySelectorAll('article > button');
    
    var favoriteCount = 0;

    var span = document.querySelector('span.fav-circle');

    for (let i = 0; i < redheart.length; i++) {
        if (redheart[i].className == 'redheart') {
            favoriteCount++;
        }
    }

    span.innerHTML = favoriteCount;
    
    var checkPath;
    
    checkPath = document.querySelector('nav ul li > a')

    if (favoriteCount > 0) {

        span.classList.add('show');
        span.classList.remove('hidden');
        
        checkPath.href = "favoriet.html";
        console.log(checkPath);
    } else {

        span.classList.add('hidden');
        span.classList.remove('show');
        
        checkPath.href = "favoriet-empty.html";
        console.log(checkPath);
    }
}


// Download icoon
var downloadIcon = document.querySelectorAll('footer > button');
var popUp = document.querySelector('.popup');

//Weergeef van een popup dat de verhaal gedownload is
function toggleDownload() {
    popUp.classList.toggle('popup-clicked');
}

//For elke download knop die er bestaat, wanneer erop wordt geklikt, wijzig het met de geslaagde download icoon
for (var i = 0; i < downloadIcon.length; i++) {
    downloadIcon[i].addEventListener("click", function toggleDownload() {
        this.classList.toggle('NewDownload');
    })
}

for (i = 0; i < downloadIcon.length; i++) {
    downloadIcon[i].addEventListener('click', toggleDownload);
}

// Popup wordt weggehaald
function removePopup() {
    popUp.classList.remove('popup-clicked');
}
popUp.addEventListener('click', removePopup);
