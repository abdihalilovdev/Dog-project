// promise

// pending
// resolve - fulfilled
// rejected

// let status = 200
// const promise = new Promise((resolve, reject) => {
//     console.log('start')
//     setTimeout(() => {
//         console.log('success')
//         if (status >= 200 && status < 300) {
//             resolve({status: 'Ok'})
//         } else {
//             reject({status: 404})
//         }
//     }, 2000)
// })
// promise
//     .then((data) => console.log(data))
//     .catch((res) => console.error('Error...', res))
//     .finally(() => console.log('finish'))


// const promiseFn = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Go...')
//             resolve()
//         }, ms)
//     })
// }
//
// Promise.all([promiseFn(2000), promiseFn(4000), promiseFn(6000)]).then(() => console.log('finish-all'))
// Promise.race([promiseFn(2000), promiseFn(4000), promiseFn(6000)]).then(() => console.log('finish-race'))

// const row = document.querySelector('.row')

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((data)=> data.json())
//     .then((res)=> {
//         res.map((el,idx)=>{
//             row.innerHTML += `<div class="col-3 border bg-white m-4">
//             <h1>${el.name}</h1>
//             <h3>${el.username}</h3>
//             <p>${el.phone}</p>
//             <h5>${el.address.city}</h5>
//             <p>${el.address.street}</p>
//             <a target="_blank" href="http://${el.website}">${el.website}</a>
//              </div>`
//         })
//     })


