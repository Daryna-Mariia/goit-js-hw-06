const inputHtml = document.querySelector('#font-size-control');
const spanHtml = document.querySelector('#text');
inputHtml.addEventListener('input',function (){
spanHtml.style.fontSize=`${this.value}px`
})