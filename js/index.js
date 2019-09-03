// Your code goes here
//focus makes nav items red and bold #1 
const navSection = document.querySelectorAll('.nav a');
navSection.forEach(item =>{
    item.addEventListener('focus', (e)=>{
        item.style.color = 'red'
        item.style.fontWeight = 'bold' 
    })
})

//makes background grey on scroll #2 
let page = document.querySelector('html')
window.addEventListener('scroll', e=>{
    page.style.background = 'lightgrey';
})

//This section is all on the images
const allImg = document.querySelectorAll('img');
allImg.forEach(item=>{
    // blurs the images at the hover of a mouse #3
    item.addEventListener('mouseover', e=>{
        item.style.filter ='blur(4px)'
    })
    //removes the blur once mouse is not hovering #4
    item.addEventListener('mouseout', e=>{
        item.style.filter ='blur(0px)'
    })
    //an alert is brought up with the alt text when double clicked #5
    item.addEventListener('dblclick', e=>{
        alert(item.alt)})
        //rotates the image on the Y axis when clicked once #6
    item.addEventListener('click', e=>{
        item.style.transform = 'rotateY(180deg)'})

})
