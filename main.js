const canvas = document.querySelector(".canvas1")
const ctx = canvas.getContext("2d")
console.log(ctx)//to see the properties

//for knowing inthe width  and height of he screen
let ww = window.innerWidth
let wh = window.innerWidth

//to set the width and height to 600
const canvasWidth = canvas.width = 600
const canvasHeight = canvas.height = 600;

//console.log(canvasHeight, canvasWidth)

//the image to be put insde the canvas
const playerImage = new Image()
playerImage.src = "shadow_dog.png"
//pixel width divided by column whichis 6876/12 =~ 575
const spriteWidth = 575
//~ =  about
//image width divided by rows 5230/10 =~ 523
const spriteHeight =523
let frameX = 0;
let frameY= 0;
let gameFrame =0;
//to slow down  
const staggerFrame = 5;

const spriteAnimations= []
const animationStates =[
    {
        name: "idle",
        frames: 7,
    },
    {
        name: "jump",
        frames: 7
    },
    {
        name: "run",
        frames: 7
    }
]
// state refers to the 2 objects inside the array
//index store the number of times it runs for each obj
animationStates.forEach((state, index) => {
    let frames ={
        loc:[]
    }
    for (let j =0; j <state.frames;j++){
        let positionX = j * spriteWidth
        let positionY = index * spriteHeight
    }
})

function animate(){
    ctx.clearRect(0,0, canvasWidth, canvasHeight)
    //ctx.fillRect(50, 50, 100,100)
    //    first4s{a rectange area to crop out from the image}(sourcewidth,sourceheight,)where we  want to draw the image{where it should be displayed on the canvas}(destination width , height)
    //ctx.drawImage(image, sx, sy,sw, sh, dx ,dy,dw,dh)
    //            the image, xpos,pos, widthof image, height of image
    //math.floor to get numbers instead of decimal
    let position = Math.floor(gameFrame / staggerFrame) % 6
    frameX= spriteWidth * position
    ctx.drawImage(playerImage, frameX, spriteHeight*frameY,spriteWidth,spriteHeight,0,0,canvasWidth,canvasHeight)
    /*if (gameFrame % staggerFrame ==0){
        if (frameX < 6) {
            frameX++
        }
        else{
            frameX = 0
        }
    }*/
    
    gameFrame++
    requestAnimationFrame(animate)
}
animate()

//side piece
//this was used to create movment using requestAnimation frame
/*mvs = 3
function animate(){
    ctx.clearRect(0,0, canvasWidth, canvasHeight)
    ctx.fillRect(50, mvs, 100,100)
    mvs+=1
    requestAnimationFrame(animate)
}
animate()*/

