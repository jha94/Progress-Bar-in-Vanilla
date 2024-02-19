const childDiv = document.getElementById('childDiv');

let timer;
let width = 0;
timer = setInterval(()=>{
    if(width<10){
    width+=1;
    childDiv.innerHTML = `<p style={{
        position:'fixed'
    }} >${width*10}%</p>`
    childDiv.style.width = `${width*40}px`
}
}, 1000)
