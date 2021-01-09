const fetch = require('node-fetch');
const server = 'https://3cee2d3b-cc1a-44c9-b4bd-c941cf97fd5a.mock.pstmn.io'

async function start (){
    const response = await fetch(`${server}/json`)
    const data = await response.json()
    console.log(
    `Тест 1
    Данные получены в json формате и распаршены в json ${data}
    `)
    
    const response2 = await fetch(`${server}/json`);
    const data2 = await response2.text();
    console.log(`
    Тест 2
    Данные получены в json формате и распаршены в текст ${data2}
    `)
    
    
    try {
        const response3 = await fetch(`${server}/text`);
        const data3 = await response3.json();
    } catch(e) {
        console.log(
            `Тест 3
            Данные получены в текстовом формате и Была попытка распарсить в json
            Произошла ошибка
            `);
        console.log('type:', e.type);
        console.log('message:', e.message)        ;
        console.log('code:', e.code)        ;
    }
    
    
    try {
        const response4 = await fetch(`${server}/text404`)
        let data4;
        if (response4.status === 200) {
            data4 = response4.json()
        } else {
            console.log(
        `Тест 4
        Произошла ошибка ${response4.status}
    
        `);
            data4 = null;
        }
        console.log('data', data4)
    } catch(e) {
        console.log(e);
        console.log('Тест 4. Этот текст не выведется, так как ошибки не произойдет');
    }
}

start()

/* 
CORS Error
Запрос делать в браузере на странице rutube.ru
*/
// try {
//     const response = await fetch(`https://mail.ru`)
//     const data = await response.json()
// } catch(e) {
//     console.log(
// `Тест 5
// Cors Error (fetch Error)
// `);
//                 console.log('type:', e.type);
//                 console.log('message:', e.message)        ;
//                 console.log('code:', e.code)        ;
// }

