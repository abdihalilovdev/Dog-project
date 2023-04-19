// const row = document.querySelector('.row')
// const select = document.querySelector('.select-countries')
// const input = document.querySelector('.search-input')
// const btn = document.querySelector('.search-btn')
// const option = document.querySelector('.select-continent')
//
//
// let allCountries = []
//
// function fetchingData() {
//     axios('https://restcountries.com/v3.1/all')
//         .then((res) => {
//             allCountries = res.data
//             getCountries(res.data)
//         })
// }
//
// fetchingData()
//
// function getCountries(data) {
//     window.scroll(0, 0)
//     row.innerHTML = ''
//     data.map((el, idx) => {
//         row.innerHTML += `<div class="col-3 border my-4">
//             <h2>${idx + 1}</h2>
//             <img src="${el.flags.svg}" width="200" height="140" alt="">
//             <h2>${el.name.common}</h2>
//             <p>Борбору:${el.capital ? el.capital : 'No capital!!!'}</p>
//             <p>Калкы:${el.population}</p>
//             <p>Аянты:${el.area} <b>km<sup>2</sup></b></p>
//             <p>region: ${el.region}</p>
//             </div>`
//     })
// }
//
//
// select.addEventListener('change', (e) => {
//     console.log(e.target.value)
//     if (e.target.value === 'population') {
//         allCountries = allCountries.sort((a, b) => {
//             return b.population - a.population
//         })
//         getCountries(allCountries)
//     } else if (e.target.value === 'area') {
//         allCountries = allCountries.sort((a, b) => {
//             return b.area - a.area
//         })
//         getCountries(allCountries)
//     } else if (e.target.value === 'A-Z') {
//         allCountries = allCountries.sort((a, b) => {
//             return b.name.common > a.name.common ? -1 : 1
//         })
//         getCountries(allCountries)
//     } else if (e.target.value === 'Z-A') {
//         allCountries = allCountries.sort((a, b) => {
//             return b.name.common > a.name.common ? 1 : -1
//         })
//         getCountries(allCountries)
//     }
// })
//
//
// option.addEventListener('change', (e) => {
//     console.log(e.target.value)
//     let {value} = e.target
//     if (value === 'Asia') {
//         let result = allCountries.filter((el) => {
//             return el.region === 'Asia'
//         })
//         getCountries(result)
//     } else if (value === 'Europe') {
//         let result = allCountries.filter((el) => {
//             return el.region === 'Europe'
//         })
//         getCountries(result)
//     } else if (value === 'Antarctic') {
//         let result = allCountries.filter((el) => {
//             return el.region === 'Antarctic'
//         })
//         getCountries(result)
//     } else if (value === 'Africa') {
//         let result = allCountries.filter((el) => {
//             return el.region === 'Africa'
//         })
//         getCountries(result)
//     } else if (value === 'Oceania') {
//         let result = allCountries.filter((el) => {
//             return el.region === 'Oceania'
//         })
//         getCountries(result)
//     }
// })
//
//
// btn.addEventListener('click', () => {
//     axios(`https://restcountries.com/v3.1/name/${input.value}`)
//         .then((res) => {
//             console.log(res.data)
//             getCountries(res.data)
//         })
// })
//
// input.addEventListener('input', (e) => {
//     axios(`https://restcountries.com/v3.1/name/${e.target.value}`)
//         .then((res) => {
//             console.log(res.data)
//             getCountries(res.data)
//         })
// })
//
//
