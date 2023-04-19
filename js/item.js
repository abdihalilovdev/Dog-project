const item = document.querySelector('.item')

for (let i = 1; i <= 600; i++){
const square = document.createElement('div')
    square.setAttribute('class','square')
    item.append(square)
}