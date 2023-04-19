const row = document.querySelector('.breeds')
const breedsImg = document.querySelector('.breeds-image')
const searchBtn = document.querySelector('.search-btn')
const input = document.querySelector('.search-input')
const select = document.querySelector('.breed-select')


axios('https://dog.ceo/api/breeds/list/all')
    .then((res) => {
        // console.log(res.data.message)
        Object.keys(res.data.message).map(el => {
            select.innerHTML += `<option value="${el}">${el}</option>`
            row.innerHTML += `<button class="breed-names btn btn-primary m-2">${el}</button>`
        })
    })
    .then(() => getImage())

function getImage() {
    const breeds = document.querySelectorAll('.breed-names')
    breeds.forEach(btn => {
        btn.addEventListener('click', () => {
            fetchingImage(btn.innerHTML)
            breeds.forEach(el => el.classList.remove('btn-danger'))
            btn.classList.add('btn-danger')
        })
    })
}

function fetchingImage(name) {
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res) => {
            console.log(res.data)
            breedsImg.innerHTML = `<img width="600"  height="350"  src="${res.data.message}" alt="">`
        })
        .then(() => window.scroll(0, 1000))
}

searchBtn.addEventListener('click', () => {
    fetchingImage(input.value)
})

select.addEventListener('click',(e)=>{
    fetchingImage(e.target.value)
})

// https://dog.ceo/api/breed/{Affenpinscher}/images/random













