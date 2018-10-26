var heart;

heart = document.querySelectorAll('article > button');

for (var i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function myfunction() {
        this.classList.toggle('redheart');
        checkFavorite();
    })


}

function checkFavorite() {

    var heart2 = document.querySelectorAll('article > button');

    var count = 0;

    for (let i = 0; i < heart2.length; i++) {
        if (heart2[i].className == 'redheart') {
            count++;
        }
    }
    document.querySelector('a').innerHTML = count;


    var link;
    if (count > 0) {

    }
    console.log(link);
}
