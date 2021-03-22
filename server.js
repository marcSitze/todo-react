const express = require('express');
const app = express();

app.use(express.static('build'));
app.use('/', (req, res) => {
    res.send('index.html')
});

app.listen(5000, () => console.log('server listening on port 5000'));