//Weergeef alinea 2

var firstlink = document.getElementById('first-link');

var paragraph2 = document.querySelector('article.alinea-2');


var showParagraph2 = firstlink.addEventListener('click', function(){
    paragraph2.classList.toggle('alinea-2-active');
    
    console.log(paragraph2);
})

//Weergeef alinea 3

var secondLink = document.getElementById('second-link');

var paragraph3 = document.querySelector('article.alinea-3');


var showParagraph3 = secondLink.addEventListener('click', function(){
    paragraph3.classList.toggle('alinea-3-active');
    
    console.log(paragraph3);
})

//Weergeef alinea 4

var thirdLink = document.getElementById('third-link');

var paragraph4 = document.querySelector('article.alinea-4');


var showParagraph4 = thirdLink.addEventListener('click', function(){
    paragraph4.classList.toggle('alinea-4-active');
    
    console.log(paragraph4);
})
