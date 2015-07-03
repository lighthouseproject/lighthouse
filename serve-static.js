import express from 'express';

let app = express();
app.use(express.static('public'));
let server = app.listen(8000, () => console.log('started listening to port 8000'));

export default server;
