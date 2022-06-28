import express, { Express, Request, Response } from 'express';


const app = express();

app.get('/', (req, res) => {
  res.send('Simple express server');
});

app.listen(3001, () => {
  console.log(`[server]: Server is running at https://localhost:3001`);
});