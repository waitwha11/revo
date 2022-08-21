let btn = document.getElementById('btn')
let colors = ['red','orange','yellow','green','blue']
let image = document.getElementById('img')
let i = 0
let imgs = new Array('revo.png', 'bot.png', 'on.jpg', 'pat.png');

btn.addEventListener('click', () => {
    document.body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)
})

function imgsrc (){
    i++
    if(i === 4){
        i = 0
    }
    image.src = imgs[i]
}
