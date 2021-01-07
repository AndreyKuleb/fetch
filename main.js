const fetch = require('node-fetch');
const server = 'https://3cee2d3b-cc1a-44c9-b4bd-c941cf97fd5a.mock.pstmn.io'

fetch(`${server}/json`)
    .then(response => response.json())
    .then(data => console.log(data))