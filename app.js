// dichiaro le variabili delle immagini e delle frecce

const pictureEl = document.getElementsByClassName('picture')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')

let pictureAddRight  = 0
let pictureAddLeft = 5

let listPicture = [
    './Img/01.jpg',
    './Img/02.jpg',
    './Img/03.jpg',
    './Img/04.jpg',
    './Img/05.jpg',
]

console.log(listPicture)

arrowRight.addEventListener('click', function () {

    let pictureBefore = pictureEl[pictureAddRight]
    pictureBefore.classList.remove('active')

    pictureAddRight += 1
    
    let pictureAfter = pictureEl[pictureAddRight]
    pictureAfter.classList.add('active')
    
})


arrowLeft.addEventListener('click', function () {
    
    let pictureBefore = pictureEl[pictureAddRight]
    pictureBefore.classList.remove('active')

    pictureAddRight += 1
    
    let pictureAfter = pictureEl[pictureAddRight]
    pictureAfter.classList.add('active')

})