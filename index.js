const clearbtn=document.querySelector('.clear')
const list=document.querySelector('.list')
const val=document.getElementById('input')
const submit=document.querySelector('.submit')
const err_msg=document.querySelector('.error_msg')
let arr=[]
clearbtn.addEventListener('click',()=>{
    if(list.textContent==''){
        console.log("sas")
err_msg.style.display='block'
    }
    else{
        list.textContent=""
    }
})

submit.addEventListener('click',display)
val.addEventListener('keypress',(e)=>{
console.log(e.key)
if(e.key=="Enter"){
    display()
}
})

function display() {
    let li=document.createElement('li')
let text=document.createTextNode(val.value)
arr.push(val.value)
localStorage.setItem('grocery_items',JSON.stringify(arr))

li.appendChild(text)
list.appendChild(li)
val.value=''
}