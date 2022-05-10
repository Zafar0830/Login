let button=document.querySelector('#btn')


button.addEventListener('click',function () {
    mytext(),
    mypass()
}) 
function mytext() {
    let massage,text;
    let errElement=document.getElementById('text')
    massage=document.getElementById('err')
    text=document.getElementById('text').value
    try{
        if (text=="") {
            errElement.classList.remove('valid')
            errElement.classList.add('error')
            throw "bo'sh"
        }
        if (text.length>0  ) {
            errElement.classList.remove('error')
            errElement.classList.add('valid')
            massage.innerHTML=""
        }
        if (text.length<5 ) {
            errElement.classList.add('error')
            errElement.classList.remove('valid')
            throw "5ta beldidan kam bo'lmasin!"
        }
    }catch(e){
        massage.innerHTML="Qiymat"+" "+e
    }
    
}
function mypass() {
    let massage,text;
    let errElement=document.getElementById('possword')
    massage=document.getElementById('err2')
    text=document.getElementById('possword').value
    try{
        if (text=="") {
            errElement.classList.remove('valid')
            errElement.classList.add('error')
            throw "bo'sh"
        }
        if (text.length>0) {
            errElement.classList.remove('error')
            errElement.classList.add('valid')
            massage.innerHTML=""
        }
        if (text.length<8) {
            errElement.classList.add('error')
            errElement.classList.remove('valid')
            throw "8ta belgidan kam bo'lmasin!"
        }
        
    }catch(e){
        massage.innerHTML="Qiymat"+" "+e
    }
    
}