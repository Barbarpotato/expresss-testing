import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(3030, () => {
    console.log(`Server is running at http://localhost:${3030}`);
});