let images=document.querySelectorAll('.h-icons')
for(let x of images){
    x.addEventListener('click',function(){
        let p1=this.getAttribute('value')
        document.querySelector('#player1').innerHTML=p1
        this.style.transition='1s'
        this.style.transform='scale(1.2)'
        computer()

        if(p1==p2){
            document.querySelector('.resultBox').style.display='block'
            document.querySelector('.resultBox').innerHTML='Draw !'
            document.querySelector('.resultBox').style.background='yellow'    
        }else if(p1=='rock' && p2=='scissor'|| p2=='lizard'){
            document.querySelector('.resultBox').style.display='block'
            document.querySelector('.resultBox').innerHTML='You Won !'
            document.querySelector('.resultBox').style.background='green'
        }else if(p1=='paper' && p2=='rock'|| p2=='spock'){
            document.querySelector('.resultBox').style.display='block'
            document.querySelector('.resultBox').innerHTML='You Won !'
            document.querySelector('.resultBox').style.background='green'
        }else if(p1=='scissor' && p2=='paper'|| p2=='lizard'){
            document.querySelector('.resultBox').style.display='block'
            document.querySelector('.resultBox').innerHTML='You Won !'
            document.querySelector('.resultBox').style.background='green'
        }else if(p1=='lizard' && p2=='paper'|| p2=='spock'){
            document.querySelector('.resultBox').style.display='block'
            document.querySelector('.resultBox').innerHTML='You Won !'
            document.querySelector('.resultBox').style.background='green'
        }else if(p1=='spock' && p2=='rock'|| p2=='scissor'){
            document.querySelector('.resultBox').style.display='block'
            document.querySelector('.resultBox').innerHTML='You Won !'
            document.querySelector('.resultBox').style.background='green'
        }else{
            document.querySelector('.resultBox').style.display='block'
            document.querySelector('.resultBox').innerHTML='You Loss !'
            document.querySelector('.resultBox').style.background='red'
        }

    })
}
let p2;
let arr=['rock','paper','scissor','lizard','spock']
let random=Math.trunc(Math.random()*5)
let cimages=document.querySelectorAll('.c-icons')
function computer(){
     p2=arr[random]
    document.querySelector('#player2').innerHTML=p2
    for(let y of cimages){
        if(p2==y.getAttribute('value')){
            y.style.transition='1s'
            y.style.transform='scale(1.2)'  
           
        }
    }
}