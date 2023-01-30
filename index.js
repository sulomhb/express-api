const res = require('express/lib/response');

const express = require('express');
const app = express();
const PORT = 8080;

// Every request will be converted to JSON.
app.use(express.json())

app.listen(
    PORT,
    () => console.log(`It\'s alive on http://localhost:${PORT}`)
)

app.get('/books', (request, response) => {
    response.status(200);
    response.send({
        'id' : 'N/A',
        'title' : 'All the books are in this directory!',
        'author' : 'All authors!'
    })
});

app.post('/books/:id', (request, response) => {
    try {
    const { id } = request.params;
    const { title, author } = request.body;

    if (!title || !author) {
        response.status(400);
        response.send({ message : 'We need a title and an author!'});
    }
    else {
    response.status(200);
    response.send({
        'id' : id,
        'title' : title,
        'author' : author,
    })
}
    }
    catch{
        response.status(400);
        response.send({ message : 'Could not POST! :('});
    }
   
});