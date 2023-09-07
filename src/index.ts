// express 

import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

const server = app.listen(6000, () =>
    console.log(`
🚀 Server ready at: http://localhost:6000`),
)