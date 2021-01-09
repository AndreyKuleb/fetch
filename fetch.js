const fetch = require('node-fetch');
const server = 'https://3cee2d3b-cc1a-44c9-b4bd-c941cf97fd5a.mock.pstmn.io'

fetch(`${server}/json`)
    .then(response => response.json())
    .then(data => console.log(
`Тест 1
Данные получены в json формате и распаршены в json ${data}`))
    .catch(e => console.log(e))

fetch(`${server}/json`)
    .then(response => response.text())
    .then(data => console.log(`
Тест 2
Данные получены в json формате и распаршены в текст ${data}
`))
    .catch(e => console.log(e))


fetch(`${server}/text`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => {
        console.log(
`Тест 3
Данные получены в текстовом формате и Была попытка распарсить в json
Произошла ошибка
`);
        console.log('type:', e.type);
        console.log('message:', e.message)        ;
        console.log('code:', e.code)        ;

})


fetch(`${server}/text404`)
    .then(response => 
        {
            if (response.status === 200) {
                return response.json()
            } else {
                console.log(
`Тест 4
Произошла ошибка ${response.status}

`);
            }
        })
    .then(data => {
        if  (data){
            console.log(data)
        }})
    .catch(e => {
        console.log(e);
        console.log('Тест 4. Этот текст не выведется, так как ошибки не произойдет');
})


/* 
CORS Error
Запрос делать в браузере на странице rutube.ru
*/
// fetch(`https://mail.ru`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(e => {
//         console.log(
// `Тест 5
// Cors Error (fetch Error)
// `);
//         console.log('type:', e.type);
//         console.log('message:', e.message)        ;
//         console.log('code:', e.code)        ;

// })
