import express from 'express';
import prisma from './prisma/client';

export const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000, http://localhost:3000');
});


app.get('/user/all', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});