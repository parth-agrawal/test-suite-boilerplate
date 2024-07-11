import express from 'express';
import prisma from './prisma/client';

export const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});


app.get('/user/all', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});