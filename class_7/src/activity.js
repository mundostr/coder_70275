import express from 'express';


const PORT = 5050;
let initialPhrase = 'Frase inicial';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/phrase', (req, res) => {
    res.status(200).send({ error: null, phrase: initialPhrase });
});

app.get('/api/phrase/:pos', (req, res) => {
    const pos = parseInt(req.params.pos);
    const words = initialPhrase.split(' ');
    
    let searched = words[pos - 1];
    if (searched === undefined) searched = '';

    res.status(200).send({ error: null, searched: searched });
});

app.post('/api/phrase', (req, res) => {
    const word = req.body.word;
    
    const words = initialPhrase.split(' ');
    const wordsQty = words.length;
    words.push(word);
    initialPhrase = words.join(' ');
    
    res.status(200).send({ error: null, added: word, pos: wordsQty + 1 });
});

app.put('/api/phrase/:pos', (req, res) => {
    const word = req.body.word;
    
    const words = initialPhrase.split(' ');
    const previous = words[req.params.pos - 1];
    words[req.params.pos - 1] = word;
    initialPhrase = words.join(' ');
    
    res.status(200).send({ error: null, updated: word, previous: previous });
});

app.delete('/api/phrase/:pos', (req, res) => {
    const pos = req.params.pos;
    
    const words = initialPhrase.split(' ');
    words.splice(pos - 1, 1);
    initialPhrase = words.join(' ');
    
    res.status(200).send({ error: null, deleted: pos, phrase: initialPhrase });
});


app.listen(PORT, () => {
    console.log(`Server activo en puerto ${PORT}`);
});
